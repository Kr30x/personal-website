"use client";

import { useEffect, useState } from "react";

const PHRASES = [
  "думаю, как сэкономить на разметках...",
  "отлавливаю фродеров...",
  "жду, пока доработает Claude Code...",
  "поднимаю упавшие процессы...",
  "выплачиваю премии редакторам...",
  "готовлюсь к встречам..."
];

const TEXT_CLASS = "text-xs sm:text-sm whitespace-nowrap leading-6";
const TYPING_MS = 45;
const DELETING_MS = 28;
const PAUSE_MS = 2400;

export default function StatusTypewriter() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = PHRASES[phraseIndex];
    const isDoneTyping = !isDeleting && text === phrase;
    const isDoneDeleting = isDeleting && text === "";

    let delay = isDeleting ? DELETING_MS : TYPING_MS;
    if (isDoneTyping) delay = PAUSE_MS;
    if (isDoneDeleting) delay = 350;

    const timeout = setTimeout(() => {
      if (isDoneDeleting) {
        setPhraseIndex((i) => (i + 1) % PHRASES.length);
        setIsDeleting(false);
        return;
      }

      if (isDoneTyping) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        setText(phrase.slice(0, text.length - 1));
      } else {
        setText(phrase.slice(0, text.length + 1));
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);

  return (
    <span aria-live="polite" className="inline-grid">
      {PHRASES.map((phrase) => (
        <span
          key={phrase}
          aria-hidden
          className={`${TEXT_CLASS} col-start-1 row-start-1 invisible pointer-events-none select-none`}
        >
          {phrase}
        </span>
      ))}

      <span className={`${TEXT_CLASS} col-start-1 row-start-1 inline-flex items-center`}>
        <span>{text}</span>
        <span className="ml-0.5 text-green-500 animate-pulse">▮</span>
      </span>
    </span>
  );
}
