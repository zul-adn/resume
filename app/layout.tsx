import type { Metadata } from "next";
import { Poppins }from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['400','500','600','700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});


export const metadata: Metadata = {
  title: "Zul Amri Durrin Nafis | Resume",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
