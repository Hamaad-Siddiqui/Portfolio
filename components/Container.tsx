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
   </div>
  </>
 );
}
