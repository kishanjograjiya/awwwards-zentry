import {
  FaInstagram,
  FaGithubAlt,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

const socialLinks = [
  { href: "https://github.com/kishanjograjiya", icon: <FaGithubAlt /> },
  {
    href: "https://www.linkedin.com/in/kishanjograjiya",
    icon: <FaLinkedinIn />,
  },
  { href: "https://x.com/JograjiyaKishan", icon: <FaXTwitter /> },
  { href: "https://www.instagram.com/jograjiyakishan", icon: <FaInstagram /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm md:text-left">
          &copy; Kishan Jograjiya 2025. All rights reserved
        </p>

        <div className="flex justify-center gap-4 md:justify-start">
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
          className="text-center text-sm hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
