"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Title from "./Title";

export default function Experience() {
  const experiences = [
    {
      title: "Руководитель бригады",
      company: "Яндекс",
      location: "Москва",
      period: "Июнь 2026 — Сейчас",
      description:
        "Моя команда строит инфраструктуру для разметки данных. Работаем с двумя типами исполнителей: штатными редакторами на поисковых проектах и экспертами на сделке. Автоматизируем найм, выплаты, контроль качества и мониторинг активности, строим универсальные инструменты для аналитики.",
      link: {
        url: "https://ai-trainers.ya.ru/",
        label: "ai-trainers.ya.ru",
      },
      current: true,
    },
    {
      title: "Backend Разработчик",
      company: "Яндекс",
      location: "Москва",
      period: "Янв 2025 — Июнь 2026",
      description:
        "Разрабатывал парсеры и инструменты генерации датасетов для веб-поиска Яндекса. Управлял хранилищами оценок поисковых разметок и аналитикой по ним. Строил инфраструктуру рейтинга разметчиков данных.",
      current: false,
    },
    {
      title: "Стажер Backend Разработчик",
      company: "Яндекс",
      location: "Москва",
      period: "Окт 2024 - Янв 2025",
      description:
        "Создал систему мониторинга и алертов для команды. Автоматизировал контроль задач для асессоров и оптимизировал процессы выплат. Быстро освоил архитектуру высоконагруженных систем и работу с большими данными.",
      current: false,
    },
  ];

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 16,
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: "easeOut",
        delay: index * 0.15,
      },
    }),
  };

  return (
    <div className="max-w-5xl mx-auto">
      <Title text="Опыт работы" className="mb-12 sm:mb-16" index="01" />

      <div className="space-y-0 border-2 border-neutral-800">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="relative grid sm:grid-cols-[4rem_1fr] border-b border-neutral-800 last:border-b-0"
          >
            <div className="hidden sm:flex flex-col items-center border-r border-neutral-800 py-8">
              <div
                className={`w-3 h-3 border-2 ${
                  experience.current
                    ? "bg-green-500 border-green-500"
                    : "bg-neutral-900 border-neutral-600"
                }`}
              />
              {index < experiences.length - 1 && (
                <div className="w-px flex-1 bg-neutral-800 mt-3" />
              )}
            </div>

            <motion.div
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={`p-5 sm:p-8 bg-neutral-950 hover:bg-neutral-900/50 transition-colors duration-150 ${
                experience.current ? "border-l-4 border-l-green-500 sm:border-l-0" : ""
              }`}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-8 mb-5">
                <div className="min-w-0 flex-1 space-y-2">
                  <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
                    {experience.title}
                  </h3>
                  <div className="flex items-center gap-2 text-neutral-500 text-sm font-mono uppercase tracking-wide">
                    <Image
                      src="/yandex_logo.png"
                      alt="Yandex"
                      width={16}
                      height={16}
                      className="object-contain shrink-0"
                    />
                    <span>
                      {experience.company} · {experience.location}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="font-mono text-[11px] text-neutral-400 border border-neutral-700 px-2.5 py-1 uppercase tracking-wide whitespace-nowrap">
                    {experience.period}
                  </span>
                  {experience.current && (
                    <span className="font-mono text-[11px] text-green-500 border-2 border-green-500/40 bg-green-500/5 px-2.5 py-1 uppercase tracking-wide whitespace-nowrap">
                      Текущая
                    </span>
                  )}
                </div>
              </div>
              <div className="text-neutral-400 leading-relaxed text-sm sm:text-base">
                {experience.description}
              </div>
              {"link" in experience && experience.link && (
                <Link
                  href={experience.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-5 font-mono text-xs uppercase tracking-wider text-green-500 hover:text-green-400 border-b border-green-500/40 hover:border-green-400 transition-colors pb-0.5"
                >
                  {experience.link.label}
                  <span aria-hidden="true">↗</span>
                </Link>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
