import * as React from "react"

const Logo = () => (
  <svg width={48} height={48} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx={24} cy={24} r={24} fill="#3751FF" />
    <path
      d="M16.5 14.5a1 1 0 0 1 1-1h6.486c3.333 0 5.914.914 7.743 2.743 1.847 1.829 2.771 4.405 2.771 7.728 0 3.342-.924 5.938-2.771 7.786-1.829 1.829-4.41 2.743-7.743 2.743H17.5a1 1 0 0 1-1-1v-19Z"
      fill="url(#a)"
    />
    <defs>
      <linearGradient
        id="a"
        x1={16.5}
        y1={13.5}
        x2={34.5}
        y2={34.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" stopOpacity={0.7} />
        <stop offset={1} stopColor="#fff" />
      </linearGradient>
    </defs>
  </svg>
)

export default Logo;
