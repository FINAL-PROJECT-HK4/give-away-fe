import React from "react";

interface Friend {
  id: string;
  user_id: string;
  invited_user: string;
  invite_code: string;
  created_at: Date;
  updated_at: Date;
  user: {
    telegram_id: string;
    user_name: string;
    invite_code: string;
    reward_point: number;
  };
}

interface FriendListProps {
  friends: Friend[];
}

const FriendList: React.FC<FriendListProps> = ({ friends }) => {
  return (
    <div className="flex w-full flex-col justify-between gap-3 px-4 mt-5">
      <div className="flex flex-col gap-2 rounded-2xl shadow-[0px_0px_16px_0px_rgba(0,0,0,0.04)] [background:rgba(28,28,28,0.80)] p-4">
        <p className="text-[18px] font-semibold tracking-[-0.36px] text-white">
          Frens {friends.length}
        </p>
        <ul
          className="flex-grow overflow-y-auto pr-[14px]"
          style={{
            height: `calc((var(--lvh, 100vh) - (64px + var(--lvh, 100vh) - var(--tg-viewport-height, 100vh))) - 330px)`,
          }}
        >
          {friends.map((friend) => (
            <li
              key={friend.id}
              className="flex items-center justify-between py-2"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-200 text-lg font-semibold text-white">
                  {friend.user.user_name.charAt(0)}
                </div>
                <p className="h4-semibold">{friend.user.user_name}</p>
              </div>
              <div className="flex h-[24px] gap-[6px]">
                <p className="h4-semibold">
                  {friend.user.reward_point}{" "}
                  <span className="text-[#888C94]">Points</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FriendList;
