import { useState } from "react";
import { TaskItem } from ".";
import IconSuccess from "../../../assets/icons8-success-48.png";
import { delay } from "../../../utils/delay";
import { useUser } from "../../../hooks/useUser";
import axiosInstance from "../../../utils/axiosInstance";

interface TaskItemProps {
  task: TaskItem;
}

const Task: React.FC<TaskItemProps> = ({ task }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState(task.status);
  const user = useUser();

  const claimTask = async () => {
    try {
      const response = await axiosInstance.post("/task/claim", {
        taskId: task.id,
        telegramId: user.id?.toString(),
      });

      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  const startTask = async () => {
    try {
      const response = await axiosInstance.post("/task/start", {
        taskId: task.id,
        telegramId: user.id?.toString(),
        reward_point: task.rewardPoint,
      });

      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  const handleClick = async () => {
    if (status === "init") {
      setLoading(true);
      try {
        await delay(2000);

        await startTask();
        setStatus("ready");
      } catch {
        throw new Error("Failed to claim task");
      } finally {
        setLoading(false);
      }
    }

    if (status === "ready") {
      setLoading(true);
      try {
        await delay(2000);

        await claimTask();
        setStatus("claimed");
      } catch {
        throw new Error("Failed to claim task");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="w-full">
      <div className="flex justify-between w-full items-center mt-3 gap-2">
        <div className="h-10 w-10 rounded-full bg-[#323232] flex justify-center items-center">
          <img src={task.icon} alt="" className="w-4 h-4" />
        </div>
        <div className="flex justify-between item flex-1 ">
          <div className="flex flex-col">
            <span className="text-base font-semibold">{task.name}</span>
            <span className="text-white text-base font-medium">
              + {task.rewardPoint} CZP
            </span>
          </div>

          {loading ? (
            <button className="btn btn-sm border-none w-16 h-7 rounded-full font-normal text-sm">
              <span className="loading loading-spinner loading-xs"></span>
            </button>
          ) : status !== "claimed" ? (
            <button
              onClick={() => handleClick()}
              className={`btn btn-sm border-none font-semibold ${
                status === "ready"
                  ? "bg-[#BAEE52] text-[#000000] font-medium hover:bg-[#BAEE52]"
                  : "text-white hover:bg-[#353535] font-normal"
              } w-14 h-7 rounded-full bg-[#323232] text-sm`}
            >
              {status === "init" ? "Start" : "Claim"}
            </button>
          ) : (
            <div className="p-3">
              <img src={IconSuccess} alt="" className="w-4 h-4" />
            </div>
          )}
        </div>
      </div>
      <div className="flex">
        <div className="h-2 w-7"></div>
        <div className="border-b-[#282828] border-b flex-1"></div>
      </div>
    </div>
  );
};

export default Task;
