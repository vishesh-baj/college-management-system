import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../routes/paths";
import { ILogin, IloginSuccess } from "../types";
import { loginUser } from "./api";

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (data: ILogin) => loginUser(data),
    onSuccess: (data: IloginSuccess) => {
      localStorage.setItem("token", data.token);
      navigate(PATHS.dashboardHomePage);
    },
  });
};
