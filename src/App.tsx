import { useEffect } from "react";
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
import Footer from "./components/Footer";

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
  const footersHeight = 70;

  return (
    <AppRoot
      appearance={miniApp.isDark ? "dark" : "light"}
      platform={["macos", "ios"].includes(lp.platform) ? "ios" : "base"}
    >
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <>
                  <route.Component />

                  <div style={{ marginTop: `${footersHeight - 36}px` }}></div>
                  {route.isFooter && <Footer height={footersHeight}/>}
                </>
              }
            />
          ))}
          <Route path="*" element={<Navigate to="/home-page" />} />
        </Routes>
        
      </BrowserRouter>
    </AppRoot>
  );
};

export default App;
