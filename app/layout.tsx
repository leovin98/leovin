import "@/styles/globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import { NextThemeProvider } from "@/components/next-theme-provider";

const plusJakarta = Plus_Jakarta_Sans({
  display: "swap",
  variable: "--font-jakarta-plus",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  weight: ["800"],
});

export const metadata: Metadata = {
  title: "Leovin | Software Engineer",
  description:
    "Hey, I'm Leovin — a software engineer who loves turning ideas into clean, reliable, and user-friendly web experiences. Whether it's frontend, backend, or somewhere in between, I enjoy building things that just work (and look good too).",
  keywords: [
    "Leovin",
    "portfolio",
    "web developer",
    "React developer",
    "Next.js developer",
    "software engineer",
    "backend developer",
    "frontend developer",
    "freelance developer",
    "modern web developer",
    "full stack developer",
    "JavaScript developer",
    "TypeScript developer",
    "web developer Indonesia",
  ],
  authors: [{ name: "Leovin" }],
  openGraph: {
    title: "Leovin | Software Engineer",
    description:
      "Building clean, reliable, and user-friendly web experiences with React, Next.js, and a bit of coffee.",
    url: "https://leovin.fyi",
    siteName: "Leovin Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.className} antialiased`}>
        {" "}
        <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </NextThemeProvider>
      </body>
    </html>
  );
}
