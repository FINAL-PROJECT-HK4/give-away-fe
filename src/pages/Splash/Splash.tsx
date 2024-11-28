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
  // const token = localStorage.getItem("accessToken");

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
      const { data } = await axiosInstance.get("/dailycheckin");
      if (data.checkedIn) {
        return navigate("/home-page");
      }
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
      return navigate("/home-page");
    }

  };


  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-4 mt-14">
        <div
          className="w-52 h-52 rounded-full overflow-hidden flex justify-center items-center bg-[#CFFF05]"
          style={{
            boxShadow: "0px 0px 100px 0px rgba(207, 255, 5, 0.68)",
          }}
        >
          <p className="font-quantico text-black font-black text-7xl">BTP</p>
        </div>
        <div className="text-center">
          <p className="text-4xl py-4">👋 Hey!</p>
          <p>Join the community to get rewards!</p>
        </div>

        <div className="w-full pt-6">
          {/* {!token && ( */}
            <button
              onClick={handleClick}
              className={`w-full h-12 font-bold rounded-full text-black bg-[#CFFF05] `}
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                "Wow, let’s go!"
              )}
            </button>
          {/* )} */}
        </div>
      </div>
    </>
  );
}

export default Splash;
