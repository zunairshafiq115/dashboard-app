import React, { useState } from "react";

const SignIn = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const handleToggle = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="flex flex-col gap-4 mt-5">
      <input
        type="email"
        className="bg-gray-100 opacity-50 focus:bg-gray-200 focus:border-white rounded-lg py-3 px-2 w-full"
        placeholder="Edmur"
      />
      <input
        type="password"
        className="bg-gray-100 opacity-50 focus:bg-gray-200 focus:border-white rounded-lg py-3 px-2 w-full"
        placeholder="Password"
      />
      <div className="flex justify-between w-full items-center ">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center">
            <button
              className={`w-6 h-6 rounded-full bg-gray-300 focus:outline-none focus:bg-white transition-colors duration-300 ${
                rememberMe ? "bg-white" : ""
              }`}
              onClick={handleToggle}
            />
            <label className="text-white ml-2 uppercase text-[11px">
              Remember me?
            </label>
          </div>
          <svg
            width="78"
            height="50"
            // viewBox="0 0 88 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_0_3649)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M44 1.00125C57.254 1.00125 67.9986 11.7457 67.9986 25.0002C67.9986 38.2544 57.254 48.9989 44 48.9989C30.7459 48.9989 20.0013 38.2544 20.0013 25.0002C20.0013 11.7457 30.7459 1.00125 44 1.00125Z"
                fill="white"
              />
            </g>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M50.2618 20.2867L42.335 28.4596L38.732 24.7444C38.3341 24.3341 37.6888 24.3341 37.2906 24.7444C36.8927 25.1547 36.8927 25.8201 37.2906 26.2305L41.6144 30.6886C42.0123 31.0985 42.6577 31.0985 43.0556 30.6886L51.7032 21.7723C52.1012 21.3624 52.1012 20.6966 51.7032 20.2867C51.3053 19.8763 50.66 19.8763 50.2618 20.2867Z"
              fill="#DB50E0"
            />
            <defs>
              <filter
                id="filter0_d_0_3649"
                x="0.0012207"
                y="1.00122"
                width="87.9973"
                height="92.9976"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="25" />
                <feGaussianBlur stdDeviation="10" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_0_3649"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_0_3649"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>

      <button className="flex justify-between bg-white font-medium px-2 py-3 rounded-lg w-full items-center text-center mt-4">
        <svg
          width="20"
          height="22"
          viewBox="0 0 20 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.99988 20C6.41259 20 3.32188 17.8971 1.87607 14.8603L4.74867 12.9932C5.5543 15.1135 7.59688 16.6249 9.99988 16.6249C11.3131 16.6249 12.5185 16.1722 13.4754 15.4178L16.1461 17.5716C14.5374 19.0769 12.3769 20 9.99988 20Z"
            fill="#34A853"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.99988 1.99992C12.4856 1.99992 14.7316 3.01129 16.3588 4.64143L13.9715 7.02865C12.9539 6.01034 11.5533 5.37501 9.99988 5.37501C7.67113 5.37501 5.67274 6.79054 4.81829 8.80789L1.94209 6.99166C3.41667 4.03306 6.47014 1.99992 9.99988 1.99992Z"
            fill="#EA4335"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.88994 14.9069C1.31963 13.7253 1.00005 12.3999 1.00005 11.0002V11.0002C1.00005 9.52837 1.3556 8.14058 1.98165 6.91422L4.78439 8.89959C4.52261 9.5488 4.37489 10.2566 4.37489 11.0002C4.37489 11.706 4.51079 12.3787 4.74817 13.0013L1.88994 14.9069Z"
            fill="#FBBC05"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.3667 12.6877H9.9999V9.31223H18.8397C18.9435 9.85933 19 10.423 19 11.0002C19 12.2223 18.7552 13.3866 18.3141 14.4496L17.6449 15.748C17.1976 16.467 16.6527 17.1185 16.0274 17.6829L13.3154 15.5419C14.2736 14.8407 15.0029 13.8459 15.3667 12.6877Z"
            fill="#4285F4"
          />
        </svg>

        <span className="text-[13px] font-medium text-red-500">
          Login with Google
        </span>
        <span></span>
      </button>
      <button className="flex justify-between bg-white font-medium px-2 py-3 rounded-lg w-full items-center">
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.8746 0.000463963H2.12535C0.956734 0.000463963 0.000311971 0.956734 0.000311971 2.12569V14.8744C0.000311971 16.0433 0.956734 16.9996 2.12535 16.9996H8.57343V10.9044H6.53779V8.24901H8.57343V6.91863C8.57343 4.86815 10.0876 3.26189 12.0205 3.26189H13.8968V6.26056H12.2183C11.7787 6.26056 11.6498 6.51254 11.6498 6.86121V8.24901H13.8968V10.9044H11.6498V16.9996H14.8746C16.0437 16.9996 16.9994 16.0433 16.9994 14.8744V2.12569C16.9994 0.956734 16.0437 0.000463963 14.8746 0.000463963Z"
            fill="#4E7CD0"
          />
        </svg>
        <span className=" text-[13px] font-medium text-blue-800">
          Login with Facebook
        </span>
        <span></span>
      </button>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg mt-4 w-full">
        Sign In
      </button>
    </div>
  );
};

export default SignIn;
