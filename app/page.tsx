import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
// import { FloatingNav } from "@/components/ui/floating-navbar";
// import Image from "next/image";

export default function Home() {
  return (
   <main  style={{ backgroundColor: '#000319' }}className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* <FloatingNav navItems={navitems}/> */}
       <Hero/>
       <Grid/>
      </div>
   </main>
  );
}
