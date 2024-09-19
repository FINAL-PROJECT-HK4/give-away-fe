import { initViewport } from "@telegram-apps/sdk";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setUser, clearUser } from "../../redux/userSlice";
import { setTokens } from "../../redux/auth/authSlice";
import { toast } from "react-toastify";

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

  useEffect(() => {
    const webApp = window.Telegram.WebApp;
    const initDataUnsafe = webApp.initDataUnsafe;
    const queryIdUser = webApp.initData;
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
        // Cập nhật tokens vào Redux và lưu trữ vào localStorage
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
      const [viewport] = initViewport();
      const vp = await viewport;
      vp.expand();
      navigate("/home-page");
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-4 ">
        <div className="w-52 h-52 mt-10 rounded-full overflow-hidden">
          <img
            src="https://s480-ava-grp-talk.zadn.vn/b/6/3/a/2/480/b8cdc18b59dbe6476b2bc83f1d3346a1.jpg"
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center">
          <p className="text-4xl py-4">👋 Hey!</p>
          <p>Enter your referral code to get your reward!</p>
        </div>

        <div className="w-full pt-6">
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
        </div>
      </div>
    </>
  );
}

export default Splash;
