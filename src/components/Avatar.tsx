interface AvatarProps {
  name: string;
}
const Avatar: React.FC<AvatarProps> = ({ name }) => {
  const initial = name.charAt(0).toUpperCase();
  return (
    <div className="flex justify-center items-center">
      <div className="w-24 h-24 bg-blue-500 text-white text-5xl font-bold rounded-full flex justify-center items-center">
        {initial}
      </div>
    </div>
  );
};

export default Avatar;
