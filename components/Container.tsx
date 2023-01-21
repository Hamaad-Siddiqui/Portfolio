import Links from './Links';

export default function Container(props: { children: React.ReactNode }) {
 const { children } = props;
 return (
  <div className='mx-auto max-w-7xl min-w-[20rem] px-4 sm:px-6'>
   <div className='flex flex-col items-center justify-start w-full md:flex-row md:items-start md:justify-between'>
    <div className='flex flex-col justify-center w-full'>{children}</div>
    <Links />
   </div>
  </div>
 );
}
