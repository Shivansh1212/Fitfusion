import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

const Login = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="w-full flex flex-col items-center bg-slate-900 h-screen">
      <h1 className="text-xl font-bold text-white mt-10">Login</h1>
      <div class="p-2 w-full md:w-1/3">
        <div class="relative">
          <label for="message" class="leading-7 text-sm text-gray-300">
            Mobile No.
          </label>
          <input
            type="number"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div class="p-2 w-full md:w-1/3">
        <div class="relative">
          <label for="message" class="leading-7 text-sm text-gray-300">
            Password
          </label>
          <input
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <button class="flex mx-auto text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg mt-4">
        {loading ? <TailSpin height={25} color="white" /> : "Login"}
      </button>
      <div className="mt-6 text-gray-300">
        <p>
          Do not have account?{" "}
          <Link to={"/registration"}>
            <span className="text-blue-500">Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
