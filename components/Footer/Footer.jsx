import React from "react";
import Link from "next/link";
import { footerLinks } from "./footerData";

const Footer = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: "/facebook.png",
      path: "",
    },
    {
      name: "Instagram",
      icon: "/instagram.png",
      path: "https://www.instagram.com/abhay_prompts/",
    },
    {
      name: "LinkedIn",
      icon: "/linkedin.png",
      path: "https://www.linkedin.com/in/abhay-pandit-b9119b251/",
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
            {footerLinks.product.map((link, index) => (
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
            {footerLinks.company.map((link, index) => (
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
             {/* legal */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Legal
          </h4>
          <ul className="space-y-2">
            {footerLinks.legal.map((link, index) => (
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

      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 text-center text-sm text-white/80 py-4">
        © {new Date().getFullYear()} PromptVerse. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;