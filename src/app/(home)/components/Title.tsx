import React from "react";

export default function Title({
  text,
  className,
  index = "01",
}: {
  text: string;
  className?: string;
  index?: string;
}) {
  return (
    <div className={className}>
      <div className="flex items-end justify-between gap-4 border-b-2 border-neutral-800 pb-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          {text}
        </h2>
        <span className="font-mono text-xs text-neutral-600 tracking-widest shrink-0">
          {index}
        </span>
      </div>
    </div>
  );
}
