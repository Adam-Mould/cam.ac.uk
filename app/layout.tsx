import type { Metadata } from "next";
import { Lato } from "next/font/google";

import { cn } from "@/lib/utils";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "University of Cambridge",
  description:
    "The University of Cambridge is one of the world’s leading universities, with a rich history of radical thinking dating back to 1209.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          lato.className,
          "antialiase min-h-screen bg-white text-black",
        )}
      >
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
