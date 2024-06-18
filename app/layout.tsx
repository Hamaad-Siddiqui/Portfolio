import Container from "@/components/Container";
import { montserrat, questrial } from "./fonts";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
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
        <Container>{children}</Container>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
