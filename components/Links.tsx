import {
  MailIcon,
  GitHubIcon,
  TwitterIcon,
  InstagramIcon,
  UpworkIcon,
  FiverrIcon,
  LinkedInIcon,
} from "./Icons";

export default function Links() {
  return (
    <div className="flex flex-row items-center justify-start gap-[13px] mr-7 mb-6">
      <a
        href="mailto:hamaad_siddiqui@hotmail.com"
        className="text-darkPrimary"
        target="_blank"
        rel="noreferrer"
      >
        <MailIcon />
      </a>
      <a
        href="https://github.com/Hamaad-Siddiqui"
        className="text-darkPrimary"
        target="_blank"
        rel="noreferrer"
      >
        <GitHubIcon />
      </a>
      <a
        href="https://twitter.com/HamaadSiddiqui"
        className="text-darkPrimary"
        target="_blank"
        rel="noreferrer"
      >
        <TwitterIcon />
      </a>
      <a
        href="https://www.instagram.com/hamaad.co"
        className="text-darkPrimary"
        target="_blank"
        rel="noreferrer"
      >
        <InstagramIcon />
      </a>
      <a
        href="https://www.linkedin.com/in/hamaad-siddiqui"
        className="text-darkPrimary mb-1"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon />
      </a>
      <a
        href="https://www.upwork.com/freelancers/hamaads"
        className="text-darkPrimary"
        target="_blank"
        rel="noreferrer"
      >
        <UpworkIcon />
      </a>
      <a
        href="https://www.fiverr.com/hamaad_siddiqui"
        className="text-darkPrimary"
        target="_blank"
        rel="noreferrer"
      >
        <FiverrIcon />
      </a>
    </div>
  );
}
