import Image from 'next/image';
import { Work } from '@/lib/types';
import { urlForImage } from '@/lib/sanity';
import { AppStoreIcon, GitHubIcon, LinkIcon, PlayStoreIcon } from './Icons';

export default function Card(props: Work) {
 return (
  <div className='flex flex-col border dark:border-darkLight border-secondary rounded-md px-5 py-4 h-[14.5rem] max-[350px]:h-60 w-[22rem]'>
   <div className='flex flex-row max-[374px]:flex-row-reverse items-center gap-5 max-[374px]:gap-2'>
    <Image
     src={urlForImage(props.image).url()}
     alt={props.title}
     width={76}
     height={76}
     className='rounded-full max-[350px]:w-16 max-[350px]:h-16'
    />
    <div className='flex flex-col gap-1 text-primary dark:text-darkPrimary'>
     <h1 className='font-medium text-2xl'>{props.title}</h1>
     <p className='text-[0.875rem]'>{props.description}</p>
    </div>
   </div>
   <div className='flex flex-col justify-between h-full mt-4'>
    <div className='flex flex-row items-center gap-2 flex-wrap'>
     {props.stack.map((name, i) => (
      <span
       className='dark:bg-darkBadge bg-light text-[12px] font-medium py-0.5 px-2 rounded-xl dark:text-darkPrimary text-primary'
       key={i}
      >
       {name}
      </span>
     ))}
    </div>
    <div className='flex flex-row mt-2 items-end justify-between w-full text-primary dark:text-darkPrimary '>
     <div className='flex flex-row items-center'>
      {props.tags.map((tag, i) => (
       <div
        className='flex flex-row items-center text-[12px] font-medium'
        key={i}
       >
        {tag}
        {i !== props.tags.length - 1 && <span className='mx-1'>•</span>}
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
