import { useEffect } from "react";
// import { useLaunchParams } from "@telegram-apps/sdk-react";
import { AppRoot } from "@telegram-apps/telegram-ui";
import {
  bindMiniAppCSSVars,
  bindThemeParamsCSSVars,
  bindViewportCSSVars,
  useLaunchParams,
  useMiniApp,
  useThemeParams,
  useViewport,
} from "@telegram-apps/sdk-react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./navigation/routes";

const App = () => {
  const lp = useLaunchParams();
  const miniApp = useMiniApp();
  const themeParams = useThemeParams();
  const viewport = useViewport();

  useEffect(() => {
    return bindMiniAppCSSVars(miniApp, themeParams);
  }, [miniApp, themeParams]);

  useEffect(() => {
    return bindThemeParamsCSSVars(themeParams);
  }, [themeParams]);

  useEffect(() => {
    return viewport && bindViewportCSSVars(viewport);
  }, [viewport]);
  // const launchParams = useLaunchParams();
  // const [username, setUsername] = useState<string | undefined>("");
  // useEffect(() => {
  //   if (launchParams) {
  //     const user = launchParams.initData?.user?.username;
  //     console.log("User info:", launchParams);
  //     setUsername(user);
  //   }
  // }, [launchParams]);

  return (
    <AppRoot
      appearance={miniApp.isDark ? "dark" : "light"}
      platform={["macos", "ios"].includes(lp.platform) ? "ios" : "base"}
    >
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
          <Route path="*" element={<Navigate to="/home-page" />} />
        </Routes>
      </BrowserRouter>
    </AppRoot>
  );
};

export default App;
