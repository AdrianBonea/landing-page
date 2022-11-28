import { FaTwitter, FaFacebookF, FaInstagram, FaGithub, FaDribbble, FaGooglePlus } from "react-icons/fa";

function Footer() {
  return (
    <footer className="grid grid-cols-1 mt-auto justify-items-center z-20">
      <div className="grid grid-cols-6 lg:gap-6 mobile:gap-4 text-3xl text-[#777]">
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
        <a href="https://facebook.com/" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://dribble.com/" target="_blank" rel="noreferrer">
          <FaDribbble />
        </a>
        <a href="https://google.com/" target="_blank" rel="noreferrer">
          <FaGooglePlus />
        </a>
      </div>
      <div className="flex lg:flex-row mobile:flex-col my-8 text-sm text-[#777]">
        <div>&copy; Setmobile S.R.L. All rights reserved.</div>
        <div className="ml-8">
          Design:{" "}
          <a href="###" className="underline decoration-dotted">
            Vivamus Donec
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
