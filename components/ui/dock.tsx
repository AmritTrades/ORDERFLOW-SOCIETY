"use client";

import React from "react";
import {
  Home,
  Users,
  GraduationCap,
  Layers,
  MessageSquare,
  ExternalLink
} from "lucide-react";

export function FloatingDock() {
  return (
    <div className="fixed top-6 inset-x-0 z-50 flex items-center justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto flex items-center gap-2 sm:gap-4 scale-[0.82] sm:scale-100">
        <div className="flex items-center gap-1.5 sm:gap-3 rounded-full bg-neutral-900/80 px-2.5 sm:px-4 py-2 sm:py-2.5 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl">

          {/* Logo / Brand Indicator */}
          <div className="flex items-center gap-2 pr-3 border-r border-white/10">
            <div className="h-2 w-2 rounded-full bg-[#00FF66] animate-pulse" />
            <span className="font-extrabold text-xs tracking-wider text-white uppercase whitespace-nowrap hidden sm:inline">
              ORDERFLOW SOCIETY
            </span>
          </div>

          {/* Navigation Links */}
          <DockIcon href="#" icon={Home} label="Home" />
          <DockIcon href="#community" icon={Users} label="Community" />
          <DockIcon href="#mentorship" icon={GraduationCap} label="Mentorship" />
          <DockIcon href="#tools" icon={Layers} label="Stack" />
          <DockIcon href="https://discord.gg/bZ2hVCrCMw" icon={MessageSquare} label="Discord" isExternal />

          <span className="mx-1 h-6 w-px bg-white/10" aria-hidden="true" />

          {/* Apply Action Button */}
          <a
            href="#mentorship"
            className="flex items-center gap-1.5 whitespace-nowrap px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#00FF66] text-black font-extrabold text-[10px] sm:text-xs tracking-wider uppercase hover:bg-[#00cc52] hover:shadow-[0_0_20px_rgba(0,255,102,0.4)] transition-all"
          >
            Apply Now
          </a>

        </div>
      </div>

      <style>{`
        .hover-halo { position: relative; }
        .hover-halo::after {
          content: "";
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          opacity: 0;
          transition: opacity 0.25s, transform 0.25s;
          box-shadow: 0 0 15px rgba(0, 255, 102, 0.3);
        }
        .hover-halo:hover::after { opacity: 1; }
        .tooltip {
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.2s, transform 0.2s;
        }
        .group:hover .tooltip {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}

function DockIcon({
  icon: Icon,
  label,
  href,
  isExternal
}: {
  icon: any;
  label: string;
  href: string;
  isExternal?: boolean;
}) {
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="hover-halo group relative grid h-10 w-10 min-w-[36px] min-h-[36px] flex-shrink-0 place-items-center rounded-full ring-1 ring-white/10 bg-neutral-800/60 backdrop-blur-xl shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:scale-105"
      aria-label={label}
    >
      <Icon className="h-4 w-4 text-white/85 transition-transform duration-200 group-hover:scale-110 group-hover:text-[#00FF66]" strokeWidth={2} />

      <span className="tooltip pointer-events-none absolute -bottom-8 text-[10px] font-medium tracking-wide text-white/80 bg-neutral-900 border border-white/10 px-2 py-0.5 rounded-md whitespace-nowrap shadow-md">
        {label}
      </span>
    </a>
  );
}
