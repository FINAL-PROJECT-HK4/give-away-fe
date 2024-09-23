import { useLocation, useNavigate } from "react-router-dom";
import "./styles.css";
import Confetti from "../../assets/confetti-4.png";
import Confetti2 from "../../assets/confetti-2.png";

//handle_daily_checkin

const CheckingDaily = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const consecutiveDays = queryParams.get("consecutive_days") || 0;
  const rewardPoints = queryParams.get("reward_points") || 0;

  const handleContinue = () => {
    navigate("/home-page");
  };

  return (
    <div>
      <div className="relative flex flex-col">
        <div className="streak text-center mb-5 relative z-10 flex flex-col mt-28">
          <p className=" font-bold day-number relative z-30">
            {consecutiveDays}
          </p>
          <span className="streak-text text-2xl font-bold relative z-30">
            days streak
          </span>
          <div className="czp-reward flex text-yellow-300 text-xl mt-1 gap-2 items-center justify-center">
            <p> +{rewardPoints} CZP</p>
            <img
              src={Confetti2}
              alt=""
              className=" w-8 left-1/2 -translate-x-1/2 top-0"
            />
          </div>
          <img
            src={Confetti}
            alt=""
            className="absolute z-0 w-52 left-1/2 -translate-x-1/2 top-16 opacity-40"
          />
        </div>

        <p className="message text-lg mt-2 text-center">
          Great job! Visit daily for continuous rewards
        </p>
        <div className="flex justify-center relative">
          <button
            className="continue-btn mt-4 flex justify-betweens font-medium px-6 py-2 text-lg bg-white text-black rounded-lg z-10"
            onClick={handleContinue}
          >
            <p> Continue</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckingDaily;
