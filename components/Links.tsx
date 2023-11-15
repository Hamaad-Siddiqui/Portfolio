import {
 MailIcon,
 GitHubIcon,
 TwitterIcon,
 UpworkIcon,
 LinkedInIcon,
} from './Icons';

export default function Links() {
 return (
  <div className='flex flex-row items-center justify-start gap-[13px] mr-7 mb-6'>
   <a
    href='mailto:hamaad_siddiqui@hotmail.com'
    className='text-primary dark:text-darkPrimary'
    target='_blank'
    rel='noreferrer'
   >
    <MailIcon />
   </a>
   <a
    href='https://github.com/Hamaad-Siddiqui'
    className='text-primary dark:text-darkPrimary'
    target='_blank'
    rel='noreferrer'
   >
    <GitHubIcon />
   </a>
   <a
    href='https://twitter.com/HamaadSiddiqui'
    className='text-primary dark:text-darkPrimary'
    target='_blank'
    rel='noreferrer'
   >
    <TwitterIcon />
   </a>
   <a
    href='https://www.upwork.com/freelancers/~015da25f21e50175bf'
    className='text-primary dark:text-darkPrimary'
    target='_blank'
    rel='noreferrer'
   >
    <UpworkIcon />
   </a>
   <a
    href='https://www.linkedin.com/in/hamaad-siddiqui'
    className='text-primary dark:text-darkPrimary mt-1'
    target='_blank'
    rel='noreferrer'
   >
    <LinkedInIcon />
   </a>
  </div>
 );
}
