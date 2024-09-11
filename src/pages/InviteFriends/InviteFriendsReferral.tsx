import { useState } from "react";
import Logo from "../../assets/czclone.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function InviteFriendsReferral() {
  const [openReferral, setOpenReferral] = useState(false);

  const handleOpenReferral = () => {
    setOpenReferral(true);
  };
  return (
    <div className="flex relative h-full flex-col justify-center items-center py-4">
      <p className="font-bold text-3xl text-center w-[67%]">Invite friends</p>
      <p className="font-bold text-3xl text-center">and get more CZP</p>

      <img src={Logo} className="mt-10" />

      <button
        onClick={handleOpenReferral}
        className="bg-white mt-6 text-black text-base font-[600] w-full py-3 tracking-normal rounded-lg"
      >
        Invite friends
      </button>

      {openReferral && (
        <div className={`popup w-[110%] z-20 -mb-[106px] absolute bottom-0 bg-[#1C1C1E] pb-8 px-5 rounded-tl-xl rounded-tr-xl`}>
          <div className="flex justify-end py-4 rounded-tl-xl rounded-tr-xl">
            <p className="text-lg font-bold tracking-wide w-[76%] text-center">
              Invite friends
            </p>

            <FontAwesomeIcon
              onClick={() => setOpenReferral(false)}
              icon={faTimes}
              style={{ fontSize: "24px" }}
              className="text-[#8E8E93] cursor-pointer translate-y-[2px] w-[12%] text-center"
            />
          </div>

          <div className="bg-[#49494B] h-[1px] mx-auto" />

          <div className="w-[98%] mx-auto ">
            <button className="bg-white mt-6 text-black text-base font-[600] w-full py-3 tracking-normal rounded-lg">
              Copy invite link
            </button>

            <button className="bg-white mt-4 -mb-4 text-black text-base font-[600] w-full py-3 tracking-normal rounded-lg">
              Share invite link
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default InviteFriendsReferral;
