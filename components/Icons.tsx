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

export const CCIcon = ({ size = 15 }: IconProps) => (
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

export const CalIcon = ({ width = 14, height = 16 }: IconProps) => (
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

export const DocIcon = ({ width = 13, height = 16 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g strokeWidth="2">
        <path
          strokeDasharray="64"
          strokeDashoffset="64"
          d="M13 3L19 9V21H5V3H13"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.6s"
            values="64;0"
          />
        </path>
        <path strokeDasharray="6" strokeDashoffset="6" d="M9 13H13">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="1s"
            dur="0.2s"
            values="6;0"
          />
        </path>
        <path strokeDasharray="8" strokeDashoffset="8" d="M9 16H15">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="1.2s"
            dur="0.2s"
            values="8;0"
          />
        </path>
      </g>
      <path strokeDasharray="14" strokeDashoffset="14" d="M12.5 3V8.5H19">
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="0.7s"
          dur="0.2s"
          values="14;0"
        />
      </path>
    </g>
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
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
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
    viewBox="0 0 256 256"
  >
    <path
      fill="currentColor"
      d="M225.3 82.7a51.8 51.8 0 0 1-15.3 36.8l-28.3 28.3a52 52 0 0 1-73.5 0a8 8 0 1 1 11.3-11.3a36.1 36.1 0 0 0 50.9 0l28.3-28.3a36 36 0 1 0-50.9-50.9L128 77.1a8 8 0 0 1-11.3-11.3L136.5 46a52.1 52.1 0 0 1 88.8 36.7ZM128 178.9l-19.8 19.8a36 36 0 0 1-50.9-50.9l28.3-28.3a36.1 36.1 0 0 1 50.9 0a8 8 0 0 0 11.3-11.3a52 52 0 0 0-73.5 0L46 136.5a52 52 0 1 0 73.5 73.5l19.8-19.8a8 8 0 0 0-11.3-11.3Z"
    />
  </svg>
);

export const PlayStoreIcon = ({ size = 20 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 512 512"
  >
    <path
      fill="currentColor"
      d="M48 59.49v393a4.33 4.33 0 0 0 7.37 3.07L260 256L55.37 56.42A4.33 4.33 0 0 0 48 59.49ZM345.8 174L89.22 32.64l-.16-.09c-4.42-2.4-8.62 3.58-5 7.06l201.13 192.32ZM84.08 472.39c-3.64 3.48.56 9.46 5 7.06l.16-.09L345.8 338l-60.61-57.95ZM449.38 231l-71.65-39.46L310.36 256l67.37 64.43L449.38 281c19.49-10.77 19.49-39.23 0-50Z"
    />
  </svg>
);

export const AppStoreIcon = ({ size = 20 }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M3 17a1 1 0 0 1 0-2h10.5c1 0 2 2 1.5 2H3Zm14 0a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2h-4ZM12.633 3.501a1 1 0 0 1 1.734.998L7.46 16.495a1 1 0 0 1-1.734-.997L12.633 3.5ZM4 18.5c.5-1 3.5-2 2.5-.28A852.88 852.88 0 0 1 4.867 21a1 1 0 0 1-1.734-.998L4 18.5ZM9.133 4.499a1 1 0 1 1 1.734-.998L12.61 6.53a1 1 0 1 1-1.733.998L9.133 4.499ZM13 11.5c-.898-1.5 0-4.5.716-3.004L20.366 20a1 1 0 0 1-1.733.998L13 11.5Z"
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
