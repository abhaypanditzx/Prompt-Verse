import { Inter,Poppins } from "next/font/google";

import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import {Toaster} from "react-hot-toast"
import { cookies } from "next/headers";



const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight:["400","500","600","700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "PromptVerse",
  description: "PromptVerse - AI Powered Prompt Generator",
};

export default async function RootLayout({ children }) {

  const cookiesStore=  await cookies();

  const token = cookiesStore.get("token")?.value;
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        {!token && <Navbar />}
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
