import Image from 'next/image';
import Card from '@/components/Card';

export default function Home() {
 return (
  <div className='flex flex-col'>
   <div className='flex flex-row justify-between mt-4 items-center gap-8'>
    <div className='flex flex-col max-w-[46rem] gap-1'>
     <h1 className='font-semibold text-4xl sm:text-5xl text-black dark:text-white'>
      Hamaad Siddiqui
     </h1>
     <p className='text-black dark:text-white text-[0.875rem] sm:text-base'>
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
     className='rounded-full mb-2 hidden md:block'
    />
   </div>
   <div className='flex flex-row justify-evenly items-center w-full mt-5 gap-2 sm:w-[35.375rem] sm:justify-between'>
    <a href='/resume.pdf' target='_blank' rel='noreferrer'>
     <button className='border-2 border-gray font-semibold dark:text-white text-black text-base w-60 py-2 px-4 rounded-md max-[520px]:w-40 max-[380px]:w-36 sm:text-xl'>
      My Résumé
     </button>
    </a>
    <a href='mailto:hamaad_siddiqui@hotmail.com'>
     <button className='bg-black dark:bg-white font-semibold dark:text-black text-white text-base w-60 py-2 px-4 rounded-md max-[520px]:w-40 max-[380px]:w-36 sm:text-xl'>
      Contact Me
     </button>
    </a>
   </div>
   <h2 className='font-semibold text-3xl text-black dark:text-white mt-20 mb-10'>
    Work
   </h2>
   <div className='flex flex-row justify-between items-center gap-10 flex-wrap max-[978px]:justify-center'>
    <Card
     title='Project Name'
     description='NFT marketplace, metaverse spaces built for music fans, and web3 portals for artists'
     image='/avatar.jpg'
     stack={['React', 'Next.js', 'TypeScript', 'TailwindCSS']}
     tags={['Development', 'Personal']}
     links={{
      github: 'https://github.com/vercel/next.js',
      playStore: 'https://apps.apple.com/us/app/nextjs/id1498059439',
     }}
    />
    <Card
     title='Project Name'
     description='NFT marketplace, metaverse spaces built for music fans, and web3 portals for artists'
     image='/avatar.jpg'
     stack={[
      'React',
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'React',
      'Next.js',
      'TypeScript',
     ]}
     tags={['Development', 'Personal']}
     links={{
      github: 'https://github.com/vercel/next.js',
      appStore: 'https://apps.apple.com/us/app/nextjs/id1498059439',
     }}
    />
    <Card
     title='Project Name'
     description='NFT marketplace, metaverse spaces built for music fans, and web3 portals for artists'
     image='/avatar.jpg'
     stack={[
      'React',
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'React',
      'Next.js',
      'TypeScript',
     ]}
     tags={['Development', 'Personal']}
     links={{
      github: 'https://github.com/vercel/next.js',
      website: 'https://github.com/vercel/next.js',
     }}
    />
    <Card
     title='Project Name'
     description='NFT marketplace, metaverse spaces built for music fans, and web3 portals for artists'
     image='/avatar.jpg'
     stack={[
      'React',
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'React',
      'Next.js',
      'TypeScript',
     ]}
     tags={['Development', 'Personal']}
     links={{
      github: 'https://github.com/vercel/next.js',
      playStore: 'https://apps.apple.com/us/app/nextjs/id1498059439',
      appStore: 'https://apps.apple.com/us/app/nextjs/id1498059439',
     }}
    />
   </div>
  </div>
 );
}
