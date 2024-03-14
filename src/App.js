import React from "react";

import TextInput from "./TextInput"
import { MdOutlineArrowBackIosNew } from "react-icons/md";

function App() {
  return (
    <div className="w-full h-screen lg:h-fit py-12 px-6 lg:py-8 lg:px-8 shadow-xl bg-white space-y-6">
      <div className="flex w-full justify-center lg:hidden items-center">
       
      </div>
      <button
        // onClick={() => navigate(-2)}
        className="flex hover:cursor-pointer group text-sm items-center space-x-2"
      >
        <MdOutlineArrowBackIosNew size={12} />
        <p className="group-hover:underline">Back</p>
      </button>
      <div className="">
        <h1 className="text-2xl font-bold text-[#181818]">Login</h1>
      </div>
      <div className="w-full space-y-4 py-4">
        <TextInput
          title="Email"
          type="email"
          className=""
          // valueState={[email, setEmail]}
        />
        <TextInput
          title="Password"
          type="password"
          className=" text-black"
          
        />
      </div>
      <button
        // onClick={handleLoginWithEmail}
        className="bg-black hover:bg-gray-700 transition-all duration-500 w-full text-white rounded-lg py-3 px-4"
      >
        Login with Email
      </button>

      <div className="w-full space-y-4 py-6 border-t border-t-gray-400">
       
      </div>

      <button
        // onClick={(e) => switchPage("register")}
        className="w-full text-center"
      >
        Don't have an account yet ? <u>Sign up</u>
      </button>
    </div>
  );
}

export default App;
