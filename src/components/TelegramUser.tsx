// import React, { useEffect, useState } from "react";
// import { initInitData } from "@telegram-apps/sdk";

// const TelegramUserComponent = () => {
//   const initData = initInitData(); // Hook để lấy thông tin khởi tạo từ Telegram
//   const [user, setUser] = useState<any>(null);

//   useEffect(() => {
//     // Kiểm tra xem thông tin người dùng có sẵn hay không
//     if (initData?.user) {
//       setUser(initData.user);
//     } else {
//       console.log("Không thể lấy thông tin người dùng từ Telegram.");
//     }
//   }, [initData]);

//   // Nếu không có thông tin người dùng, hiển thị thông báo
//   if (!user) {
//     return (
//       <div>Vui lòng mở ứng dụng từ Telegram Mini App để thấy thông tin.</div>
//     );
//   }

//   return (
//     <div>
//       <h1>Chào mừng, {user?.first_name}!</h1>
//       <p>Username: {user?.username}</p>
//       <img src={user?.photo_url} alt="Avatar" />
//     </div>
//   );
// };

// export default TelegramUserComponent;
