import { Eye, EyeClosed, SquareUser } from "lucide-react";
import Header from "../components/Header";
import { useState } from "react";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="p-3 my-5">
        <div className="bg-white py-10 rounded-2xl shadow-xl md:w-xl md:mx-auto">
          <div className="bg-gray-100 mx-auto w-14 h-14 rounded-full flex justify-center items-center mb-5">
            <SquareUser className="text-purple-600" size={30} />
          </div>
          <Header />

          <h2 className="text-center text-sm text-gray-400">
            Sign up to track your sales!
          </h2>
          <div className="flex flex-col px-5 gap-2 mt-10">
            <label htmlFor="email">E-mail</label>
            <input
              className="border border-black py-4 rounded-xl outline-none pl-2"
              type="text"
              name="email"
              placeholder="your@email.com"
              id=""
              required
            />
            <div className="flex flex-col relative">
              <label className="mb-2 " htmlFor="password">
                Password
              </label>
              <input
                className="border-black border py-4 rounded-xl outline-none pl-2"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="********"
              />
              <button
                className="absolute bottom-4 right-2.5"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeClosed size={25} /> : <Eye size={25} />}
              </button>
            </div>

            <div className="flex flex-col relative">
              <label className="mb-2" htmlFor="password">
                Confirm Password
              </label>
              <input
                className="border-black border py-4 rounded-xl outline-none pl-2"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="********"
              />
            </div>
          </div>

          <div className="flex justify-center items-center mt-2">
            <button className="text-center w-70 rounded-xl py-3  bg-purple-500 mt-5 text-white shadow-xl shadow-gray-400">
              Create Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
