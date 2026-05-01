import { Eye, EyeClosed, LogIn } from "lucide-react";
import Header from "./Header";
import { Link } from "react-router";
import { useState } from "react";

export default function LoginComponent() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className="bg-white py-10 rounded-2xl shadow-xl md:w-xl md:mx-auto">
        <div className="bg-gray-100 mx-auto w-14 h-14 rounded-full flex justify-center items-center mb-5">
          <LogIn className="text-purple-600" size={30} />
        </div>
        <Header />

        <h2 className="text-center text-sm text-gray-400">
          Log in to track your sales!
        </h2>
        <div className="flex flex-col px-5 gap-2 mt-10">
          <label htmlFor="email">E-mail</label>
          <input
            className="border border-black py-3 rounded-xl outline-none pl-2"
            type="text"
            name="email"
            placeholder="your@email.com"
            id=""
            required
          />
          <div className="flex flex-col relative">
            <label htmlFor="password">Password</label>
            <input
              className="border-black border py-3 rounded-xl outline-none pl-2"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="********"
            />
            <button
              className="absolute bottom-3 right-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeClosed size={25} /> : <Eye size={25} />}
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center mt-2">
          <button className="text-center w-70 rounded-xl py-3  bg-purple-500 mt-5 text-white">
            Log in
          </button>
        </div>

        <Link
          to={`/sign-up`}
          className="flex justify-center mt-3 text-sm underline text-purple-500"
        >
          Create new account
        </Link>
      </div>
    </>
  );
}
