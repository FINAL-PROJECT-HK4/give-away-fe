import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import FriendList from "./components/FriendList";
import InformationInvite from "./components/InformationInvite";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";

function InviteFriendsReferral() {
  const [openReferral, setOpenReferral] = useState<boolean>(false);
  const [inviteCode, setInviteCode] = useState<string>("");
  const [friends, setFriends] = useState([]);

  const handleOpenReferral = () => {
    setOpenReferral(true);
  };

  useEffect(() => {
    const getInfoUser = async () => {
      try {
        const [friendsResponse, inviteResponse] = await Promise.all([
          axiosInstance.get(`/user/friends`),
          axiosInstance.get(`/user`),
        ]);
        if (friendsResponse) {
          setFriends(friendsResponse.data);
        }
        if (inviteResponse) {
          setInviteCode(inviteResponse.data.invite_code);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    getInfoUser();
  }, []);

  const inviteLink = `https://t.me/barotran_mini_bot/naikyo?startapp=${inviteCode}`;
  const message = "Join me on this platform!";

  const handleShareLink = () => {
    const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent(
      inviteLink
    )}&text=${encodeURIComponent(message)}`;
    window.open(telegramShareUrl, "_blank");
  };

  return (
    <div className="flex relative h-screen flex-col items-center py-4">
      <img
        src="https://telegram.blum.codes/_dist/Friends.ClqyQOtA.webp"
        className=" w-14 h-14"
      />
      <p className="font-bold text-3xl text-center w-[67%]">Invite friends</p>
      <p className="font-bold text-3xl text-center">and get more MP</p>

      <button
        onClick={handleOpenReferral}
        className=" absolute bottom-24 bg-white text-black text-base font-[600] w-full py-5 tracking-normal rounded-lg"
      >
        Invite friends
      </button>
      {friends.length !== 0 ? (
        <FriendList friends={friends} />
      ) : (
        <InformationInvite />
      )}

      {openReferral && (
        <div
          className={`popup w-[110%] z-20 mb-24 absolute bottom-0 bg-[#1C1C1E] pb-8 px-5 rounded-tl-xl rounded-tr-xl`}
        >
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
            <CopyToClipboard
              text={`https://t.me/barotran_mini_bot/naikyo?startapp=${inviteCode}`}
              onCopy={() => {
                toast.success("Copy successful");
              }}
            >
              <button className="bg-white mt-6 text-black text-base font-[600] w-full py-3 tracking-normal rounded-lg">
                Copy invite link
              </button>
            </CopyToClipboard>

            <button
              onClick={handleShareLink}
              className="bg-white mt-4 -mb-4 text-black text-base font-[600] w-full py-3 tracking-normal rounded-lg"
            >
              Share invite link
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default InviteFriendsReferral;
