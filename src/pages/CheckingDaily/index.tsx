import { useLocation, useNavigate } from "react-router-dom";
import "./styles.css";
import ConfettiExplosion from "react-confetti-explosion";


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
        <div className="streak text-center mb-5 relative z-10 flex flex-col">
        <div className="flex justify-center flex-col items-center text-8xl my-5">
            <ConfettiExplosion />
            🎉
          </div>
          <p className=" font-bold day-number relative z-30">
            {consecutiveDays}
          </p>
          
          <div className="czp-reward flex text-yellow-300 text-xl mt-1 gap-2 items-center justify-center">
            <p> +{rewardPoints} Points  and 1🎟️</p>
            
          </div>
          
        </div>

        <p className="message text-lg mt-2 text-center">
          Great job! Visit daily for continuous rewards
        </p>
        <div className=" text-center  w-full">
          <button
            className=" w-full text-center mt-4  font-medium px-6 py-2 text-lg bg-[#ccfd07] text-black rounded-lg z-10"
            onClick={handleContinue}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckingDaily;
