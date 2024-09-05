import { useEffect, useState } from "react";
import { initInitData } from "@telegram-apps/sdk";

const App = () => {
  const [launchData, setLaunchData] = useState(null);

  useEffect(() => {
    // Sử dụng initInitData để khởi tạo dữ liệu Telegram
    const data = initInitData();
    setLaunchData(data);
    console.log("Launch Data:", data); // In dữ liệu ra console để kiểm tra
  }, []);

  return (
    <div>
      <h1>Ứng dụng Telegram</h1>
      {launchData ? (
        <div>
          <p>First Name: {launchData.user?.first_name}</p>
          <p>Last Name: {launchData.user?.last_name}</p>
          <p>Username: {launchData.user?.username}</p>
        </div>
      ) : (
        <p>Đang tải dữ liệu từ Telegram...</p>
      )}
    </div>
  );
};

export default App;
