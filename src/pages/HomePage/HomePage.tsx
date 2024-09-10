import { useLaunchParams } from "@telegram-apps/sdk-react";
import { useEffect, useState } from "react";
import ClonedLogo from "../../assets/czclone.png";
import { TonConnectButton } from "@tonconnect/ui-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Reward from "./Reward";

function HomePage() {
  const launchParams = useLaunchParams();
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    if (launchParams) {
      const user = launchParams.initData?.user?.username;

      console.log("user's info: ", user);
      setUsername(user || "");
    }
  }, [launchParams]);

  return (
    <div className="flex flex-col justify-center items-center py-4">
      <TonConnectButton className="mb-2" />

      <div className="flex flex-col justify-center items-center py-4">
        <img className="w-20 -mb-3" src={ClonedLogo} />
        <h1 className="text-3xl font-bold mt-9">25,850</h1>
        <p className="mt-1 text-[#aaaaaa] font-semibold text-xl">CZP</p>
      </div>
      
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={8}
        slidesPerView="auto"
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper.activeIndex)}
        onSlideChange={(swiper) => console.log(swiper.activeIndex)}
        className="custom-swiper"
      >
        <SwiperSlide className="custom-slide">Slide 1</SwiperSlide>
        <SwiperSlide className="custom-slide">Slide 2</SwiperSlide>
        <SwiperSlide className="custom-slide">Slide 3</SwiperSlide>
        <SwiperSlide className="custom-slide">Slide 4</SwiperSlide>
      </Swiper>
      <Reward />
    </div>
  );
}

export default HomePage;
