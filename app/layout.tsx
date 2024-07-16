import type { Metadata } from "next";
import Link from "next/link";
import { Open_Sans } from "next/font/google";
import "../styles/globals.css";

const open = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MachtBewusst",
  description: "Build by Kazifiti",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Link rel="apple-touch-icon" sizes="57x57" href="../public/logo/apple-icon-57x57.png"></Link>
      <Link rel="apple-touch-icon" sizes="60x60" href="../public/logo/apple-icon-60x60.png"></Link>
      <Link rel="apple-touch-icon" sizes="72x72" href="../public/logo/apple-icon-72x72.png"></Link>
      <Link rel="apple-touch-icon" sizes="76x76" href="../public/logo/apple-icon-76x76.png"></Link>
      <Link rel="apple-touch-icon" sizes="114x114" href="../public/logo/apple-icon-114x114.png"></Link>
      <Link rel="apple-touch-icon" sizes="120x120" href="../public/logo/apple-icon-120x120.png"></Link>
      <Link rel="apple-touch-icon" sizes="144x144" href="../public/logo/apple-icon-144x144.png"></Link>
      <Link rel="apple-touch-icon" sizes="152x152" href="../public/logo/apple-icon-152x152.png"></Link>
      <Link rel="apple-touch-icon" sizes="180x180" href="../public/logo/apple-icon-180x180.png"></Link>
      <Link rel="icon" type="image/png" sizes="192x192" href="../public/logo/android-icon-192x192.png"></Link>
      <Link rel="icon" type="image/png" sizes="32x32" href="../public/logo/favicon-32x32.png"></Link>
      <Link rel="icon" type="image/png" sizes="96x96" href="../public/logo/favicon-96x96.png"></Link>
      <Link rel="icon" type="image/png" sizes="16x16" href="../public/logo/favicon-16x16.png"></Link> */}
      {/* <Link rel="manifest" href="../public/logo/manifest.json"></Link> */}
      {/* <meta name="msapplication-TileColor" content="#ffffff">
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
          <meta name="theme-color" content="#ffffff"> */}

      <body className={open.className}>{children}</body>
    </html>
  );
}
