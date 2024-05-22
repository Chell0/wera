import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "../styles/globals.css";

const open = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  title: "Ossara Blog",
  description: "Build by Kazifiti",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={open.className}>{children}</body>
    </html>
  );
}
