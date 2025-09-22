import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bodyClass = [
  geistSans.variable,
  geistMono.variable,
  "antialiased",
  "bg-girly-grid",
  "bg-girly-grid-animated",
  "bg-white",
].join(" ");

export const metadata: Metadata = {
  title: "Nadine Ayu Maulidya - Portfolio",
  description:
    "Portfolio of Nadine Ayu Maulidya, showcasing skills in Sharia Banking, administration, and data management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bodyClass}>{children}</body>
    </html>
  );
}
