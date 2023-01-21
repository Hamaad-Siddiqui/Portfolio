import {
 MailIcon,
 GitHubIcon,
 TwitterIcon,
 UpworkIcon,
 LinkedInIcon,
} from './Icons';

export default function Links() {
 return (
  <div className='flex flex-row items-center justify-start gap-6 ml-0 mt-10 h-auto md:ml-24 md:flex-col md:justify-center sm:gap-8 md:h-screen md:mt-0'>
   <a
    href='mailto:hamaad_siddiqui@hotmail.com'
    className='text-black dark:text-white'
    target='_blank'
   >
    <MailIcon />
   </a>
   <a
    href='https://github.com/Hamaad-Siddiqui'
    className='text-black dark:text-white'
    target='_blank'
   >
    <GitHubIcon />
   </a>
   <a
    href='https://twitter.com/HamaadSiddiqui'
    className='text-black dark:text-white'
    target='_blank'
   >
    <TwitterIcon />
   </a>
   <a
    href='https://www.upwork.com/freelancers/~015da25f21e50175bf'
    className='text-black dark:text-white'
    target='_blank'
   >
    <UpworkIcon />
   </a>
   <a
    href='https://www.linkedin.com/in/hamaad-siddiqui'
    className='text-black dark:text-white'
    target='_blank'
   >
    <LinkedInIcon />
   </a>
  </div>
 );
}
