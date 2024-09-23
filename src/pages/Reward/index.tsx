import CommingSoon from "../../assets/comming-soon.webp";

const Reward = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <img src={CommingSoon} alt="" className="w-1/2 rounded-full" />
      <p className="text-white text-2xl font-bold">Comming soon!</p>
    </div>
  );
};

export default Reward;
