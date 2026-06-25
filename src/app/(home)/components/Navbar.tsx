import React from "react";
import { SiTelegram } from "react-icons/si";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar({ className }: { className?: string }) {
  return (
    <nav className={cn("py-8 sm:py-10 flex justify-end items-center", className)}>
      <Link
        href="https://t.me/g_golubev"
        aria-label="Telegram"
        className="border-2 border-neutral-700 p-3 text-neutral-400 hover:border-green-500 hover:text-green-500 hover:bg-neutral-900 transition-colors duration-150"
      >
        <SiTelegram className="w-4 h-4" />
      </Link>
    </nav>
  );
}
