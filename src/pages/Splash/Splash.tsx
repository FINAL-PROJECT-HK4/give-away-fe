import { initViewport } from "@telegram-apps/sdk";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Splash() {
  const [referralCode, setReferralCode] = useState("");
  const navigate = useNavigate();
  const handleClick = async () => {
    const [viewport] = initViewport();
    const vp = await viewport;
    vp.expand();
    navigate("/home-page");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReferralCode(e.target.value);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-4 pt-16">
        <div className="w-52 h-52 rounded-full overflow-hidden">
          <img
            src="https://s480-ava-grp-talk.zadn.vn/b/6/3/a/2/480/b8cdc18b59dbe6476b2bc83f1d3346a1.jpg"
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center pt-10">
          <p className="text-4xl py-4">👋 Hey!</p>
          <p>Enter your referral code to get your reward!</p>
        </div>
        <div className="flex flex-col space-y-2">
          <label className=" font-medium">*Referral code</label>
          <input
            type="text"
            value={referralCode}
            onChange={handleChange}
            maxLength={6}
            placeholder="Enter referral code"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="w-full pt-6">
          <button
            onClick={handleClick}
            className="w-full h-12 bg-[#2f7cf6] rounded-full text-white"
          >
            Wow, let’s go!
          </button>
        </div>
      </div>
    </>
  );
}

export default Splash;
