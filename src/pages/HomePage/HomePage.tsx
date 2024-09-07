import { useLaunchParams } from "@telegram-apps/sdk-react";
import Avatar from "../../components/Avatar";
import { useEffect, useState } from "react";

function HomePage() {
  const launchParams = useLaunchParams();
  const [username, setUsername] = useState<string>("");
  useEffect(() => {
    if (launchParams) {
      const user = launchParams.initData?.user?.username;
      console.log("User info:", launchParams);
      setUsername(user || "");
    }
  }, [launchParams]);

  return (
    <div className="flex flex-col justify-center items-center py-4">
      <Avatar name={username} />
      <h1 className="text-2xl font-bold mt-4">{username}</h1>
      <h1 className="text-4xl font-bold mt-9">N 100,000</h1>
    </div>
  );
}

export default HomePage;
