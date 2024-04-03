import React from "react";
import { SiCmake, SiCplusplus, SiFlask, SiPython, SiSelenium, SiObsidian, SiMarkdown } from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export default function Projects(){
    const projects = [
        {
            title: "Custom image processor", 
            tech: [SiCplusplus, SiCmake],
            link: "https://github.com/Kr30x/image_processor",
            cover: "/project1.png",
            background: "",
        },
        {
            title: "Testing system", 
            tech: [SiPython, SiFlask],
            link: "http://amihelper.run.place",
            cover: "/project2.png",
            background: "",
        },
        // {
        //     title: "Custom markdown to html converter", 
        //     tech: [SiPython, SiFlask],
        //     link: "http://amihelper.run.place",
        //     cover: "/project3.png",
        //     background: "",
        // },
        // {
        //     title: "Cpp reference clone with custom styling", 
        //     tech: [SiPython, SiFlask],
        //     link: "http://amihelper.run.place",
        //     cover: "/project4.png",
        //     background: "",
        // },
        {
            title: "Yandex contest parser", 
            tech: [SiPython, SiSelenium],
            link: "https://github.com/Kr30x/yacontest_scraper",
            cover: "/project5.png",
            background: "bg-white",
        },
        {
            title: "Obsidian blog editor", 
            tech: [SiObsidian, SiPython, SiMarkdown],
            link: "http://amihelper.run.place/notes",
            cover: "/project6.png",
            background: "bg-white",
        },
    ]

    return <div className="py-10 p-5 sm:p-0">
        <Title text="Projects 🚀" className="flex flex-col items-center justify-center rotate-6"/>
        <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
            {projects.map((project, index) => {
                return (
                    <Link href={project.link} key={index}>
                        <div className={cn("p-1 rounded-xl", project.background)}>
                            <DirectionAwareHover imageUrl={project.cover} className="w-full space-y-5 cursor-pointer">
                                <div className="space-y-5">
                                    <h1 className="text-2xl font-bold">{project.title}</h1>
                                    <div className="flex items-center gap-5">
                                        {project.tech.map((tech, index) => {
                                            const Icon = tech
                                            return <Icon key={index} className="w-8 h-8"/>
                                        })}
                                    </div>
                                </div>
                            </DirectionAwareHover>
                        </div>
                    </Link>
                )
            })}
        </div>
    </div>
}
