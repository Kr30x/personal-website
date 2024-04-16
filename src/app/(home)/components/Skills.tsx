"use client"

import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { SiCmake, SiCplusplus, SiFlask, SiGit, SiJavascript, SiJira, SiNodedotjs, SiPython, SiReact, SiSvelte, SiTailwindcss } from "react-icons/si";

export default function Skills() {

    const skills = [
        {
            text: "C++",
            icon: SiCplusplus,
        },
        {
            text: "Cmake",
            icon: SiCmake,
        },
        {
            text: "Python",
            icon: SiPython,
        },
        {
            text: "Flask",
            icon: SiFlask,
        },
        {
            text: "React",
            icon: SiReact,
        },
        {
            text: "Tailwind",
            icon: SiTailwindcss,
        },
        {
            text: "Svelte",
            icon: SiSvelte,
        },
        {
            text: "Git",
            icon: SiGit,
        },
        {
            text: "Jira",
            icon: SiJira,
        },
    ]

    return (
        <div className="max-w-5xl mx-auto px-8">
            <Title text="Навыки 🔪" className="flex flex-col items-center justify-center -rotate-6"/>
            <HoverEffect items = {skills}/>
        </div>
    )
}
