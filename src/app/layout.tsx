import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ContextProvider from "@/ContextProvider";
import Menu from "@/components/Menu";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ekhis data platform",
  description: "A platform for querying and analysing medical data for Ekhis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ContextProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased home-background`}
          >
            <main className="flex justify-center items-center h-screen">
              <div className="flex flex-col m-5 md:m-0 md:w-[95%] h-full">
                <div className="self-end">
                  <Menu/>
                </div>
                  {children}
              </div>
            </main>
        </body>
      </html>
    </ContextProvider>
  );
}
