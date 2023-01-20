import Container from '@/components/Container';
import { montserrat } from './fonts';
import './globals.css';

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <html lang='en' className={montserrat.variable}>
   <head />
   <body className='bg-snow dark:bg-coal'>
    <Container>{children}</Container>
   </body>
  </html>
 );
}
