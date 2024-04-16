import React from "react";
import { IoMdMailOpen } from "react-icons/io";
import { SiTelegram } from "react-icons/si";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navbar({className}: {className?: string}) {

    const socials = [
        {
          link: "https://t.me/g_golubev",
          label: "Telegram",
          icon: SiTelegram ,
        },
        {
            link: "mailto:ggolubev.work@gmail.com",
            label: "Mail",
            icon: IoMdMailOpen,
        }
    ]


    return (<nav className={cn("py-10 flex justify-between items-center", className)}>
        <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">Глеб Голубев 👨🏻</h1>
        <div className="flex items-center gap-5">
            {socials.map((social, index) => {
                const Icon = social.icon
                return <Link href={social.link} key = {index} aria-label={social.label}>
                    <Icon className="w-5 h-5 hover:scale-125 transition-all"/>
                </Link>
            })}
        </div>
    </nav>)
}
