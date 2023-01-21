import Image from 'next/image';
import { AppStoreIcon, GitHubIcon, LinkIcon, PlayStoreIcon } from './Icons';

interface CardProps {
 title: string;
 description: string;
 image: string;
 stack: string[];
 tags: string[];
 links: {
  github?: string;
  website?: string;
  playStore?: string;
  appStore?: string;
 };
}

export default function Card(props: CardProps) {
 return (
  <div className='flex flex-col w-[30rem] h-52 max-[1170px]:w-[28rem] max-[1100px]:w-[26rem] max-[1100px]:h-56 max-[1040px]:w-[24rem] max-[976px]:w-[30rem] max-[976px]:h-52 max-[470px]:h-56 max-[374px]:h-[16rem] max-[362px]:h-[18rem] border-2 border-gray rounded-md px-5 py-4'>
   <div className='flex flex-row max-[374px]:flex-row-reverse items-center gap-5 max-[374px]:gap-2'>
    <Image
     src={props.image}
     alt={props.title}
     width={76}
     height={76}
     className='rounded-full'
    />
    <div className='flex flex-col gap-1 text-black dark:text-white'>
     <h1 className='font-medium text-2xl'>{props.title}</h1>
     <p className='text-[0.875rem]'>{props.description}</p>
    </div>
   </div>
   <div className='flex flex-col justify-between h-full mt-4'>
    <div className='flex flex-row items-center gap-2 flex-wrap'>
     {props.stack.map((name) => (
      <span className='bg-gray text-sm font-medium py-0.5 px-2 rounded-xl text-white'>
       {name}
      </span>
     ))}
    </div>
    <div className='flex flex-row items-end justify-between w-full text-black dark:text-white '>
     <div className='flex flex-row items-center'>
      {props.tags.map((tag, index) => (
       <div className='flex flex-row items-center text-sm font-medium'>
        {tag}
        {index !== props.tags.length - 1 && <span className='mx-1'>•</span>}
       </div>
      ))}
     </div>
     <div className='flex flex-row items-center gap-2'>
      {props.links.github && (
       <a href={props.links.github} target='_blank' rel='noreferrer'>
        <GitHubIcon />
       </a>
      )}
      {props.links.website && (
       <a href={props.links.website} target='_blank' rel='noreferrer'>
        <LinkIcon />
       </a>
      )}
      {props.links.playStore && (
       <a href={props.links.playStore} target='_blank' rel='noreferrer'>
        <PlayStoreIcon />
       </a>
      )}
      {props.links.appStore && (
       <a href={props.links.appStore} target='_blank' rel='noreferrer'>
        <AppStoreIcon />
       </a>
      )}
     </div>
    </div>
   </div>
  </div>
 );
}
