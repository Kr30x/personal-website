import React from "react";
import Navbar from "./Navbar";

export default function Footer() {
  return (
    <div className="border-t-2 border-neutral-800 mt-16 pt-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-600">
          © 2026 Gleb Golubev
        </p>
        <Navbar className="py-0" />
      </div>
    </div>
  );
}
