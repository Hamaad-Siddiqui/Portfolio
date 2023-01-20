import Image from 'next/image';

export default function Home() {
 return (
  <div className='flex flex-col'>
   <div className='flex flex-row justify-between mt-24 items-center'>
    <div className='flex flex-col max-w-[46rem] gap-1'>
     <h1 className='font-semibold text-5xl text-black dark:text-white'>
      Hamaad Siddiqui
     </h1>
     <p className='text-base text-black dark:text-white'>
      <span className='font-semibold'>Full-Stack Developer</span> building
      intuitive and efficient applications using React / Next.js & Flutter.
      Passionate about staying current with industry developments and
      continuously expanding my skillset to deliver innovative solutions.
     </p>
    </div>
    <Image
     src='/avatar.jpg'
     alt='Hamaad Siddiqui'
     width={180}
     height={180}
     className='rounded-full'
    />
   </div>
   <div className='flex flex-row justify-between items-center w-[35.375rem] mt-5'>
    <a href='/resume.pdf' target='_blank' rel='noreferrer'>
     <button className='border-2 border-darkGray font-semibold dark:text-white text-black w-60 py-2 px-4 rounded-md'>
      My Résumé
     </button>
    </a>
    <a href='mailto:hamaad_siddiqui@hotmail.com'>
     <button className='bg-black dark:bg-white font-semibold dark:text-black text-white w-60 py-2 px-4 rounded-md'>
      Contact Me
     </button>
    </a>
   </div>
  </div>
 );
}
