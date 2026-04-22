"use client";

import React from "react";
import {
  IoPersonOutline,
  IoPeopleOutline,
  IoSchoolOutline,
  IoShieldCheckmarkOutline,
} from "react-icons/io5";

export type GradientMenuItem = {
  title: string;
  href: string;
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
};

export const navMenuItems: GradientMenuItem[] = [
  {
    title: "About",
    href: "#about",
    icon: <IoPersonOutline />,
    gradientFrom: "#a955ff",
    gradientTo: "#ea51ff",
  },
  {
    title: "Community",
    href: "#community",
    icon: <IoPeopleOutline />,
    gradientFrom: "#56CCF2",
    gradientTo: "#2F80ED",
  },
  {
    title: "Mentorship",
    href: "#mentorship",
    icon: <IoSchoolOutline />,
    gradientFrom: "#FF9966",
    gradientTo: "#FF5E62",
  },
  {
    title: "Guarantee",
    href: "#guarantee",
    icon: <IoShieldCheckmarkOutline />,
    gradientFrom: "#80FF72",
    gradientTo: "#7EE8FA",
  },
];

export default function GradientNavMenu({
  items = navMenuItems,
}: {
  items?: GradientMenuItem[];
}) {
  return (
    <ul className="flex gap-2.5">
      {items.map(({ title, href, icon, gradientFrom, gradientTo }, idx) => (
        <li key={idx}>
          <a
            href={href}
            style={
              {
                "--gradient-from": gradientFrom,
                "--gradient-to": gradientTo,
              } as React.CSSProperties
            }
            className="relative flex w-[42px] h-[42px] overflow-hidden bg-zinc-900 border border-zinc-700/60 rounded-full items-center justify-center transition-all duration-500 hover:w-[128px] hover:border-transparent group cursor-pointer"
          >
            {/* Gradient fill on hover */}
            <span className="absolute inset-0 rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {/* Icon — fades out on hover */}
            <span className="relative z-10 flex items-center justify-center transition-all duration-300 group-hover:scale-0 group-hover:opacity-0">
              <span className="text-[1.1rem] text-zinc-400">{icon}</span>
            </span>

            {/* Label — fades in on hover */}
            <span className="absolute z-10 text-white uppercase tracking-wider text-[0.6rem] font-heading font-bold whitespace-nowrap transition-all duration-300 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 delay-100">
              {title}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
