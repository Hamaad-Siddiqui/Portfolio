import Container from "@/components/Container";
import { montserrat, questrial } from "./fonts";
import { AnalyticsWrapper } from "./analytics";
import Providers from "./providers";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${questrial.variable}`}
      suppressHydrationWarning
    >
      <head />
      <body className="bg-darkBackground">
        <Providers>
          <Container>{children}</Container>
        </Providers>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
