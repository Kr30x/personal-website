"use client";

import { Press_Start_2P } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import StatusTypewriter from "./StatusTypewriter";

const gamingFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

export default function HeroSection() {
  return (
    <div className="min-h-[62vh] flex flex-col lg:flex-row items-center lg:items-start gap-14 lg:gap-20 max-w-5xl mx-auto pb-16 sm:pb-20 pt-4">
      <div className="relative flex-shrink-0 flex flex-col items-center w-full max-w-[18rem] sm:max-w-[20rem] lg:max-w-none lg:w-[22rem]">
        <div className="relative w-full">
          <div className="absolute inset-0 translate-x-3 translate-y-3 border-2 border-green-500/30 pointer-events-none" />
          <div className="relative aspect-square border-2 border-neutral-700 bg-neutral-900 overflow-hidden">
            <Image
              src="/avatar.jpg"
              alt="Глеб Голубев"
              fill
              className="object-cover object-[center_20%] scale-110 grayscale-[15%] contrast-110"
              priority
            />
          </div>
        </div>
        <div className="relative z-10 -mt-px w-full max-w-[calc(100vw-2.5rem)]">
          <div className="border-2 border-neutral-700 border-t-0 bg-neutral-950 px-4 py-3 text-xs sm:text-sm text-neutral-300 flex items-center gap-3 w-full">
            <div className="w-2 h-2 bg-green-500 animate-pulse shrink-0" />
            <StatusTypewriter />
          </div>
        </div>
      </div>

      <div className="space-y-8 text-center lg:text-left flex-1 lg:pt-6">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight leading-[1.05]">
            Глеб
            <br />
            Голубев
          </h1>
          <div className="flex items-center gap-3 justify-center lg:justify-start">
            <div className="h-px w-10 bg-green-500" />
            <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-green-500">
              Руководитель бригады · Яндекс
            </p>
          </div>
        </div>

        <p className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 border-l-2 border-neutral-800 pl-5">
          Строю инфраструктуру для разметки данных.
          <br />
          Работаю с редакторами и экспертами на поисковых проектах.
        </p>

        <p
          className={`${gamingFont.className} text-[10px] sm:text-[11px] text-neutral-600 leading-relaxed`}
        >
          Strategy games enjoyer
        </p>

        <div>
          <Link href="https://t.me/g_golubev" className="inline-block group">
            <div className="border-2 border-green-500 bg-green-500 text-black font-semibold uppercase tracking-wider text-xs sm:text-sm px-8 py-3.5 brutal-shadow transition-transform duration-150 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none">
              Telegram →
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
