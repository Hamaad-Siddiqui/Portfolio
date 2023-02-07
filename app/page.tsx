import Image from 'next/image';
import { client } from '@/lib/sanity-server';
import { Work } from '@/lib/types';
import Card from '@/components/Card';

async function getWork() {
 const query = `*[_type == 'work']| order(position asc) {
  title,
  description,
  image,
  stack,
  tags,
  links
 }`;
 const work: Work[] = await client.fetch(query);
 return work;
}

export default async function Home() {
 const work = await getWork();
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
    {work.map((item, i) => (
     <Card
      key={i}
      title={item.title}
      description={item.description}
      image={item.image}
      stack={item.stack}
      tags={item.tags}
      links={item.links}
     />
    ))}
   </div>
   <div className='flex flex-col items-center mb-10'>
    <h2 className='font-semibold sm:text-3xl text-black dark:text-white mt-20 mb-10 text-center max-w-[46rem] text-2xl mx-5'>
     If you have any questions or would like to work together, feel free to
     reach out!
    </h2>
    <a href='/meeting'>
     <button className='border-2 border-gray font-semibold dark:text-white text-black text-base w-60 py-2 px-4 rounded-md max-[520px]:w-40 max-[380px]:w-34 sm:text-xl'>
      Schedule A Call
     </button>
    </a>
   </div>
  </div>
 );
}
