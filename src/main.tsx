import { createRoot } from "react-dom/client";
import { SDKProvider } from "@telegram-apps/sdk-react";
import { THEME, TonConnectUIProvider } from "@tonconnect/ui-react";

import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.ts";

// Tạo root và render component
createRoot(document.getElementById("root")!).render(
  <TonConnectUIProvider
    manifestUrl="https://ton-connect.github.io/demo-dapp-with-react-ui/tonconnect-manifest.json"
    uiPreferences={{
      theme: THEME.DARK,
      colorsSet: {
        [THEME.DARK]: {
          connectButton: {
            background: "#ffffff",
            foreground: "#000000",
          },
        },
      },
      borderRadius: "s",
    }}
    walletsListConfiguration={{
      includeWallets: [
        {
          appName: "tonwallet",
          name: "TON Wallet",
          imageUrl: "https://wallet.ton.org/assets/ui/qr-logo.png",
          aboutUrl:
            "https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd",
          universalLink: "https://wallet.ton.org/ton-connect",
          jsBridgeKey: "tonwallet",
          bridgeUrl: "https://bridge.tonapi.io/bridge",
          platforms: ["chrome", "android"],
        },
        {
          appName: "nicegramWallet",
          name: "Nicegram Wallet",
          imageUrl: "https://static.nicegram.app/icon.png",
          aboutUrl: "https://nicegram.app",
          universalLink: "https://nicegram.app/tc",
          deepLink: "nicegram-tc://",
          jsBridgeKey: "nicegramWallet",
          bridgeUrl: "https://bridge.tonapi.io/bridge",
          platforms: ["ios", "android"],
        },
        {
          appName: "binanceWeb3TonWallet",
          name: "Binance Web3 Wallet",
          imageUrl:
            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjMEIwRTExIi8+CjxwYXRoIGQ9Ik01IDE1TDcuMjU4MDYgMTIuNzQxOUw5LjUxNjEzIDE1TDcuMjU4MDYgMTcuMjU4MUw1IDE1WiIgZmlsbD0iI0YwQjkwQiIvPgo8cGF0aCBkPSJNOC44NzA5NyAxMS4xMjlMMTUgNUwyMS4xMjkgMTEuMTI5TDE4Ljg3MSAxMy4zODcxTDE1IDkuNTE2MTNMMTEuMTI5IDEzLjM4NzFMOC44NzA5NyAxMS4xMjlaIiBmaWxsPSIjRjBCOTBCIi8+CjxwYXRoIGQ9Ik0xMi43NDE5IDE1TDE1IDEyLjc0MTlMMTcuMjU4MSAxNUwxNSAxNy4yNTgxTDEyLjc0MTkgMTVaIiBmaWxsPSIjRjBCOTBCIi8+CjxwYXRoIGQ9Ik0xMS4xMjkgMTYuNjEyOUw4Ljg3MDk3IDE4Ljg3MUwxNSAyNUwyMS4xMjkgMTguODcxTDE4Ljg3MSAxNi42MTI5TDE1IDIwLjQ4MzlMMTEuMTI5IDE2LjYxMjlaIiBmaWxsPSIjRjBCOTBCIi8+CjxwYXRoIGQ9Ik0yMC40ODM5IDE1TDIyLjc0MTkgMTIuNzQxOUwyNSAxNUwyMi43NDE5IDE3LjI1ODFMMjAuNDgzOSAxNVoiIGZpbGw9IiNGMEI5MEIiLz4KPC9zdmc+Cg==",
          aboutUrl: "https://www.binance.com/en/web3wallet",
          deepLink: "bnc://app.binance.com/cedefi/ton-connect",
          bridgeUrl: "https://bridge.tonapi.io/bridge",
          jsBridgeKey: "binancew3w",
          platforms: ["chrome", "safari", "ios", "android"],
          universalLink: "https://app.binance.com/cedefi/ton-connect",
        },
        {
          appName: "fintopio-tg",
          name: "Fintopio Telegram",
          imageUrl: "https://fintopio.com/tonconnect-icon.png",
          aboutUrl: "https://fintopio.com",
          universalLink: "https://t.me/fintopio?attach=wallet",
          bridgeUrl: "https://wallet-bridge.fintopio.com/bridge",
          platforms: ["ios", "android", "macos", "windows", "linux"],
        },
        {
          appName: "GateWallet",
          name: "GateWallet",
          imageUrl: "https://www.gate.io/images/login/qrcode_center_icon.svg",
          aboutUrl: "https://www.gate.io/",
          bridgeUrl: "https://dapp.gateio.services/tonbridge_api/bridge/v1",
          jsBridgeKey: "gatetonwallet",
          platforms: ["ios", "android", "chrome"],
          universalLink: "https://gateio.onelink.me/DmA6/web3",
        },
        {
          appName: "tokenpocket",
          name: "TokenPocket",
          imageUrl: "https://hk.tpstatic.net/logo/tokenpocket.png",
          aboutUrl: "https://tokenpocket.pro",
          jsBridgeKey: "tokenpocket",
          platforms: ["ios", "android"],
        },
        {
          appName: "dewallet",
          name: "DeWallet",
          imageUrl:
            "https://raw.githubusercontent.com/delab-team/manifests-images/main/WalletAvatar.png",
          aboutUrl: "https://delabwallet.com",
          universalLink: "https://t.me/dewallet?attach=wallet",
          bridgeUrl: "https://bridge.dewallet.pro/bridge",
          platforms: ["ios", "android", "macos", "windows", "linux"],
        },
        {
          appName: "BitgetWeb3",
          name: "BitgetWeb3",
          imageUrl: "https://img.bitgetimg.com/image/third/1723701408284.png",
          aboutUrl: "https://www.bitget.com",
          universalLink: "https://t.me/BitgetOfficialBot?attach=wallet",
          bridgeUrl: "https://ton-connect-bridge.bgwapi.io/bridge",
          platforms: ["ios", "android", "windows", "macos", "linux"],
        },
      ],
    }}
  >
    <SDKProvider acceptCustomStyles debug>
      <Provider store={store}>
        <App />
      </Provider>
    </SDKProvider>
  </TonConnectUIProvider>
);
