import { SquareUser } from "lucide-react";
import Header from "../components/Header";

import { SignUp } from "@clerk/react";

export default function SignUpPage() {
  return (
    <>
      <div className="">
        <div className="bg-white py-10 h-screen shadow-xl md:w-xl md:mx-auto">
          <div className="bg-gray-100 mx-auto w-14 h-14 rounded-full flex justify-center items-center mb-5">
            <SquareUser className="text-purple-600" size={30} />
          </div>
          <Header />

          <h2 className="text-center text-sm text-gray-400 mb-5">
            Sign up to track your sales!
          </h2>

          <div className="flex justify-center">
            <SignUp signInUrl="/sign-in" />
          </div>
        </div>
      </div>
    </>
  );
}
