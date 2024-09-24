import { initViewport } from "@telegram-apps/sdk";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setUser, clearUser } from "../../redux/userSlice";
import { setTokens } from "../../redux/auth/authSlice";
import { toast } from "react-toastify";
import axiosInstance from "../../utils/axiosInstance";
import Logo from "../../assets/logoMMO.png";

interface InitDataProps {
  queryId: string;
  invitedCode: string | null;
}

function Splash() {
  const [invitedCode, setInvitedCode] = useState<string | null>(null);
  const [queryId, setQueryId] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    const webApp = window.Telegram.WebApp;
    const { initDataUnsafe } = webApp;
    const queryIdUser = webApp.initData;

    if (initDataUnsafe) {
      localStorage.setItem("username", initDataUnsafe?.user?.username || "");
      localStorage.setItem("userId", initDataUnsafe?.user?.id.toString() || "");
    }

    if (queryIdUser) {
      setQueryId(queryIdUser);
    }

    if (initDataUnsafe?.start_param) {
      setInvitedCode(initDataUnsafe?.start_param);
    }
    if (initDataUnsafe && initDataUnsafe.user) {
      dispatch(setUser(initDataUnsafe.user));
    } else {
      dispatch(clearUser());
    }
  }, [dispatch]);

  const handleLogin = async (initData: InitDataProps) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BE_URL}/auth/login`,
        initData
      );

      if (response.data.success) {
        const { accessToken, refreshToken } = response.data;

        dispatch(setTokens({ accessToken, refreshToken }));
        return true;
      } else {
        console.error("Login failed.");
        toast.error("Login failed.");
        return false;
      }
    } catch (error) {
      console.error("Error calling API:", error);
      toast.error("Login failed.");
      return false;
    }
  };

  const handleClick = async () => {
    setLoading(true);
    const isLoggedIn = await handleLogin({ queryId, invitedCode });
    setLoading(isLoggedIn);

    if (isLoggedIn) {
      const { data: checkinData } = await axiosInstance.get(
        "/dailycheckin/checkin"
      );

      if (checkinData[0].handle_daily_checkin) {
        const { consecutive_days, reward_points } =
          checkinData[0].handle_daily_checkin;

        const [viewport] = initViewport();
        const vp = await viewport;
        vp.expand();
        return navigate(
          `checking?consecutive_days=${consecutive_days}&reward_points=${reward_points}`
        );
      }
    }
  };

  useEffect(() => {
    const markAttendance = async () => {
      try {
        const { data: loginData } = await axiosInstance.get("/user");
        if (loginData.error) {
          console.log("User is not logged in", loginData);
          return;
        }

        const { data } = await axiosInstance.get("/dailycheckin");
        if (data.checkedIn) {
          return navigate("/home-page");
        }

        const { data: checkinData } = await axiosInstance.get(
          "/dailycheckin/checkin"
        );

        if (checkinData[0]?.handle_daily_checkin) {
          const { consecutive_days, reward_points } =
            checkinData[0].handle_daily_checkin;

          return navigate(
            `/checking?consecutive_days=${consecutive_days}&reward_points=${reward_points}`
          );
        }
      } catch (error) {
        console.error("Failed to mark attendance:", error);
      }
    };

    markAttendance();
  }, [navigate]);

  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-4 ">
        <div className="w-52 h-52 mt-10 rounded-full overflow-hidden">
          <img src={Logo} alt="Avatar" className="w-full h-full object-cover" />
        </div>
        <div className="text-center">
          <p className="text-4xl py-4">👋 Hey!</p>
          <p>Enter your referral code to get your reward!</p>
        </div>

        <div className="w-full pt-6">
          {!token && (
            <button
              onClick={handleClick}
              className={`w-full h-12  rounded-full text-white bg-[#2f7cf6] `}
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                "Wow, let’s go!"
              )}
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Splash;
