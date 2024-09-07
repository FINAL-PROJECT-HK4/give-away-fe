import { useState } from "react";

function Task() {
  const [loading, setLoading] = useState<number | null>(null);

  const handleButtonClick = (url: string) => {
    window.open(url, "_blank");
    setLoading(1);
  };
  return (
    <>
      <h1 className="text-3xl font-semibold pb-7">Task</h1>
      <div className="flex justify-between">
        <div className="flex">
          <img
            className="h-6 w-6"
            src="https://s3.blum.codes/b1336c17-8b26-49dc-9d07-0e1d9eaee9ae/c892ae72-f8c0-4270-8abc-0e5630c3b078"
            alt="Task icon"
          ></img>
          <span className="pl-2">Follow Facebook</span>
        </div>
        {loading ? (
          <button className="btn btn-square w-20 h-9 min-h-9 rounded-full">
            <span className="loading loading-spinner loading-xs"></span>
          </button>
        ) : (
          <button
            onClick={() =>
              handleButtonClick("https://www.facebook.com/quocbao010898/")
            }
            className="btn btn-sm text-white w-20 h-9 rounded-full"
          >
            Start
          </button>
        )}
      </div>
    </>
  );
}

export default Task;
