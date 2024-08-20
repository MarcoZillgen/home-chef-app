import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home Chef",
  description: "Your personal chef at home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-zinc-900 text-white w-full h-full container mx-auto p-7  ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
