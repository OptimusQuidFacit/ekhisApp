
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ContextProvider from "@/ContextProvider";
import Menu from "@/components/Menu";
import { auth } from "../lib/auth";
import { userType } from "../lib/models/user";
import { type Session} from "next-auth";
import { BiLogOut } from "react-icons/bi";
import { handleLogOut } from "@/lib/controllers/user";

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

export type sessionType= Omit<Session, "User">&{
  user: userType
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
} >) {
const session = await auth() as sessionType;
  return (
    <ContextProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased home-background`}
          >
            <main className="flex justify-center items-center min-h-[850px] h-full">
              <div className="flex flex-col m-5 md:m-0 md:w-[95%] h-full">
                <div style={{alignSelf:!session ?"end":""}} className="flex items-center justify-between">
                  {session &&
                  <form action={handleLogOut}>
                    <button>
                      <BiLogOut color="#FFB232" size={30}/>
                    </button>
                  </form>}
                  <Menu session={session}/>
                </div>
                  {children}
              </div>
            </main>
        </body>
      </html>
    </ContextProvider>
  );
}
