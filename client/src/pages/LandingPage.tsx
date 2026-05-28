import { SignInButton, SignUpButton } from "@clerk/react";
import { TrendingUp, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex p-3 gap-3 items-center w-full">
        <div className="bg-purple-500 p-1.5 rounded-xl">
          <TrendingUp size={23} className="text-white" />
        </div>
        <p className="text-lg">Artist alley Tracker</p>
        <button
          onClick={() => navigate("/sign-in")}
          className="ml-auto cursor-pointer text-purple-500 font-medium "
        >
          Sign In
        </button>
      </div>
      {/* Hero Section */}
      <section>
        <h1 className="text-4xl text-center mt-13 mb-8 font-medium">
          Track your sales for every convention
        </h1>
        <h2 className="text-xl text-center px-2">
          The perfect app for artist alley-sellers. Keep track on sales,
          payments and incomes for every con!
        </h2>

        <div className="flex gap-1.5 items-center mt-10 text-lg bg-purple-600 w-fit mx-auto px-5 py-4 text-white rounded-xl">
          <button onClick={() => navigate("/sign-up")} className="font-medium">
            Get started for free
          </button>
          <ArrowRight size={22} />
        </div>
      </section>
    </div>
  );
}
