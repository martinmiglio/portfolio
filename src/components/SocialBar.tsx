import {
  IconDefinition,
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface Contact {
  link: string;
  icon: IconDefinition;
}

const contactContent: Contact[] = [
  {
    link: "https://github.com/martinmiglio",
    icon: faGithub,
  },
  {
    link: "mailto:contact@martinmiglio.dev",
    icon: faEnvelope,
  },
  {
    link: "https://www.linkedin.com/in/martinmiglio",
    icon: faLinkedinIn,
  },
  {
    link: "https://www.instagram.com/migliosights",
    icon: faInstagram,
  },
];

const SocialBar = () => {
  return (
    <div className="flex flex-row gap-4">
      {contactContent.map((item) => (
        <Link href={item.link} key={item.link}>
          <FontAwesomeIcon icon={item.icon} className="h-5 w-5" />
        </Link>
      ))}
    </div>
  );
};

export default SocialBar;
