import Tasks from "./Tasks";
import Avatar from "../../components/Avatar";
import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import SkeletonPointUser from "../../components/SkeletonPointUser";
import { useUser } from "../../hooks/useUser";

function HomePage() {
  const [pointUser, setPointUser] = useState<number | null>(null);
  const user = useUser();

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axiosInstance.get(`/user`);

        if (response) {
          setPointUser(response?.data?.reward_point);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    getUser();
  }, [user]);

  return (
    <div className="flex flex-col justify-center items-center py-4">
      <div className="flex flex-col justify-center items-center py-4">
        <Avatar name={user.username || ""} />
        <p className="mt-4 text-[#aaaaaa] font-semibold text-xl">
          {user.username}
        </p>
        {pointUser !== null ? (
          <h1 className="text-3xl font-bold mt-5">{pointUser} MP</h1>
        ) : (
          <SkeletonPointUser />
        )}
      </div>
      <Tasks setPointUser={setPointUser} />
    </div>
  );
}

export default HomePage;
