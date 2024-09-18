import { ComponentType } from "react";
import Splash from "../pages/Splash/Splash";
import HomePage from "../pages/HomePage";
import InviteFriendsReferral from "../pages/InviteFriends/InviteFriendsReferral";
import Reward from "../pages/Reward";

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  isFooter?: boolean;
}

export const routes: Route[] = [
  { path: "/", Component: Splash, isFooter: false },
  { path: "/home-page", Component: HomePage, isFooter: true },
  { path: "/reward", Component: Reward, isFooter: true },
  { path: "/frends", Component: InviteFriendsReferral, isFooter: true },
];
