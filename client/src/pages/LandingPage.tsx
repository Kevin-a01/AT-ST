import { SignInButton } from "@clerk/react";
import { TrendingUp } from "lucide-react";

export default function LandingPage() {
  return (
    <div>
      <div className="flex p-3 gap-3 items-center w-full">
        <div className="bg-purple-500 p-1.5 rounded-xl">
          <TrendingUp size={23} className="text-white" />
        </div>
        <p className="text-lg">Artist alley Tracker</p>
        <div className="ml-auto cursor-pointer ">
          <SignInButton />
        </div>
      </div>
    </div>
  );
}
