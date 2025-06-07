"use client";

import { motion } from "framer-motion";
import Title from "./Title";

export default function Experience() {
  const experiences = [
    {
      title: "Backend Разработчик",
      company: "Яндекс",
      location: "Москва",
      period: "Янв 2025 - Настоящее время",
      description:
        "Разрабатываю инфраструктуру для веб-поиска Яндекса. Управляю системами кэширования критически важных данных и создаю инструменты для трансформации в ML-датасеты. Постоянно ищу точки оптимизации в процессах работы с тысячами асессоров.",
      current: true,
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="max-w-5xl mx-auto px-8 py-20">
      <Title
        text="Опыт работы 💼"
        className="flex flex-col items-center justify-center rotate-3 mb-16"
      />

      <motion.div
        className="relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-green-400 to-transparent"></div>

        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative flex items-start mb-12 last:mb-0"
          >
            {/* Bullet point */}
            <div className="relative z-10 flex-shrink-0">
              <div
                className={`w-4 h-4 rounded-full border-4 ${
                  experience.current
                    ? "bg-green-500 border-green-400 shadow-lg shadow-green-500/50"
                    : "bg-gray-700 border-gray-600"
                }`}
              >
                {experience.current && (
                  <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="ml-8 flex-1">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-green-500/50 transition-all duration-300 group">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                      {experience.title}
                    </h3>
                    <p className="text-green-400 font-medium">
                      {experience.company} • {experience.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-2 sm:mt-0">
                    <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                      {experience.period}
                    </span>
                    {experience.current && (
                      <span className="text-xs text-green-400 bg-green-500/20 px-2 py-1 rounded-full border border-green-500/30">
                        Текущая
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {experience.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
