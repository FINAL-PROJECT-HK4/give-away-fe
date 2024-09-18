import "./style.css";

const SkeletonTasks = () => {
  return (
    <div className="skeleton-container w-full">
      <div className="skeleton-category bg-[#1C1C1E] h-10 w-full rounded-lg"></div>
      <div className="skeleton-tasks bg-[#1C1C1E] w-full h-52 mt-3 rounded-lg"></div>
    </div>
  );
};

export default SkeletonTasks;
