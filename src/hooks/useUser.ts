import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const useUser = () => {
  const user = useSelector((state: RootState) => state.user);
  return user;
};
