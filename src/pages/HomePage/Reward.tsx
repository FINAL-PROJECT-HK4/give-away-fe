import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";

interface EveryReward {
  icon: IconDefinition;
  nameOfReward: string;
  amountToken: number;
}

function EveryRewardEl({ icon, nameOfReward, amountToken }: EveryReward) {
  return (
    <div className="my-6 flex justify-between mx-auto">
      <div className="flex w-[70%]">
        <div className="w-[44px] grid place-items-center h-[40px] bg-[#323232] rounded-full">
          <FontAwesomeIcon icon={icon} className="" />
        </div>

        <div className="w-[90%] flex items-center h-[40px]">
          <div className="pl-4">{nameOfReward}</div>
        </div>
      </div>

      <div className="w-fit font-medium flex items-center h-[40px]">
        +{Intl.NumberFormat().format(amountToken)} CZP
      </div>
    </div>
  );
}

function Reward() {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "c") {
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    document.addEventListener("selectstart", (event) => event.preventDefault());
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("selectstart", (event) =>
        event.preventDefault()
      );
    };
  }, []);

  const rewardArr: EveryReward[] = [
    {
      icon: faUser,
      nameOfReward: "Be a good CZP Fan",
      amountToken: 50,
    },
    {
      icon: faXTwitter,
      nameOfReward: "Subscribe to CZP X.com",
      amountToken: 1000,
    },
    {
      icon: faXTwitter,
      nameOfReward: "Subscribeeeeeeee to CZP X.com",
      amountToken: 1000,
    },
  ];

  return (
    <div className="w-[100%] mt-5">
      <div className="text-xl tracking-wide">Your rewards</div>
      <div className=" w-full">
        {rewardArr.map((reward) => (
          <EveryRewardEl
            icon={reward.icon}
            nameOfReward={reward.nameOfReward}
            amountToken={reward.amountToken}
          />
        ))}
      </div>
    </div>
  );
}

export default Reward;
