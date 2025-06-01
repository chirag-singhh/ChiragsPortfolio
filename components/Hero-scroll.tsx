"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from 'next/image';
export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              Give a Look on <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-white">
                Github
              </span>
            </h1>
          </>
        }
      >
        {/* <img
          src={`/githpic.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        /> */}
        <Image
  src="/githpic.png"
  alt="hero"
  width={1400}
  height={720}
  className="mx-auto rounded-2xl object-cover h-full object-left-top"
  draggable={false}
/>
      </ContainerScroll>
    </div>
  );
}
