import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader/PageHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NTNU | Your groups",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Providers>
          <Header />
          <div className="container mt-3">
            <PageHeader />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
