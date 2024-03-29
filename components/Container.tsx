import Image from 'next/image';
import { CCIcon, ForkIcon } from './Icons';
import ThemeToggle from './ThemeToggle';

export default function Container(props: { children: React.ReactNode }) {
 const { children } = props;
 return (
  <>
   <div className='mx-auto max-w-[49.5rem] min-w-[20rem] mb-10 px-4 sm:px-6'>
    <div className='flex flex-row justify-end w-full p-5'>
     <ThemeToggle />
    </div>
    <div className='flex flex-col justify-center w-full'>{children}</div>
    <div className='flex w-full items-center justify-between mt-[6rem] text-primary dark:text-darkPrimary'>
     <div className='flex items-center gap-1'>
      <CCIcon />
      <div className='max-[550px]:hidden'>2023, Hamaad</div>
     </div>
     <a
      href='https://github.com/Hamaad-Siddiqui/Portfolio'
      target='_blank'
      rel='noreferrer'
     >
      <div className='flex items-center gap-1'>
       <ForkIcon />{' '}
       <div className='max-[450px]:hidden'>
        Made with &lt;3! in Next.js, Tailwind & Sanity
       </div>
      </div>
     </a>
     <Image
      src='/static/media/mona.gif'
      alt='a cute ghost moving around'
      width={32}
      height={32}
     />
    </div>
   </div>
  </>
 );
}
