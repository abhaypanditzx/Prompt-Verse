import React from "react";
import Link from "next/link";
import { Links1, Links2 } from "./footerData";

const Footer = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: "/facebook.png",
      path: "#",
    },
    {
      name: "Instagram",
      icon: "/instagram.png",
      path: "#",
    },
    {
      name: "LinkedIn",
      icon: "/linkedin.png",
      path: "#",
    },
  ]
  return (
    <footer className="w-full bg-gray-900 border-t border-gray-200">
      
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <Link href="/" className="logo-font font-bold text-xl text-white">
            <span className="text-blue-500">Prompt</span>Verse
          </Link>
          <p className="text-white text-sm mt-3 leading-relaxed">
            Find the perfect style for your next masterpiece.
          </p>
          
          {/* Social (placeholder) */}
          <div className="flex gap-3 mt-4 text-white">
        {
          socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="text-gray-600 hover:text-blue-500 transition"
            >
              <img src={link.icon} alt={link.name}  className="w-6 h-6" />
            </Link>
          ))
        }
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Explore
          </h4>
          <ul className="space-y-2">
            {Links1.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className="text-white/80 hover:text-blue-500 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Help & Info
          </h4>
          <ul className="space-y-2">
            {Links2.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className="text-white/80 hover:text-blue-500 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Stay Inspired
          </h4>
          <p className="text-white/80 text-sm mb-4">
            Subscribe for the weekly best prompts.
          </p>

          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-300 placeholder:text-white/80 text-white/80 rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 text-center text-sm text-white/80 py-4">
        © {new Date().getFullYear()} PromptVerse. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;