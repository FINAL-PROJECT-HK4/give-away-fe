import { ComponentType } from "react";
import Splash from "../pages/Splash/Splash";
import HomePage from "../pages/HomePage";
import InviteFriendsReferral from "../pages/InviteFriends/InviteFriendsReferral";
import Reward from "../pages/Reward";
import CheckingDaily from "../pages/CheckingDaily";
import Wallet from "../pages/Wallet/Wallet";

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  isFooter?: boolean;
}

export const routes: Route[] = [
  { path: "/", Component: Splash, isFooter: false },
  { path: "/home-page", Component: HomePage, isFooter: true },
  { path: "/game", Component: Reward, isFooter: true },
  { path: "/checking", Component: CheckingDaily, isFooter: false },
  { path: "/frends", Component: InviteFriendsReferral, isFooter: true },
  { path: "/wallet", Component: Wallet, isFooter: true },
];
