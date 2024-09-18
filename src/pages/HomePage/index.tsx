import { TonConnectButton } from "@tonconnect/ui-react";
import Tasks from "./Tasks";
import Avatar from "../../components/Avatar";
import { useUser } from "../../hooks/useUser";
import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import SkeletonPointUser from "../../components/SkeletonPointUser";

function HomePage() {
  const [pointUser, setPointUser] = useState<number | null>(null);
  const user = useUser();
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axiosInstance.get(`/user/${user.id}`);

        if (response) {
          setPointUser(response?.data?.reward_point);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    getUser();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center py-4">
      <TonConnectButton className="mb-2" />

      <div className="flex flex-col justify-center items-center py-4">
        <Avatar name={user.username!} />
        <p className="mt-3 text-[#aaaaaa] font-semibold text-xl">
          {user.username}
        </p>
        {pointUser !== null ? (
          <h1 className="text-3xl font-bold mt-5">{pointUser} CZP</h1>
        ) : (
          <SkeletonPointUser />
        )}
      </div>
      <Tasks />
    </div>
  );
}

export default HomePage;
