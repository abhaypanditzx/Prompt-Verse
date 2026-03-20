import { Inter,Poppins,Montserrat } from "next/font/google";

import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import {Toaster} from "react-hot-toast"
import { cookies } from "next/headers";
import Script from "next/script";
import Footer from "../components/Footer/Footer";

<Script
  async
  strategy="afterInteractive"
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8109343075563496"
  crossOrigin="anonymous"
/>

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight:["400","500","600","700"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight:["400","500","600","700"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "PromptVerse",
  description: "PromptVerse - AI Powered Prompt Generator",
};

export default async function RootLayout({ children }) {

  const cookiesStore = await cookies();

  const token = cookiesStore.get("token")?.value;
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8109343075563496"
     crossorigin="anonymous"></script>
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${montserrat.variable}  antialiased`}
      >
        {!token && <Navbar />}
        {children}
        <Toaster/>
        {
         !token && <Footer/>
        }
      </body>
    </html>
  );
}
