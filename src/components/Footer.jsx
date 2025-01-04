import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const socialLinks = [
  { href: "https://www.linkedin.com/in/shubham0085a/", icon: <FaLinkedinIn /> },
  { href: "https://github.com/Shubham0085a", icon: <FaGithub /> },
  { href: "mailto:aasy0085@gmail.com", icon: <MdEmail /> },
  { href: "https://www.instagram.com/mr_shubham.sy/", icon: <FaInstagram /> },
  { href: "https://x.com/shubham0085a", icon: <FaXTwitter /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          Copyright © {new Date().getFullYear()} - All right reserved by Shubham
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
