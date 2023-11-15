interface IconProps {
 size?: number;
 width?: number;
 height?: number;
}

export const CalIcon = ({ width = 14, height = 16 }: IconProps) => (
 <svg
  xmlns='http://www.w3.org/2000/svg'
  width={width}
  height={height}
  viewBox='0 0 14 16'
 >
  <path
   d='M10.75 9H7V12.75H10.75V9ZM10 0.75V2.25H4V0.75H2.5V2.25H1.75C0.9175 2.25 0.2575 2.925 0.2575 3.75L0.25 14.25C0.25 14.6478 0.408035 15.0294 0.68934 15.3107C0.970644 15.592 1.35218 15.75 1.75 15.75H12.25C13.075 15.75 13.75 15.075 13.75 14.25V3.75C13.75 2.925 13.075 2.25 12.25 2.25H11.5V0.75H10ZM12.25 14.25H1.75V6H12.25V14.25Z'
   fill='currentColor'
  />
 </svg>
);

export const DocIcon = ({ width = 13, height = 16 }: IconProps) => (
 <svg
  xmlns='http://www.w3.org/2000/svg'
  width={width}
  height={height}
  viewBox='0 0 13 16'
 >
  <path
   fillRule='evenodd'
   clipRule='evenodd'
   d='M0.888062 2C0.888062 1.60218 1.0402 1.22064 1.31101 0.93934C1.58182 0.658035 1.94911 0.5 2.33209 0.5H10.9963C11.3793 0.5 11.7465 0.658035 12.0174 0.93934C12.2882 1.22064 12.4403 1.60218 12.4403 2V14C12.4403 14.3978 12.2882 14.7794 12.0174 15.0607C11.7465 15.342 11.3793 15.5 10.9963 15.5H2.33209C1.94911 15.5 1.58182 15.342 1.31101 15.0607C1.0402 14.7794 0.888062 14.3978 0.888062 14V2ZM10.9963 2H2.33209V14H10.9963V2ZM3.77612 5.75C3.77612 5.55109 3.85219 5.36032 3.98759 5.21967C4.123 5.07902 4.30665 5 4.49814 5H8.83023C9.02172 5 9.20536 5.07902 9.34077 5.21967C9.47617 5.36032 9.55224 5.55109 9.55224 5.75C9.55224 5.94891 9.47617 6.13968 9.34077 6.28033C9.20536 6.42098 9.02172 6.5 8.83023 6.5H4.49814C4.30665 6.5 4.123 6.42098 3.98759 6.28033C3.85219 6.13968 3.77612 5.94891 3.77612 5.75ZM4.49814 8.75C4.30665 8.75 4.123 8.82902 3.98759 8.96967C3.85219 9.11032 3.77612 9.30109 3.77612 9.5C3.77612 9.69891 3.85219 9.88968 3.98759 10.0303C4.123 10.171 4.30665 10.25 4.49814 10.25H6.66418C6.85567 10.25 7.03932 10.171 7.17472 10.0303C7.31013 9.88968 7.3862 9.69891 7.3862 9.5C7.3862 9.30109 7.31013 9.11032 7.17472 8.96967C7.03932 8.82902 6.85567 8.75 6.66418 8.75H4.49814Z'
   fill='currentColor'
  />
 </svg>
);

export const MailIcon = ({ size = 24 }: IconProps) => (
 <svg
  xmlns='http://www.w3.org/2000/svg'
  width={size}
  height={size}
  viewBox='0 0 24 24'
 >
  <path
   fill='currentColor'
   d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 14H5c-.55 0-1-.45-1-1V8l6.94 4.34c.65.41 1.47.41 2.12 0L20 8v9c0 .55-.45 1-1 1zm-7-7L4 6h16l-8 5z'
  />
 </svg>
);

export const GitHubIcon = ({ size = 24 }: IconProps) => (
 <svg
  xmlns='http://www.w3.org/2000/svg'
  width={size}
  height={size}
  viewBox='0 0 24 24'
 >
  <path
   fill='none'
   stroke='currentColor'
   strokeLinecap='round'
   strokeLinejoin='round'
   strokeWidth='2'
   d='M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21'
  />
 </svg>
);

export const TwitterIcon = ({ size = 23 }: IconProps) => (
 <svg
  xmlns='http://www.w3.org/2000/svg'
  width={size}
  height={size}
  viewBox='0 0 24 24'
 >
  <path
   fill='currentColor'
   d='M8.5 2h2.5L11 2h-2.5zM13 2h2.5L15.5 2h-2.5zM10.5 2h5v0h-5zM8.5 2h5v0h-5zM10 2h3.5L13.5 2h-3.5z'
  >
   <animate
    fill='freeze'
    attributeName='d'
    dur='0.4s'
    keyTimes='0;0.3;0.5;1'
    values='M8.5 2h2.5L11 2h-2.5zM13 2h2.5L15.5 2h-2.5zM10.5 2h5v0h-5zM8.5 2h5v0h-5zM10 2h3.5L13.5 2h-3.5z;M8.5 2h2.5L11 22h-2.5zM13 2h2.5L15.5 22h-2.5zM10.5 2h5v2h-5zM8.5 20h5v2h-5zM10 2h3.5L13.5 22h-3.5z;M8.5 2h2.5L11 22h-2.5zM13 2h2.5L15.5 22h-2.5zM10.5 2h5v2h-5zM8.5 20h5v2h-5zM10 2h3.5L13.5 22h-3.5z;M1 2h2.5L18.5 22h-2.5zM5.5 2h2.5L23 22h-2.5zM3 2h5v2h-5zM16 20h5v2h-5zM18.5 2h3.5L5 22h-3.5z'
   />
  </path>
 </svg>
);

export const UpworkIcon = ({ size = 24 }: IconProps) => (
 <svg
  xmlns='http://www.w3.org/2000/svg'
  width={size}
  height={size}
  viewBox='0 0 24 24'
 >
  <path
   fill='none'
   stroke='currentColor'
   strokeLinecap='round'
   strokeLinejoin='round'
   strokeWidth='2'
   d='M3 7v5a3 3 0 0 0 6 0V7h1l4 6c.824 1.319 1.945 2 3.5 2a3.5 3.5 0 0 0 0-7c-2.027 0-3.137 1.006-3.5 3c-.242 1.33-.908 3.996-2 8'
  />
 </svg>
);

export const LinkedInIcon = ({ size = 24 }: IconProps) => (
 <svg
  width={size}
  height={size}
  viewBox='0 0 24 24'
  fill='none'
  xmlns='http://www.w3.org/2000/svg'
 >
  <path
   d='M16 0C16.5304 0 17.0391 0.210714 17.4142 0.585786C17.7893 0.960859 18 1.46957 18 2V16C18 16.5304 17.7893 17.0391 17.4142 17.4142C17.0391 17.7893 16.5304 18 16 18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 0 16.5304 0 16V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0H16ZM15.5 15.5V10.2C15.5 9.33539 15.1565 8.5062 14.5452 7.89483C13.9338 7.28346 13.1046 6.94 12.24 6.94C11.39 6.94 10.4 7.46 9.92 8.24V7.13H7.13V15.5H9.92V10.57C9.92 9.8 10.54 9.17 11.31 9.17C11.6813 9.17 12.0374 9.3175 12.2999 9.58005C12.5625 9.8426 12.71 10.1987 12.71 10.57V15.5H15.5ZM3.88 5.56C4.32556 5.56 4.75288 5.383 5.06794 5.06794C5.383 4.75288 5.56 4.32556 5.56 3.88C5.56 2.95 4.81 2.19 3.88 2.19C3.43178 2.19 3.00193 2.36805 2.68499 2.68499C2.36805 3.00193 2.19 3.43178 2.19 3.88C2.19 4.81 2.95 5.56 3.88 5.56ZM5.27 15.5V7.13H2.5V15.5H5.27Z'
   fill='currentColor'
  />
 </svg>
);

export const LinkIcon = ({ size = 20 }: IconProps) => (
 <svg
  xmlns='http://www.w3.org/2000/svg'
  width={size}
  height={size}
  viewBox='0 0 256 256'
 >
  <path
   fill='currentColor'
   d='M225.3 82.7a51.8 51.8 0 0 1-15.3 36.8l-28.3 28.3a52 52 0 0 1-73.5 0a8 8 0 1 1 11.3-11.3a36.1 36.1 0 0 0 50.9 0l28.3-28.3a36 36 0 1 0-50.9-50.9L128 77.1a8 8 0 0 1-11.3-11.3L136.5 46a52.1 52.1 0 0 1 88.8 36.7ZM128 178.9l-19.8 19.8a36 36 0 0 1-50.9-50.9l28.3-28.3a36.1 36.1 0 0 1 50.9 0a8 8 0 0 0 11.3-11.3a52 52 0 0 0-73.5 0L46 136.5a52 52 0 1 0 73.5 73.5l19.8-19.8a8 8 0 0 0-11.3-11.3Z'
  />
 </svg>
);

export const PlayStoreIcon = ({ size = 20 }: IconProps) => (
 <svg
  xmlns='http://www.w3.org/2000/svg'
  width={size}
  height={size}
  viewBox='0 0 512 512'
 >
  <path
   fill='currentColor'
   d='M48 59.49v393a4.33 4.33 0 0 0 7.37 3.07L260 256L55.37 56.42A4.33 4.33 0 0 0 48 59.49ZM345.8 174L89.22 32.64l-.16-.09c-4.42-2.4-8.62 3.58-5 7.06l201.13 192.32ZM84.08 472.39c-3.64 3.48.56 9.46 5 7.06l.16-.09L345.8 338l-60.61-57.95ZM449.38 231l-71.65-39.46L310.36 256l67.37 64.43L449.38 281c19.49-10.77 19.49-39.23 0-50Z'
  />
 </svg>
);

export const AppStoreIcon = ({ size = 20 }: IconProps) => (
 <svg
  xmlns='http://www.w3.org/2000/svg'
  width={size}
  height={size}
  viewBox='0 0 24 24'
 >
  <path
   fill='currentColor'
   d='M3 17a1 1 0 0 1 0-2h10.5c1 0 2 2 1.5 2H3Zm14 0a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2h-4ZM12.633 3.501a1 1 0 0 1 1.734.998L7.46 16.495a1 1 0 0 1-1.734-.997L12.633 3.5ZM4 18.5c.5-1 3.5-2 2.5-.28A852.88 852.88 0 0 1 4.867 21a1 1 0 0 1-1.734-.998L4 18.5ZM9.133 4.499a1 1 0 1 1 1.734-.998L12.61 6.53a1 1 0 1 1-1.733.998L9.133 4.499ZM13 11.5c-.898-1.5 0-4.5.716-3.004L20.366 20a1 1 0 0 1-1.733.998L13 11.5Z'
  />
 </svg>
);

export const AnimatedSunIcon = ({ size = 24 }: IconProps) => (
 <svg
  xmlns='http://www.w3.org/2000/svg'
  width={size}
  height={size}
  viewBox='0 0 24 24'
 >
  <g
   fill='none'
   stroke='currentColor'
   strokeDasharray='2'
   strokeDashoffset='2'
   strokeLinecap='round'
   strokeWidth='2'
  >
   <path d='M0 0'>
    <animate
     fill='freeze'
     attributeName='d'
     begin='0.6s'
     dur='0.2s'
     values='M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1'
    ></animate>
    <animate
     fill='freeze'
     attributeName='stroke-dashoffset'
     begin='0.6s'
     dur='0.2s'
     values='2;0'
    ></animate>
   </path>
   <path d='M0 0'>
    <animate
     fill='freeze'
     attributeName='d'
     begin='0.9s'
     dur='0.2s'
     values='M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5'
    ></animate>
    <animate
     fill='freeze'
     attributeName='stroke-dashoffset'
     begin='0.9s'
     dur='1.2s'
     values='2;0'
    ></animate>
   </path>
   <animateTransform
    attributeName='transform'
    dur='30s'
    repeatCount='indefinite'
    type='rotate'
    values='0 12 12;360 12 12'
   ></animateTransform>
  </g>
  <mask id='lineMdMoonAltToSunnyOutlineLoopTransition0'>
   <circle cx='12' cy='12' r='12' fill='#fff'></circle>
   <circle cx='12' cy='12' r='8'>
    <animate fill='freeze' attributeName='r' dur='0.4s' values='8;4'></animate>
   </circle>
   <circle cx='18' cy='6' r='12' fill='#fff'>
    <animate
     fill='freeze'
     attributeName='cx'
     dur='0.4s'
     values='18;22'
    ></animate>
    <animate fill='freeze' attributeName='cy' dur='0.4s' values='6;2'></animate>
    <animate fill='freeze' attributeName='r' dur='0.4s' values='12;3'></animate>
   </circle>
   <circle cx='18' cy='6' r='10'>
    <animate
     fill='freeze'
     attributeName='cx'
     dur='0.4s'
     values='18;22'
    ></animate>
    <animate fill='freeze' attributeName='cy' dur='0.4s' values='6;2'></animate>
    <animate fill='freeze' attributeName='r' dur='0.4s' values='10;1'></animate>
   </circle>
  </mask>
  <circle
   cx='12'
   cy='12'
   r='10'
   fill='currentColor'
   mask='url(#lineMdMoonAltToSunnyOutlineLoopTransition0)'
  >
   <animate fill='freeze' attributeName='r' dur='0.4s' values='10;6'></animate>
  </circle>
 </svg>
);

export const AnimatedMoonIcon = ({ size = 24 }: IconProps) => (
 <svg
  xmlns='http://www.w3.org/2000/svg'
  width={size}
  height={size}
  viewBox='0 0 24 24'
 >
  <g
   fill='none'
   stroke='currentColor'
   strokeLinecap='round'
   strokeLinejoin='round'
   strokeWidth='2'
  >
   <g strokeDasharray='2'>
    <path d='M12 21v1M21 12h1M12 3v-1M3 12h-1'>
     <animate
      fill='freeze'
      attributeName='stroke-dashoffset'
      dur='0.2s'
      values='4;2'
     ></animate>
    </path>
    <path d='M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5'>
     <animate
      fill='freeze'
      attributeName='stroke-dashoffset'
      begin='0.2s'
      dur='0.2s'
      values='4;2'
     ></animate>
    </path>
   </g>
   <path
    d='M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z'
    opacity='0'
   ></path>
  </g>
  <g
   fill='none'
   stroke='currentColor'
   strokeDasharray='4'
   strokeDashoffset='4'
   strokeLinecap='round'
   strokeLinejoin='round'
  >
   <path d='M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5'>
    <animate
     id='lineMdSunnyOutlineToMoonAltLoopTransition0'
     fill='freeze'
     attributeName='stroke-dashoffset'
     begin='0.6s;lineMdSunnyOutlineToMoonAltLoopTransition0.begin+6s'
     dur='0.4s'
     values='4;0'
    ></animate>
    <animate
     fill='freeze'
     attributeName='stroke-dashoffset'
     begin='lineMdSunnyOutlineToMoonAltLoopTransition0.begin+2s;lineMdSunnyOutlineToMoonAltLoopTransition0.begin+4s'
     dur='0.4s'
     values='4;0'
    ></animate>
    <animate
     fill='freeze'
     attributeName='stroke-dashoffset'
     begin='lineMdSunnyOutlineToMoonAltLoopTransition0.begin+1.2s;lineMdSunnyOutlineToMoonAltLoopTransition0.begin+3.2s;lineMdSunnyOutlineToMoonAltLoopTransition0.begin+5.2s'
     dur='0.4s'
     values='0;4'
    ></animate>
   </path>
   <path d='M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5'>
    <animate
     id='lineMdSunnyOutlineToMoonAltLoopTransition1'
     fill='freeze'
     attributeName='stroke-dashoffset'
     begin='1s;lineMdSunnyOutlineToMoonAltLoopTransition1.begin+6s'
     dur='0.4s'
     values='4;0'
    ></animate>
    <animate
     fill='freeze'
     attributeName='stroke-dashoffset'
     begin='lineMdSunnyOutlineToMoonAltLoopTransition1.begin+2s;lineMdSunnyOutlineToMoonAltLoopTransition1.begin+4s'
     dur='0.4s'
     values='4;0'
    ></animate>
    <animate
     fill='freeze'
     attributeName='stroke-dashoffset'
     begin='lineMdSunnyOutlineToMoonAltLoopTransition1.begin+1.2s;lineMdSunnyOutlineToMoonAltLoopTransition1.begin+3.2s;lineMdSunnyOutlineToMoonAltLoopTransition1.begin+5.2s'
     dur='0.4s'
     values='0;4'
    ></animate>
   </path>
   <path d='M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5'>
    <animate
     id='lineMdSunnyOutlineToMoonAltLoopTransition2'
     fill='freeze'
     attributeName='stroke-dashoffset'
     begin='2.8s;lineMdSunnyOutlineToMoonAltLoopTransition2.begin+6s'
     dur='0.4s'
     values='4;0'
    ></animate>
    <animate
     fill='freeze'
     attributeName='stroke-dashoffset'
     begin='lineMdSunnyOutlineToMoonAltLoopTransition2.begin+2s'
     dur='0.4s'
     values='4;0'
    ></animate>
    <animate
     fill='freeze'
     attributeName='stroke-dashoffset'
     begin='lineMdSunnyOutlineToMoonAltLoopTransition2.begin+1.2s;lineMdSunnyOutlineToMoonAltLoopTransition2.begin+3.2s'
     dur='0.4s'
     values='0;4'
    ></animate>
   </path>
  </g>
  <mask id='lineMdSunnyOutlineToMoonAltLoopTransition3'>
   <circle cx='12' cy='12' r='12' fill='#fff'></circle>
   <circle cx='12' cy='12' r='4'>
    <animate
     fill='freeze'
     attributeName='r'
     begin='0.1s'
     dur='0.4s'
     values='4;8'
    ></animate>
   </circle>
   <circle cx='22' cy='2' r='3' fill='#fff'>
    <animate
     fill='freeze'
     attributeName='cx'
     begin='0.1s'
     dur='0.4s'
     values='22;18'
    ></animate>
    <animate
     fill='freeze'
     attributeName='cy'
     begin='0.1s'
     dur='0.4s'
     values='2;6'
    ></animate>
    <animate
     fill='freeze'
     attributeName='r'
     begin='0.1s'
     dur='0.4s'
     values='3;12'
    ></animate>
   </circle>
   <circle cx='22' cy='2' r='1'>
    <animate
     fill='freeze'
     attributeName='cx'
     begin='0.1s'
     dur='0.4s'
     values='22;18'
    ></animate>
    <animate
     fill='freeze'
     attributeName='cy'
     begin='0.1s'
     dur='0.4s'
     values='2;6'
    ></animate>
    <animate
     fill='freeze'
     attributeName='r'
     begin='0.1s'
     dur='0.4s'
     values='1;10'
    ></animate>
   </circle>
  </mask>
  <circle
   cx='12'
   cy='12'
   r='6'
   fill='currentColor'
   mask='url(#lineMdSunnyOutlineToMoonAltLoopTransition3)'
  >
   <animate
    fill='freeze'
    attributeName='r'
    begin='0.1s'
    dur='0.4s'
    values='6;10'
   ></animate>
  </circle>
 </svg>
);
