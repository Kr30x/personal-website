"use client";

import { MovingBorderBtn } from "@/components/ui/moveing-border";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between">
      <div className="space-y-8 text-center lg:text-left">
        {/* Status indicator */}
        <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-green-400 font-medium">
            Открыт для стартап-движа
          </span>
        </div>

        {/* Main heading with gradient */}
        <div className="space-y-4">
          <h1 className="text-5xl lg:text-8xl font-bold text-white">
            Привет! 👋
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-green-400 rounded-full mx-auto lg:mx-0"></div>
        </div>

        {/* Name and description */}
        <div className="space-y-4">
          <h2 className="text-2xl lg:text-3xl font-semibold text-white">
            Глеб Голубев
          </h2>
          <p className="md:max-w-lg text-lg text-gray-300 leading-relaxed">
            Работаю с данными веб-поиска в Яндексе. Быстро адаптируюсь,
            оптимизирую всё подряд
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-400 italic">
            <span>🎮</span>
            <span>Strategy games enjoyer</span>
          </div>
        </div>

        {/* Call to actions */}
        <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
          <Link
            href={"https://t.me/g_golubev"}
            className="group w-full sm:w-auto"
          >
            <div className="bg-green-500 hover:bg-green-400 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/25 text-center">
              Telegram 💬
            </div>
          </Link>
          <Link
            href={"mailto:ggolubev.work@gmail.com"}
            className="group w-full sm:w-auto"
          >
            <div className="border-2 border-gray-700 hover:border-green-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg text-center">
              Email 📫
            </div>
          </Link>
        </div>
      </div>
      <div className="relative">
        {/* Photo with enhanced visual composition */}
        <div className="w-80 h-80 relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-indigo-500/20 rounded-full blur-3xl"></div>

          {/* Main visual elements */}
          <div className="relative w-full h-full space-y-4 -rotate-[15deg]">
            <div className="flex gap-4 translate-x-8">
              <div className="w-36 h-36 rounded-2xl bg-gradient-to-br from-green-500 to-green-400 shadow-lg shadow-green-500/25 flex items-center justify-center">
                <span className="text-2xl">🧠</span>
              </div>
              <div className="w-36 h-36 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-400 shadow-lg shadow-indigo-500/25 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
            </div>
            <div className="flex gap-4 -translate-x-8">
              <div className="w-36 h-36 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-400 shadow-lg shadow-indigo-500/25 flex items-center justify-center">
                <span className="text-2xl">🌙</span>
              </div>
              <div className="w-36 h-36 rounded-full bg-gradient-to-br from-green-500 to-green-400 shadow-lg shadow-green-500/25 flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
            </div>
          </div>
        </div>

        {/* Status badge */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 lg:bottom-5 lg:left-0 lg:transform-none">
          <MovingBorderBtn
            borderRadius="0.75rem"
            className="px-6 py-3 font-semibold text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Яндекс Backend Dev</span>
            </div>
          </MovingBorderBtn>
        </div>
      </div>
    </div>
  );
}
