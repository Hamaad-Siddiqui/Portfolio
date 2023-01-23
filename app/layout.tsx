import Container from '@/components/Container';
import { montserrat } from './fonts';
import Providers from './providers';
import { AnalyticsWrapper } from './analytics';
import './globals.css';

export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <html lang='en' className={montserrat.variable} suppressHydrationWarning>
   <head />
   <body className='bg-snow dark:bg-coal'>
    <Providers>
     <Container>{children}</Container>
    </Providers>
    <AnalyticsWrapper />
   </body>
  </html>
 );
}
