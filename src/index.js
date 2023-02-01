import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "./components/context/UserContext";
import { ResumeContextProvider } from "./components/context/ResumeContext";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-x1skkk6mvb8njnfy.us.auth0.com"
      // clientId="1CUPeQxBZY0Zs80oLxsS07nYKvUA98CW"
      clientId="1CUPeQxBZY0Zs80oLxsS07nYKvUA98CW"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <UserContextProvider>
        <ResumeContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ResumeContextProvider>
      </UserContextProvider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
