import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Client from "@/components/Client";
import Experience from "@/components/Experience";
import { HeroScrollDemo } from "@/components/Hero-scroll";
import Footer from "@/components/Footer";
// import Image from "next/image";

export default function Home() {
  return (
   <main  style={{ backgroundColor: '#000319' }}className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
       <Hero/>
       <Grid/>
       <RecentProjects/>
       <Client/>
       <Experience/>
       <HeroScrollDemo />
       <Footer/>
      </div>
   </main>
  );
}
