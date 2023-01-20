import Links from './Links';

export default function Container(props: { children: React.ReactNode }) {
 const { children } = props;
 return (
  <div className='mx-auto max-w-7xl px-6'>
   <div className='flex flex-row items-start justify-between w-full'>
    <div className='flex flex-col justify-center w-full'>{children}</div>
    <Links />
   </div>
  </div>
 );
}
