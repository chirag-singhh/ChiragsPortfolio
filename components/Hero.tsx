
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";

const Hero = () => {
  return (
    <div style={{ backgroundColor: '#000319' }} className="pb-20 pt-36 bg-black text-white relative">
      {/* Spotlights */}
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Grid background */}
      {/* <div style={{ backgroundColor: '#000319' }}className="h-screen w-full bg-black bg-grid-white/[0.03] absolute top-0 left-0 flex items-center justify-center">
        <div style={{ backgroundColor: '#000319' }}className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div> */}
      <div className="h-screen w-full bg-[#000319] bg-grid-white/[0.3] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
  <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
</div>


      {/* Main Content */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue max-w-80">
            Lets Build
          </p>

          <TextGenerateEffect
            words="From Idea to Impactful Interaction"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Chirag, a MERN Developer based in India.
          </p>

          <a href="#about">
            <MagicButton title="Show my work" icon={<FaLocationArrow />} position="right" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
