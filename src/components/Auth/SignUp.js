import React from "react";

const SignUp = () => {
  return (
    <div className="flex flex-col gap-4 mt-5">
      <input
        type="emai;"
        className="bg-gray-100 opacity-50 focus:bg-gray-200 focus:border-white rounded-lg py-3 px-2 w-full"
        placeholder="Edmur"
      />
      <input
        type="password"
        className="bg-gray-100 opacity-50 focus:bg-gray-200 focus:border-white rounded-lg py-3 px-2 w-full"
        placeholder="Password"
      />

      <input
        type="password"
        className="bg-gray-100 opacity-50 focus:bg-gray-200 focus:border-white rounded-lg py-3 px-2 w-full"
        placeholder="Password"
      />
      <input
        type="email"
        className="bg-gray-100 opacity-50 focus:bg-gray-200 focus:border-white rounded-lg py-3 px-2 w-full"
        placeholder="Email"
      />
      <div className="flex justify-between w-full items-center ">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.00024 1.00019H15.9997C18.761 1.00019 20.9996 3.23908 20.9996 6.00041V15.9997C20.9996 18.761 18.761 20.9995 15.9997 20.9995H6.00024C3.23886 20.9995 1.00027 18.761 1.00027 15.9997V6.00041C1.00027 3.23908 3.23886 1.00019 6.00024 1.00019Z"
                fill="white"
                fill-opacity="0.01"
              />
              <path
                d="M6.00024 2.00019H15.9997C18.2087 2.00019 19.9996 3.7913 19.9996 6.00041V15.9997C19.9996 18.2087 18.2088 19.9995 15.9997 19.9995H6.00024C3.79112 19.9995 2.00027 18.2087 2.00027 15.9997V6.00041C2.00027 3.79129 3.79122 2.00019 6.00024 2.00019Z"
                stroke="white"
                stroke-opacity="0.5"
                stroke-width="2"
              />
            </svg>

            <label className="text-white ml-2 uppercase">
              AGREED to TERMS?
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
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg mt-4 w-full">
        Sign In
      </button>
    </div>
  );
};

export default SignUp;
