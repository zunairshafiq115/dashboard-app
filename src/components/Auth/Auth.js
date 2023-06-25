import React, { useState } from "react";
import BlankLogo from "../BlankLogo";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Auth() {
  const [activeTab, setActiveTab] = useState("login");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="py-5 bg-gradient-to-tr from-purple-400 to-pink-700 min-h-screen">
      <div className="">
        <div className="px-5 w-full md:w-2/3 mx-auto">
          <BlankLogo />
          <div className="flex justify-center">
            <button
              className={`text-[12px] font-700 mx-4 uppercase text-center w-full ${
                activeTab === "login"
                  ? "text-white"
                  : "text-gray-300 opacity-75"
              }`}
              onClick={() => handleTabChange("login")}
            >
              Login
            </button>
            <button
              className={`text-[12px] font-700 mx-4 uppercase text-center w-full ${
                activeTab === "signUp"
                  ? "text-white"
                  : "text-gray-300 opacity-75"
              }`}
              onClick={() => handleTabChange("signUp")}
            >
              Sign Up
            </button>
          </div>
          <div className="flex justify-center">
            <div className="w-full">
              <div
                className={`w-1/2 h-1 ${
                  activeTab === "login" ? "bg-white" : "bg-gray-300"
                } mx-auto mt-4 inline-block`}
              />
              <div
                className={`w-1/2 h-1 ${
                  activeTab === "signUp" ? "bg-white" : "bg-gray-300"
                } mx-auto inline-block`}
              />
            </div>
          </div>
        </div>
        <div className="px-5 w-full md:w-2/3 lg:w-1/4 mx-auto">
          <h2 className="text-2xl text-center text-white font-bold my-4">
            Join Us
          </h2>
          {activeTab === "login" ? <SignIn /> : <SignUp />}
        </div>
      </div>
    </div>
  );
}
