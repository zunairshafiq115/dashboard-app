import React from "react";

export default function BlankLogo() {
  return (
    <div className="flex justify-center">
      <svg
        width="78"
        height="80"
        viewBox="0 0 78 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_0_3622)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M29.9991 1.99909H48.0008C56.2852 1.99909 63.001 8.71499 63.001 16.999V35.001C63.001 43.285 56.2852 50.0009 48.0008 50.0009H29.9991C21.7149 50.0009 14.9991 43.285 14.9991 35.001V16.999C14.9991 8.71499 21.7149 1.99909 29.9991 1.99909Z"
            fill="#EEEEEE"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_0_3622"
            x="-0.000976562"
            y="1.99908"
            width="78.002"
            height="78.0018"
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
            <feOffset dy="15" />
            <feGaussianBlur stdDeviation="7.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_3622"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_0_3622"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}
