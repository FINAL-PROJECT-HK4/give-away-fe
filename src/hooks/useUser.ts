import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { setUser } from "../redux/userSlice";

export const useUser = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const localUsername = localStorage.getItem("username") || "";
  const localUserId = localStorage.getItem("userId") || "0";

  useEffect(() => {
    if (!user.username && localUsername) {
      dispatch(setUser({ username: localUsername, id: Number(localUserId) }));
    }
  }, [dispatch, user.username, localUsername, localUserId]);

  return user;
};
