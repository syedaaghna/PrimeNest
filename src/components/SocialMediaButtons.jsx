import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function PopOutSocialButtons() {
  const socialLinks = [
    {
      icon: faFacebookF,
      url: "https://facebook.com",
      bg: "bg-blue-600",
      label: "Facebook",
    },
    {
      icon: faTwitter,
      url: "https://twitter.com",
      bg: "bg-sky-400",
      label: "Twitter",
    },
    {
      icon: faInstagram,
      url: "https://instagram.com",
      bg: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
      label: "Instagram",
    },
    {
      icon: faWhatsapp,
      url: "https://web.whatsapp.com/",
      bg: "bg-green-700",
      label: "Whatsapp",
    },
  ];

  return (
    <div className="fixed top-1/3 right-0 hidden md:flex flex-col gap-3 z-50">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative flex items-center text-white ${social.bg} rounded-l-full shadow-lg 
                      transition-all duration-300 transform translate-x-12 hover:translate-x-0`}
          style={{ width: "180px", height: "48px" }}
        >
          <div className="flex items-center justify-center w-12 h-12">
            <FontAwesomeIcon icon={social.icon} className="text-lg" />
          </div>
          <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
            {social.label}
          </span>
        </a>
      ))}
    </div>
  );
}
