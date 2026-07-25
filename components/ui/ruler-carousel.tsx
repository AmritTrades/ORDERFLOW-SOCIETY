"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Rewind, FastForward } from "lucide-react";

export interface CarouselItem {
  id: number;
  title: string;
  link?: string;
  badge?: string;
  description?: string;
}

const createInfiniteItems = (originalItems: CarouselItem[]) => {
  const items = [];
  for (let i = 0; i < 3; i++) {
    originalItems.forEach((item, index) => {
      items.push({
        ...item,
        id: `${i}-${item.id}`,
        originalIndex: index,
      });
    });
  }
  return items;
};

const RulerLines = ({
  top = true,
  totalLines = 100,
}: {
  top?: boolean;
  totalLines?: number;
}) => {
  const lines = [];
  const lineSpacing = 100 / (totalLines - 1);

  for (let i = 0; i < totalLines; i++) {
    const isFifth = i % 5 === 0;
    const isCenter = i === Math.floor(totalLines / 2);

    let height = "h-3";
    let color = "bg-zinc-700";

    if (isCenter) {
      height = "h-8";
      color = "bg-[#00FF66]";
    } else if (isFifth) {
      height = "h-4";
      color = "bg-zinc-400";
    }

    const positionClass = top ? "" : "bottom-0";

    lines.push(
      <div
        key={i}
        className={`absolute w-0.5 ${height} ${color} ${positionClass}`}
        style={{ left: `${i * lineSpacing}%` }}
      />
    );
  }

  return <div className="relative w-full h-8 px-4">{lines}</div>;
};

export function RulerCarousel({
  originalItems,
}: {
  originalItems: CarouselItem[];
}) {
  const infiniteItems = createInfiniteItems(originalItems);
  const itemsPerSet = originalItems.length;

  const [activeIndex, setActiveIndex] = useState(itemsPerSet);
  const [isResetting, setIsResetting] = useState(false);
  const previousIndexRef = useRef(itemsPerSet);

  const activeOriginalItem = originalItems[activeIndex % itemsPerSet];

  const handleItemClick = (newIndex: number) => {
    if (isResetting) return;

    const targetOriginalIndex = newIndex % itemsPerSet;

    const possibleIndices = [
      targetOriginalIndex,
      targetOriginalIndex + itemsPerSet,
      targetOriginalIndex + itemsPerSet * 2,
    ];

    let closestIndex = possibleIndices[0];
    let smallestDistance = Math.abs(possibleIndices[0] - activeIndex);

    for (const index of possibleIndices) {
      const distance = Math.abs(index - activeIndex);
      if (distance < smallestDistance) {
        smallestDistance = distance;
        closestIndex = index;
      }
    }

    previousIndexRef.current = activeIndex;
    setActiveIndex(closestIndex);
  };

  const handlePrevious = () => {
    if (isResetting) return;
    setActiveIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (isResetting) return;
    setActiveIndex((prev) => prev + 1);
  };

  useEffect(() => {
    if (isResetting) return;

    if (activeIndex < itemsPerSet) {
      setIsResetting(true);
      setTimeout(() => {
        setActiveIndex(activeIndex + itemsPerSet);
        setIsResetting(false);
      }, 0);
    } else if (activeIndex >= itemsPerSet * 2) {
      setIsResetting(true);
      setTimeout(() => {
        setActiveIndex(activeIndex - itemsPerSet);
        setIsResetting(false);
      }, 0);
    }
  }, [activeIndex, itemsPerSet, isResetting]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isResetting) return;

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveIndex((prev) => prev - 1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        setActiveIndex((prev) => prev + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isResetting]);

  // Item pitch = 400px button width + 100px gap. The track is centered by
  // its flex parent at x=0, so to bring `activeIndex` to the viewport
  // center we offset by (track's own center) − (active item's center),
  // computed from the actual infinite-item count rather than a fixed guess.
  const ITEM_WIDTH = 400;
  const ITEM_GAP = 100;
  const ITEM_PITCH = ITEM_WIDTH + ITEM_GAP;
  const trackWidth = infiniteItems.length * ITEM_PITCH - ITEM_GAP;
  const targetX = trackWidth / 2 - activeIndex * ITEM_PITCH - ITEM_WIDTH / 2;

  const currentPage = (activeIndex % itemsPerSet) + 1;
  const totalPages = itemsPerSet;

  return (
    <div className="w-full py-12 flex flex-col items-center justify-center bg-black text-white">
      <div className="w-full h-[180px] flex flex-col justify-center relative">
        <div className="flex items-center justify-center">
          <RulerLines top />
        </div>
        <div className="flex items-center justify-center w-full h-full relative overflow-hidden">
          <motion.div
            className="flex items-center gap-[100px]"
            animate={{
              x: targetX,
            }}
            transition={
              isResetting
                ? { duration: 0 }
                : {
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    mass: 1,
                  }
            }
          >
            {infiniteItems.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <motion.button
                  key={item.id}
                  onClick={() => handleItemClick(index)}
                  className={`text-3xl md:text-5xl font-extrabold uppercase tracking-wider cursor-pointer flex items-center justify-center ${
                    isActive
                      ? "text-[#00FF66] drop-shadow-[0_0_20px_rgba(0,255,102,0.5)]"
                      : "text-zinc-600 hover:text-zinc-400"
                  }`}
                  animate={{
                    scale: isActive ? 1 : 0.75,
                    opacity: isActive ? 1 : 0.3,
                  }}
                  transition={
                    isResetting
                      ? { duration: 0 }
                      : {
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        }
                  }
                  style={{
                    width: "400px",
                  }}
                >
                  {item.title}
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        <div className="flex items-center justify-center">
          <RulerLines top={false} />
        </div>
      </div>

      {activeOriginalItem && (
        <motion.div
          key={activeOriginalItem.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 flex flex-col items-center text-center max-w-lg px-6"
        >
          {activeOriginalItem.badge && (
            <span className="text-xs uppercase tracking-widest text-[#00FF66] bg-[#00FF66]/10 px-3 py-1 rounded-full border border-[#00FF66]/20 mb-3">
              {activeOriginalItem.badge}
            </span>
          )}
          <p className="text-zinc-400 text-sm md:text-base mb-4">
            {activeOriginalItem.description}
          </p>
          {activeOriginalItem.link && (
            <a
              href={activeOriginalItem.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#00FF66] text-black font-extrabold text-sm hover:bg-[#00cc52] hover:shadow-[0_0_20px_rgba(0,255,102,0.4)] transition-all"
            >
              Access Tool →
            </a>
          )}
        </motion.div>
      )}

      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={handlePrevious}
          disabled={isResetting}
          className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-300 transition-all cursor-pointer"
          aria-label="Previous item"
        >
          <Rewind className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800">
          <span className="text-sm font-bold text-white">{currentPage}</span>
          <span className="text-sm text-zinc-600">/</span>
          <span className="text-sm font-medium text-zinc-400">
            {totalPages}
          </span>
        </div>

        <button
          onClick={handleNext}
          disabled={isResetting}
          className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-300 transition-all cursor-pointer"
          aria-label="Next item"
        >
          <FastForward className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
