import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./component/navbar";
import Footer from "./component/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "spotify",
  description: "Web platform for music streaming",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="w-screen h-screen flex flex-col justify-start items-center bg-black text-white">
          <Navbar />
          <div className='w-[99%] h-[80vh] flex flex-row justify-center items-center'>
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
