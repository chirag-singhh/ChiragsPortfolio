import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "../data/index";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* Background grid (optional) */}
      {/* <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div> */}

      <div className="flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-bold text-center lg:max-w-[45vw]">
          Ready to take <span className="text-purple-300">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a
          href="https://drive.google.com/file/d/1xMkCQJtIFirVNNWei6e2AZ_Z0Az7nnoW/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MagicButton
            title="Download Resume"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Chirag
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-4 md:mt-0">
          {socialMedia.map((info) => (
            <a
              key={info.name}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt={info.name} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
