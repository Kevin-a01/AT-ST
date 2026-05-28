import { LogIn } from "lucide-react";
import Header from "./Header";

import { SignIn } from "@clerk/react";

export default function LoginComponent() {
  return (
    <>
      <div className="bg-white py-15 h-screen rounded-2xl shadow-xl md:w-xl md:mx-auto">
        <div className="bg-gray-100 mx-auto w-14 h-14 rounded-full flex justify-center items-center mb-5">
          <LogIn className="text-purple-600" size={30} />
        </div>
        <Header />

        <h2 className="text-center text-sm text-gray-400 mb-5">
          Log in to track your sales!
        </h2>
        <div className="flex justify-center px-5">
          <SignIn />
        </div>
      </div>
    </>
  );
}
