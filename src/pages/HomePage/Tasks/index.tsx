import { useEffect, useState } from "react";
import Task from "./Task";
import Categories from "./Categories";
import SkeletonTasks from "../../../components/SkeletonTasks";
import axiosInstance from "../../../utils/axiosInstance";

export interface Category {
  id: string;
  name: string;
  secondsWait: number;
  social: string;
  createAt: string;
  updateAt: string;
}

export interface TaskItem {
  id: string;
  name: string;
  rewardPoint: number;
  icon: string;
  status: "init" | "ready" | "claimed";
  idTaskCategory: string;
  createAt: string;
  taskCategory: Category;
  link: string;
}

interface IProps {
  setPointUser: (point: number | ((prev: number | null) => number)) => void;
}

function Tasks({ setPointUser }: IProps) {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [idCategoryActive, setIdCategoryActive] = useState<string>("");

  const handleChangeCategory = (id: string) => {
    setIdCategoryActive(id);
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        const categoriesData = await axiosInstance.get("/task/categories");
        if (!categoriesData) return;

        const formatCategories = categoriesData.data.map((category: any) => {
          return {
            id: category.id,
            name: category.name,
            secondsWait: category.minute_wait,
            social: category.social,
            createAt: category.create_at,
            updateAt: category.update_at,
          };
        });

        setCategories(formatCategories);
        setIdCategoryActive(categoriesData.data[0].id);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    const getTasks = async () => {
      try {
        const tasksData = await axiosInstance.get(`tasks`);
        if (!tasksData) return;

        const formatTaskData = tasksData.data.map((task: any) => {
          return {
            id: task.id,
            name: task.name,
            rewardPoint: task.reward_point,
            status: task.status,
            idTaskCategory: task.id_task_category,
            createAt: task.create_at,
            icon: task.icon,
            taskCategory: {
              id: task.task_category.id,
              name: task.task_category.name,
              secondsWait: task.task_category.seconds_wait,
              social: task.task_category.social,
              updateAt: task.task_category.update_at,
            },
            link: task.link,
          };
        });

        setTasks(formatTaskData);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    getCategories();
    getTasks();
  }, []);

  const tasksFiltered = tasks.filter((task) => {
    return task.idTaskCategory === idCategoryActive;
  });

  if (categories.length === 0) return <SkeletonTasks />;

  return (
    <>
      {categories.length > 0 && (
        <Categories
          categories={categories}
          onChangeCategory={handleChangeCategory}
          idCategoryActive={idCategoryActive}
        />
      )}
      {tasksFiltered.length > 0 ? (
        tasksFiltered.map((task) => (
          <Task key={task.id} task={task} setPointUser={setPointUser} />
        ))
      ) : (
        <p className="text-white text-center">No tasks found</p>
      )}
    </>
  );
}

export default Tasks;
