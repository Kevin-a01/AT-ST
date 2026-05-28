import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { Show, SignInButton, SignUpButton } from "@clerk/react";
import LandingPage from "./pages/LandingPage";
import SignUpPage from "./pages/SignUpPage";
import LoginComponent from "./components/LoginComponent";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Show when={"signed-out"}>
                <LandingPage />
              </Show>
              {/* <Show when={"signed-in"}
              <DashBoard/>
              </Show */}
            </>
          }
        />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/sign-in" element={<LoginComponent />} />
      </Routes>
    </>
  );
}

export default App;
