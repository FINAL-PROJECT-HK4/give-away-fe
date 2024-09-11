import { initViewport } from "@telegram-apps/sdk";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Splash() {
  const [referralCode, setReferralCode] = useState("");
  const [isButtonVisible, setIsButtonVisible] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const webApp = window.Telegram.WebApp;
    const initDataUnsafe = webApp.initDataUnsafe;

    if (initDataUnsafe?.start_param) {
      setReferralCode(initDataUnsafe?.start_param);
    } else {
      console.log("No start_param found.");
    }
  }, []);

  useEffect(() => {
    if (referralCode.length === 6) {
      setError("");
      checkStartParam(referralCode);
    }
  }, [referralCode]);

  const checkStartParam = async (param: string) => {
    try {
      const response = await axios.post("///", {
        startParam: param,
      });
      if (response) {
        setError("");
        setIsButtonVisible(true);
      } else {
        setError("Please re-enter, referral code is incorrect.");
        setIsButtonVisible(false);
      }
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
      setError("An error occurred while checking the referral code.");
      setIsButtonVisible(false);
    }
  };

  const handleClick = async () => {
    const [viewport] = initViewport();
    const vp = await viewport;
    vp.expand();
    navigate("/home-page");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReferralCode(e.target.value);
  };

  const handleBlur = () => {
    if (referralCode.length < 6) {
      setError("Referral code must be 6 characters.");
    }
  };

  const handleFocus = () => {
    setError("");
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-4 ">
        <div className="w-52 h-52 rounded-full overflow-hidden">
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
        <div className="flex flex-col space-y-2">
          <label className=" font-medium">*Referral code</label>
          <input
            type="text"
            value={referralCode}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            maxLength={6}
            placeholder="Enter referral code"
            className="border bg-zinc-950 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div className="h-1">
            {error && <p className="text-red-500 text-xs">{error}</p>}
          </div>
        </div>
        <div className="w-full pt-6">
          <button
            onClick={handleClick}
            className={`w-full h-12  rounded-full text-white ${
              isButtonVisible
                ? "bg-[#2f7cf6]"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!isButtonVisible}
          >
            Wow, let’s go!
          </button>
        </div>
      </div>
    </>
  );
}

export default Splash;
