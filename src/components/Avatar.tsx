
interface AvatarProps {
  name: string;
}
const Avatar: React.FC<AvatarProps> = ({ name }) => {
  const initial = name?.charAt(0).toUpperCase() || "";

  const stringToColor = (str: string) => {
    const firstChar = str?.charAt(0).toLocaleLowerCase();

    if (firstChar === "c" || firstChar === "b") {
      return "rgb(63, 196, 191)";
    }

    if (firstChar === "k") {
      return "rgb(61 3 220)";
    }

    return "rgb(63, 196, 191)";
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
      </div>
    </div>
  );
};

export default Avatar;
