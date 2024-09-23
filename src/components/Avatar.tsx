import Crown from "../assets/premium-quality.png";

interface AvatarProps {
  name: string;
}
const Avatar: React.FC<AvatarProps> = ({ name }) => {
  const initial = name?.charAt(0).toUpperCase() || "";

  const stringToColor = (str: string) => {
    const firstChar = str?.charAt(0).toLocaleLowerCase();

    if (firstChar === "c" || firstChar === "b") {
      return "rgb(247, 53, 255)";
    }

    if (firstChar === "k") {
      return "rgb(61 3 220)";
    }

    return "rgb(63, 196, 191)";
  };

  const nameToCrown = () => {
    const nameUser = name?.toLocaleLowerCase();

    if (
      nameUser === "louisnguyen1912" ||
      nameUser === "baotran0108" ||
      nameUser == "nathando91" ||
      nameUser == "colab_bui"
    ) {
      return true;
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className="w-24 h-24 text-white text-5xl font-bold rounded-full flex justify-center items-center"
        style={{
          backgroundColor: stringToColor(name),
        }}
      >
        {initial}
        {nameToCrown() && (
          <img
            src={Crown}
            alt=""
            className="w-10 h-10 absolute top-12 translate-x-1/2 rotate-45"
          />
        )}
      </div>
    </div>
  );
};

export default Avatar;
