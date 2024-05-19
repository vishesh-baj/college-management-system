import { jwtDecode } from "jwt-decode";
import { getTokenFromLocalStorage } from "./../services/api";
import { privateRoutes } from "../routes/routes";
import { IDecodedTokenObject } from "../types";

export const useRoleBasedRoutes = () => {
  const token = getTokenFromLocalStorage();
  if (token) {
    const decodedTokenObject: IDecodedTokenObject = jwtDecode(token);
    const filteredRoutes = privateRoutes.filter(({ access }) => {
      return access.includes(decodedTokenObject.role);
    });
    return filteredRoutes;
  }
};

export const useRoleBasedNavigation = () => {};
