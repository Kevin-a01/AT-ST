import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { Show, SignInButton, SignUpButton } from "@clerk/react";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <Show when="signed-out">
        <LandingPage />
      </Show>
    </>
  );
}

export default App;
