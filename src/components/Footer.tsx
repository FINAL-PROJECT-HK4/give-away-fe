import { useLocation, useNavigate } from "react-router-dom";
import WalletIcon from "./WalletIcon";
import GameIcon from "./SkeletonTasks/GameIcon";

function Footer({ height }: { height: number }) {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div
      className={`fixed z-10 bg-black bottom-0 left-0 w-full flex justify-around items-center py-4`}
      style={{ height: `${height}px` }}
    >
      <div
        className="flex flex-col items-center"
        role="button"
        onClick={() => handleNavigation("/home-page")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M4 11.4522V16.8002C4 17.9203 4 18.4807 4.21799 18.9086C4.40973 19.2849 4.71547 19.5906 5.0918 19.7823C5.5192 20.0001 6.07899 20.0001 7.19691 20.0001H16.8031C17.921 20.0001 18.48 20.0001 18.9074 19.7823C19.2837 19.5906 19.5905 19.2849 19.7822 18.9086C20 18.4811 20 17.9216 20 16.8037V11.4522C20 10.9179 19.9995 10.6506 19.9346 10.4019C19.877 10.1816 19.7825 9.97307 19.6546 9.78464C19.5102 9.57201 19.3096 9.39569 18.9074 9.04383L14.1074 4.84383C13.3608 4.19054 12.9875 3.86406 12.5674 3.73982C12.1972 3.63035 11.8026 3.63035 11.4324 3.73982C11.0126 3.86397 10.6398 4.19014 9.89436 4.84244L5.09277 9.04383C4.69064 9.39569 4.49004 9.57201 4.3457 9.78464C4.21779 9.97307 4.12255 10.1816 4.06497 10.4019C4 10.6506 4 10.9179 4 11.4522Z"
            stroke={isActive("/home-page") ? "#FFFFFF" : "#A6A6A6"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <div
          className={`${
            isActive("/home-page") ? "text-white" : "text-[#A6A6A6]"
          }`}
        >
          Home
        </div>
      </div>
      <div
        className="flex flex-col items-center"
        role="button"
        onClick={() => handleNavigation("/game")}
      >
        <GameIcon active={isActive("/game")} />
        <p
          className={`text-[16px] ${
            isActive("/game") ? "text-white" : "text-[#A6A6A6]"
          }`}
        >
          Game
        </p>
      </div>
      <div
        className="flex flex-col items-center"
        role="button"
        onClick={() => handleNavigation("/frends")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M21 19.9999C21 18.2583 19.3304 16.7767 17 16.2275M15 20C15 17.7909 12.3137 16 9 16C5.68629 16 3 17.7909 3 20M15 13C17.2091 13 19 11.2091 19 9C19 6.79086 17.2091 5 15 5M9 13C6.79086 13 5 11.2091 5 9C5 6.79086 6.79086 5 9 5C11.2091 5 13 6.79086 13 9C13 11.2091 11.2091 13 9 13Z"
            stroke={isActive("/frends") ? "#FFFFFF" : "#A6A6A6"}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <div
          className={`${isActive("/frends") ? "text-white" : "text-[#A6A6A6]"}`}
        >
          Frends
        </div>
      </div>
      <div
        className="flex flex-col items-center"
        role="button"
        onClick={() => handleNavigation("/wallet")}
      >
        <WalletIcon active={isActive("/wallet")} />
        <div
          className={`text-[16px] ${
            isActive("/wallet") ? "text-white" : "text-[#A6A6A6]"
          }`}
        >
          Wallet
        </div>
      </div>
    </div>
  );
}

export default Footer;
