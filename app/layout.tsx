import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "../styles/globals.css";

const jose = Josefin_Sans({
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
      <body className={jose.className}>{children}</body>
    </html>
  );
}
