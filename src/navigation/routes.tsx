import { ComponentType } from "react";
import Splash from "../pages/Splash/Splash";
import HomePage from "../pages/HomePage/HomePage";

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
}

export const routes: Route[] = [
  { path: "/", Component: Splash },
  { path: "/home-page", Component: HomePage },
];
