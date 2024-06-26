interface IconProps {
  size?: number;
  width?: number;
  height?: number;
}

export const ForkIcon = ({ height = 20, width = 20 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 22 20"
  >
    <path
      fill="currentColor"
      d="M7 5a2 2 0 1 1 3 1.732v7.308h1.791a2 2 0 0 0 2-2v-1.256a2 2 0 1 1 2-.024v1.28a4 4 0 0 1-4 4H10v1.228A2 2 0 0 1 9 21a2 2 0 0 1-1-3.732V6.732A2 2 0 0 1 7 5Z"
    />
  </svg>
);

export const CCIcon = ({ size = 16 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 256 256"
  >
    <path
      fill="currentColor"
      d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88Zm-32-88a32 32 0 0 0 57.6 19.2a8 8 0 0 1 12.8 9.61a48 48 0 1 1 0-57.62a8 8 0 0 1-12.8 9.61A32 32 0 0 0 96 128Z"
    />
  </svg>
);

export const CalIcon = ({ width = 15, height = 16.5 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 14 16"
  >
    <path
      d="M10.75 9H7V12.75H10.75V9ZM10 0.75V2.25H4V0.75H2.5V2.25H1.75C0.9175 2.25 0.2575 2.925 0.2575 3.75L0.25 14.25C0.25 14.6478 0.408035 15.0294 0.68934 15.3107C0.970644 15.592 1.35218 15.75 1.75 15.75H12.25C13.075 15.75 13.75 15.075 13.75 14.25V3.75C13.75 2.925 13.075 2.25 12.25 2.25H11.5V0.75H10ZM12.25 14.25H1.75V6H12.25V14.25Z"
      fill="currentColor"
    />
  </svg>
);

export const DocIcon = ({ width = 14, height = 16.5 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 13 16"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.888062 2C0.888062 1.60218 1.0402 1.22064 1.31101 0.93934C1.58182 0.658035 1.94911 0.5 2.33209 0.5H10.9963C11.3793 0.5 11.7465 0.658035 12.0174 0.93934C12.2882 1.22064 12.4403 1.60218 12.4403 2V14C12.4403 14.3978 12.2882 14.7794 12.0174 15.0607C11.7465 15.342 11.3793 15.5 10.9963 15.5H2.33209C1.94911 15.5 1.58182 15.342 1.31101 15.0607C1.0402 14.7794 0.888062 14.3978 0.888062 14V2ZM10.9963 2H2.33209V14H10.9963V2ZM3.77612 5.75C3.77612 5.55109 3.85219 5.36032 3.98759 5.21967C4.123 5.07902 4.30665 5 4.49814 5H8.83023C9.02172 5 9.20536 5.07902 9.34077 5.21967C9.47617 5.36032 9.55224 5.55109 9.55224 5.75C9.55224 5.94891 9.47617 6.13968 9.34077 6.28033C9.20536 6.42098 9.02172 6.5 8.83023 6.5H4.49814C4.30665 6.5 4.123 6.42098 3.98759 6.28033C3.85219 6.13968 3.77612 5.94891 3.77612 5.75ZM4.49814 8.75C4.30665 8.75 4.123 8.82902 3.98759 8.96967C3.85219 9.11032 3.77612 9.30109 3.77612 9.5C3.77612 9.69891 3.85219 9.88968 3.98759 10.0303C4.123 10.171 4.30665 10.25 4.49814 10.25H6.66418C6.85567 10.25 7.03932 10.171 7.17472 10.0303C7.31013 9.88968 7.3862 9.69891 7.3862 9.5C7.3862 9.30109 7.31013 9.11032 7.17472 8.96967C7.03932 8.82902 6.85567 8.75 6.66418 8.75H4.49814Z"
      fill="currentColor"
    />
  </svg>
);

export const MailIcon = ({ size = 25 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2">
      <rect
        width="18"
        height="14"
        x="3"
        y="5"
        strokeDasharray="64"
        strokeDashoffset="64"
        rx="1"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="0.6s"
          values="64;0"
        />
      </rect>
      <path strokeDasharray="24" strokeDashoffset="24" d="M3 6.5L12 12L21 6.5">
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="0.6s"
          dur="0.4s"
          values="24;0"
        />
      </path>
    </g>
  </svg>
);

export const GitHubIcon = ({ size = 24 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <mask id="lineMdGithubLoop0" width="24" height="24" x="0" y="0">
      <g fill="#fff">
        <ellipse cx="9.5" cy="9" rx="1.5" ry="1" />
        <ellipse cx="14.5" cy="9" rx="1.5" ry="1" />
      </g>
    </mask>
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path
        strokeDasharray="30"
        strokeDashoffset="30"
        d="M12 4C13.6683 4 14.6122 4.39991 15 4.5C15.5255 4.07463 16.9375 3 18.5 3C18.8438 4 18.7863 5.21921 18.5 6C19.25 7 19.5 8 19.5 9.5C19.5 11.6875 19.017 13.0822 18 14C16.983 14.9178 15.8887 15.3749 14.5 15.5C15.1506 16.038 15 17.3743 15 18C15 18.7256 15 21 15 21M12 4C10.3317 4 9.38784 4.39991 9 4.5C8.47455 4.07463 7.0625 3 5.5 3C5.15625 4 5.21371 5.21921 5.5 6C4.75 7 4.5 8 4.5 9.5C4.5 11.6875 4.98301 13.0822 6 14C7.01699 14.9178 8.1113 15.3749 9.5 15.5C8.84944 16.038 9 17.3743 9 18C9 18.7256 9 21 9 21"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="0.6s"
          values="30;0"
        />
      </path>
      <path strokeDasharray="10" strokeDashoffset="10" d="M9 19">
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="0.7s"
          dur="0.2s"
          values="10;0"
        />
        <animate
          attributeName="d"
          dur="3s"
          repeatCount="indefinite"
          values="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5;M9 19c-1.406 0-3-.5-4-.5-.532 0-1 0-2-.5;M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"
        />
      </path>
    </g>
    <rect
      width="8"
      height="4"
      x="8"
      y="11"
      fill="currentColor"
      mask="url(#lineMdGithubLoop0)"
    >
      <animate
        attributeName="y"
        dur="10s"
        keyTimes="0;0.45;0.46;0.54;0.55;1"
        repeatCount="indefinite"
        values="11;11;7;7;11;11"
      />
    </rect>
  </svg>
);

export const InstagramIcon = ({ size = 24 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path
        strokeDasharray="66"
        strokeDashoffset="66"
        d="M12 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3z"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="0.6s"
          values="66;132"
        />
      </path>
      <path
        strokeDasharray="26"
        strokeDashoffset="26"
        d="M12 8C14.20914 8 16 9.79086 16 12C16 14.20914 14.20914 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="0.7s"
          dur="0.4s"
          values="26;0"
        />
      </path>
    </g>
    <circle cx="17" cy="7" r="1.5" fill="currentColor" fillOpacity="0">
      <animate
        fill="freeze"
        attributeName="fill-opacity"
        begin="1.1s"
        dur="0.4s"
        values="0;1"
      />
    </circle>
  </svg>
);

export const TwitterIcon = ({ size = 23 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M8.5 2h2.5L11 2h-2.5zM13 2h2.5L15.5 2h-2.5zM10.5 2h5v0h-5zM8.5 2h5v0h-5zM10 2h3.5L13.5 2h-3.5z"
    >
      <animate
        fill="freeze"
        attributeName="d"
        dur="0.4s"
        keyTimes="0;0.3;0.5;1"
        values="M8.5 2h2.5L11 2h-2.5zM13 2h2.5L15.5 2h-2.5zM10.5 2h5v0h-5zM8.5 2h5v0h-5zM10 2h3.5L13.5 2h-3.5z;M8.5 2h2.5L11 22h-2.5zM13 2h2.5L15.5 22h-2.5zM10.5 2h5v2h-5zM8.5 20h5v2h-5zM10 2h3.5L13.5 22h-3.5z;M8.5 2h2.5L11 22h-2.5zM13 2h2.5L15.5 22h-2.5zM10.5 2h5v2h-5zM8.5 20h5v2h-5zM10 2h3.5L13.5 22h-3.5z;M1 2h2.5L18.5 22h-2.5zM5.5 2h2.5L23 22h-2.5zM3 2h5v2h-5zM16 20h5v2h-5zM18.5 2h3.5L5 22h-3.5z"
      />
    </path>
  </svg>
);

export const FiverrIcon = ({ size = 23 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 3h-2a6 6 0 0 0-6 6H4v4h3v8h4v-7h4v7h4V10h-8V8.967A1.967 1.967 0 0 1 13 7h2z"
    />
  </svg>
);
export const UpworkIcon = ({ size = 25 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 7v5a3 3 0 0 0 6 0V7h1l4 6c.824 1.319 1.945 2 3.5 2a3.5 3.5 0 0 0 0-7c-2.027 0-3.137 1.006-3.5 3c-.242 1.33-.908 3.996-2 8"
    />
  </svg>
);

export const LinkedInIcon = ({ size = 23 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <circle cx="4" cy="4" r="2" fill="currentColor" fillOpacity="0">
      <animate
        fill="freeze"
        attributeName="fill-opacity"
        dur="0.4s"
        values="0;1"
      />
    </circle>
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="4">
      <path strokeDasharray="12" strokeDashoffset="12" d="M4 10V20">
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="0.2s"
          dur="0.2s"
          values="12;0"
        />
      </path>
      <path strokeDasharray="12" strokeDashoffset="12" d="M10 10V20">
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="0.5s"
          dur="0.2s"
          values="12;0"
        />
      </path>
      <path
        strokeDasharray="24"
        strokeDashoffset="24"
        d="M10 15C10 12.2386 12.2386 10 15 10C17.7614 10 20 12.2386 20 15V20"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="0.7s"
          dur="0.5s"
          values="24;0"
        />
      </path>
    </g>
  </svg>
);

export const LinkIcon = ({ size = 20 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path
        strokeDasharray="36"
        strokeDashoffset="36"
        d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="0.6s"
          values="36;0"
        />
      </path>
      <path strokeDasharray="12" strokeDashoffset="12" d="M13 11L20 4">
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="0.6s"
          dur="0.3s"
          values="12;0"
        />
      </path>
      <path strokeDasharray="8" strokeDashoffset="8" d="M21 3H15M21 3V9">
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="0.9s"
          dur="0.2s"
          values="8;0"
        />
      </path>
    </g>
  </svg>
);

export const PlayStoreIcon = ({ size = 20 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="m3.637 3.434l8.74 8.571l-8.675 8.65a2.123 2.123 0 0 1-.326-.613a2.45 2.45 0 0 1 0-.755V4.567c-.026-.395.065-.79.26-1.133m12.506 4.833l-2.853 2.826L4.653 2.6c.28-.097.58-.124.873-.078c.46.126.899.32 1.302.573l7.816 4.325c.508.273 1.003.56 1.498.847M13.29 12.93l2.839 2.788l-2.058 1.146l-6.279 3.49c-.52.287-1.042.561-1.55.874a1.798 1.798 0 0 1-1.472.195zm7.36-.925a1.915 1.915 0 0 1-.99 1.72l-2.346 1.302l-3.087-3.022l3.1-3.074c.795.443 1.577.886 2.358 1.303a1.888 1.888 0 0 1 .964 1.771"
    />
  </svg>
);

export const FigmaIcon = ({ size = 20 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 256 256"
  >
    <path
      fill="currentColor"
      d="M192 96a40 40 0 0 0-24-72H96a40 40 0 0 0-24 72a40 40 0 0 0 1.37 65A44 44 0 1 0 144 196v-36a40 40 0 1 0 48-64m0-32a24 24 0 0 1-24 24h-24V40h24a24 24 0 0 1 24 24M72 64a24 24 0 0 1 24-24h32v48H96a24 24 0 0 1-24-24m24 88a24 24 0 0 1 0-48h32v48zm32 44a28 28 0 1 1-28-28h28Zm40-44a24 24 0 1 1 24-24a24 24 0 0 1-24 24"
    />
  </svg>
);

export const AppStoreIcon = ({ size = 20 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 512 512"
  >
    <path
      fill="currentColor"
      d="m255.9 120.9l9.1-15.7c5.6-9.8 18.1-13.1 27.9-7.5c9.8 5.6 13.1 18.1 7.5 27.9l-87.5 151.5h63.3c20.5 0 32 24.1 23.1 40.8H113.8c-11.3 0-20.4-9.1-20.4-20.4c0-11.3 9.1-20.4 20.4-20.4h52l66.6-115.4l-20.8-36.1c-5.6-9.8-2.3-22.2 7.5-27.9c9.8-5.6 22.2-2.3 27.9 7.5zm-78.7 218l-19.6 34c-5.6 9.8-18.1 13.1-27.9 7.5c-9.8-5.6-13.1-18.1-7.5-27.9l14.6-25.2c16.4-5.1 29.8-1.2 40.4 11.6m168.9-61.7h53.1c11.3 0 20.4 9.1 20.4 20.4c0 11.3-9.1 20.4-20.4 20.4h-29.5l19.9 34.5c5.6 9.8 2.3 22.2-7.5 27.9c-9.8 5.6-22.2 2.3-27.9-7.5c-33.5-58.1-58.7-101.6-75.4-130.6c-17.1-29.5-4.9-59.1 7.2-69.1c13.4 23 33.4 57.7 60.1 104M256 8C119 8 8 119 8 256s111 248 248 248s248-111 248-248S393 8 256 8m216 248c0 118.7-96.1 216-216 216c-118.7 0-216-96.1-216-216c0-118.7 96.1-216 216-216c118.7 0 216 96.1 216 216"
    />
  </svg>
);

export const AnimatedSunIcon = ({ size = 24 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="0.6s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        ></animate>
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="0.6s"
          dur="0.2s"
          values="2;0"
        ></animate>
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="0.9s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        ></animate>
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="0.9s"
          dur="1.2s"
          values="2;0"
        ></animate>
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      ></animateTransform>
    </g>
    <mask id="lineMdMoonAltToSunnyOutlineLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff"></circle>
      <circle cx="12" cy="12" r="8">
        <animate
          fill="freeze"
          attributeName="r"
          dur="0.4s"
          values="8;4"
        ></animate>
      </circle>
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          dur="0.4s"
          values="18;22"
        ></animate>
        <animate
          fill="freeze"
          attributeName="cy"
          dur="0.4s"
          values="6;2"
        ></animate>
        <animate
          fill="freeze"
          attributeName="r"
          dur="0.4s"
          values="12;3"
        ></animate>
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          dur="0.4s"
          values="18;22"
        ></animate>
        <animate
          fill="freeze"
          attributeName="cy"
          dur="0.4s"
          values="6;2"
        ></animate>
        <animate
          fill="freeze"
          attributeName="r"
          dur="0.4s"
          values="10;1"
        ></animate>
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonAltToSunnyOutlineLoopTransition0)"
    >
      <animate
        fill="freeze"
        attributeName="r"
        dur="0.4s"
        values="10;6"
      ></animate>
    </circle>
  </svg>
);

export const AnimatedMoonIcon = ({ size = 24 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          ></animate>
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          ></animate>
        </path>
      </g>
      <path
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      ></path>
    </g>
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="4"
      strokeDashoffset="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5">
        <animate
          id="lineMdSunnyOutlineToMoonAltLoopTransition0"
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="0.6s;lineMdSunnyOutlineToMoonAltLoopTransition0.begin+6s"
          dur="0.4s"
          values="4;0"
        ></animate>
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="lineMdSunnyOutlineToMoonAltLoopTransition0.begin+2s;lineMdSunnyOutlineToMoonAltLoopTransition0.begin+4s"
          dur="0.4s"
          values="4;0"
        ></animate>
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="lineMdSunnyOutlineToMoonAltLoopTransition0.begin+1.2s;lineMdSunnyOutlineToMoonAltLoopTransition0.begin+3.2s;lineMdSunnyOutlineToMoonAltLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="0;4"
        ></animate>
      </path>
      <path d="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5">
        <animate
          id="lineMdSunnyOutlineToMoonAltLoopTransition1"
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1s;lineMdSunnyOutlineToMoonAltLoopTransition1.begin+6s"
          dur="0.4s"
          values="4;0"
        ></animate>
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="lineMdSunnyOutlineToMoonAltLoopTransition1.begin+2s;lineMdSunnyOutlineToMoonAltLoopTransition1.begin+4s"
          dur="0.4s"
          values="4;0"
        ></animate>
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="lineMdSunnyOutlineToMoonAltLoopTransition1.begin+1.2s;lineMdSunnyOutlineToMoonAltLoopTransition1.begin+3.2s;lineMdSunnyOutlineToMoonAltLoopTransition1.begin+5.2s"
          dur="0.4s"
          values="0;4"
        ></animate>
      </path>
      <path d="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5">
        <animate
          id="lineMdSunnyOutlineToMoonAltLoopTransition2"
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="2.8s;lineMdSunnyOutlineToMoonAltLoopTransition2.begin+6s"
          dur="0.4s"
          values="4;0"
        ></animate>
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="lineMdSunnyOutlineToMoonAltLoopTransition2.begin+2s"
          dur="0.4s"
          values="4;0"
        ></animate>
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="lineMdSunnyOutlineToMoonAltLoopTransition2.begin+1.2s;lineMdSunnyOutlineToMoonAltLoopTransition2.begin+3.2s"
          dur="0.4s"
          values="0;4"
        ></animate>
      </path>
    </g>
    <mask id="lineMdSunnyOutlineToMoonAltLoopTransition3">
      <circle cx="12" cy="12" r="12" fill="#fff"></circle>
      <circle cx="12" cy="12" r="4">
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="4;8"
        ></animate>
      </circle>
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        ></animate>
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        ></animate>
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        ></animate>
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        ></animate>
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        ></animate>
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        ></animate>
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyOutlineToMoonAltLoopTransition3)"
    >
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      ></animate>
    </circle>
  </svg>
);
