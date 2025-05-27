"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const cards = [
    { 
      label: "Fr", 
      info: "Frantic - A creative technology company I founded and ran",
      slug: "frantic"
    },
    { 
      label: "Fu", 
      info: "Future Computing - Nonprofit organization I currently run",
      slug: "future-computing"
    },
    { 
      label: "Fi", 
      info: "Film - My film projects and creative video work",
      slug: "film"
    },
    { 
      label: "Yt", 
      info: "YouTube - My YouTube channel and video content",
      slug: "youtube"
    },
    { 
      label: "We", 
      info: "Web - Other web projects and development work I've done",
      slug: "web"
    },
  ];

  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const hasFlippedCard = flippedCards.size > 0;

  const toggleCard = (index: number) => {
    // Don't allow flipping if another card is already flipped
    if (hasFlippedCard && !flippedCards.has(index)) {
      return;
    }
    
    const newFlippedCards = new Set(flippedCards);
    if (newFlippedCards.has(index)) {
      newFlippedCards.delete(index);
    } else {
      newFlippedCards.add(index);
    }
    setFlippedCards(newFlippedCards);
  };

  const cardVariants = {
    initial: (index: number) => ({
      rotateY: 0,
      rotateX: 2,
      rotateZ: (index - 2) * 3,
      y: Math.abs(index - 2) * 5,
      scale: 1,
    }),
    hover: (index: number) => ({
      rotateY: 0,
      rotateX: -5,
      rotateZ: (index - 2) * 2,
      y: -20,
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    }),
    flipped: (index: number) => ({
      rotateY: 180,
      rotateX: 0,
      rotateZ: 0,
      y: 0,
      scale: 1.2,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    }),
    dimmed: (index: number) => ({
      rotateY: 0,
      rotateX: 2,
      rotateZ: (index - 2) * 3,
      y: Math.abs(index - 2) * 5,
      scale: 0.9,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    }),
  };

  const getCardState = (index: number) => {
    if (flippedCards.has(index)) return "flipped";
    if (hasFlippedCard) return "dimmed";
    return "initial";
  };

  const CardBack = ({ card, size = "large", onClose }: { card: typeof cards[0], size?: "small" | "large", onClose: () => void }) => (
    <div 
      className={`absolute inset-0 bg-gray-900 text-white rounded-lg border border-black/[0.125] shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex flex-col justify-between items-center backface-hidden rotate-y-180 ${size === "large" ? "p-5" : "p-4"}`}
      onClick={(e) => e.stopPropagation()} // Prevent card from closing when clicking on the card itself
    >
      {/* X Close Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-3 right-3 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div className="flex-1 flex flex-col justify-center items-center">
        <div className={`font-instrument mb-4 ${size === "large" ? "text-3xl" : "text-2xl"}`}>{card.label}</div>
        <div className={`font-karla text-center leading-relaxed mb-5 ${size === "large" ? "text-base" : "text-sm"}`}>
          {card.info}
        </div>
      </div>
      <Link 
        href={`/${card.slug}`}
        className={`font-karla bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors ${
          size === "large" ? "text-base px-8 py-3" : "text-sm px-6 py-2"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        Learn More →
      </Link>
    </div>
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-[#F8F8F8] overflow-hidden relative">
      {/* Remove the AnimatePresence and backdrop overlay entirely */}

      {/* Playing Cards */}
      <div className="flex flex-wrap justify-center items-center mb-16 md:mb-20 relative z-10">
        {/* Desktop: Overlapping horizontal row */}
        <div className="hidden md:flex perspective-1000">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="initial"
              animate={getCardState(index)}
              whileHover={!hasFlippedCard ? "hover" : undefined}
              onClick={() => toggleCard(index)}
              className={`w-52 h-72 relative cursor-pointer preserve-3d ${
                hasFlippedCard && !flippedCards.has(index) ? 'opacity-60' : ''
              }`}
              style={{ 
                marginLeft: index > 0 ? '-36px' : '0',
                transformStyle: 'preserve-3d',
                zIndex: flippedCards.has(index) ? 100 : 1,
                position: flippedCards.has(index) ? 'relative' : 'static',
              }}
            >
              {/* Front of card */}
              <div className={`absolute inset-0 bg-white rounded-lg border border-black/[0.125] flex flex-col justify-between p-5 backface-hidden ${
                flippedCards.has(index) 
                  ? 'shadow-[0_20px_40px_rgba(0,0,0,0.3)]' 
                  : 'shadow-[0_4px_8px_rgba(0,0,0,0.1)]'
              }`}>
                <div className="font-mono italic text-xl text-black">
                  {card.label}
                </div>
                
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-28 h-28 bg-gray-200 rounded flex items-center justify-center">
                    <svg width="56" height="56" viewBox="0 0 56 56" className="text-gray-800">
                      <rect width="56" height="56" fill="currentColor" opacity="0.3"/>
                    </svg>
                  </div>
                </div>
                
                <div className="self-end font-mono text-xl italic transform rotate-180 text-black">
                  {card.label}
                </div>
              </div>

              <CardBack card={card} size="large" onClose={() => toggleCard(index)} />
            </motion.div>
          ))}
        </div>

        {/* Tablet: 2-2-1 grid */}
        <div className="hidden sm:grid md:hidden grid-cols-2 gap-8 max-w-lg">
          {cards.slice(0, 4).map((card, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="initial"
              animate={getCardState(index)}
              whileHover={!hasFlippedCard ? "hover" : undefined}
              onClick={() => toggleCard(index)}
              className={`w-40 h-60 relative cursor-pointer preserve-3d ${
                hasFlippedCard && !flippedCards.has(index) ? 'opacity-60' : ''
              }`}
              style={{ 
                transformStyle: 'preserve-3d',
                zIndex: flippedCards.has(index) ? 100 : 1,
                position: flippedCards.has(index) ? 'relative' : 'static',
              }}
            >
              {/* Front */}
              <div className={`absolute inset-0 bg-white rounded-lg border border-black/[0.125] flex flex-col justify-between p-4 backface-hidden ${
                flippedCards.has(index) 
                  ? 'shadow-[0_20px_40px_rgba(0,0,0,0.3)]' 
                  : 'shadow-[0_4px_8px_rgba(0,0,0,0.1)]'
              }`}>
                <div className="font-instrument text-xl text-black">{card.label}</div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gray-200 rounded flex items-center justify-center">
                    <svg width="48" height="48" viewBox="0 0 48 48" className="text-gray-800">
                      <rect width="48" height="48" fill="currentColor" opacity="0.3"/>
                    </svg>
                  </div>
                </div>
                <div className="self-end font-instrument text-lg italic transform rotate-180 text-black">
                  {card.label}
                </div>
              </div>
              <CardBack card={card} size="small" onClose={() => toggleCard(index)} />
            </motion.div>
          ))}
          <div className="col-span-2 flex justify-center">
            <motion.div
              custom={4}
              variants={cardVariants}
              initial="initial"
              animate={getCardState(4)}
              whileHover={!hasFlippedCard ? "hover" : undefined}
              onClick={() => toggleCard(4)}
              className={`w-40 h-60 relative cursor-pointer preserve-3d ${
                hasFlippedCard && !flippedCards.has(4) ? 'opacity-60' : ''
              }`}
              style={{ 
                transformStyle: 'preserve-3d',
                zIndex: flippedCards.has(4) ? 100 : 1,
                position: flippedCards.has(4) ? 'relative' : 'static',
              }}
            >
              {/* Front */}
              <div className={`absolute inset-0 bg-white rounded-lg border border-black/[0.125] flex flex-col justify-between p-4 backface-hidden ${
                flippedCards.has(4) 
                  ? 'shadow-[0_20px_40px_rgba(0,0,0,0.3)]' 
                  : 'shadow-[0_4px_8px_rgba(0,0,0,0.1)]'
              }`}>
                <div className="font-instrument text-xl text-black">{cards[4].label}</div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gray-200 rounded flex items-center justify-center">
                    <svg width="48" height="48" viewBox="0 0 48 48" className="text-gray-800">
                      <rect width="48" height="48" fill="currentColor" opacity="0.3"/>
                    </svg>
                  </div>
                </div>
                <div className="self-end font-instrument text-lg italic transform rotate-180 text-black">
                  {cards[4].label}
                </div>
              </div>
              <CardBack card={cards[4]} size="small" onClose={() => toggleCard(4)} />
            </motion.div>
          </div>
        </div>

        {/* Mobile: Single column */}
        <div className="flex flex-col gap-6 sm:hidden">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="initial"
              animate={getCardState(index)}
              whileHover={!hasFlippedCard ? "hover" : undefined}
              onClick={() => toggleCard(index)}
              className={`w-40 h-60 relative cursor-pointer preserve-3d ${
                hasFlippedCard && !flippedCards.has(index) ? 'opacity-60' : ''
              }`}
              style={{ 
                transformStyle: 'preserve-3d',
                zIndex: flippedCards.has(index) ? 100 : 1,
                position: flippedCards.has(index) ? 'relative' : 'static',
              }}
            >
              {/* Front */}
              <div className={`absolute inset-0 bg-white rounded-lg border border-black/[0.125] flex flex-col justify-between p-4 backface-hidden ${
                flippedCards.has(index) 
                  ? 'shadow-[0_20px_40px_rgba(0,0,0,0.3)]' 
                  : 'shadow-[0_4px_8px_rgba(0,0,0,0.1)]'
              }`}>
                <div className="font-instrument text-xl text-black">{card.label}</div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gray-200 rounded flex items-center justify-center">
                    <svg width="48" height="48" viewBox="0 0 48 48" className="text-gray-800">
                      <rect width="48" height="48" fill="currentColor" opacity="0.3"/>
                    </svg>
                  </div>
                </div>
                <div className="self-end font-instrument text-lg italic transform rotate-180 text-black">
                  {card.label}
                </div>
              </div>
              <CardBack card={card} size="small" onClose={() => toggleCard(index)} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <motion.div 
        className="text-center max-w-5xl relative z-10"
        animate={{
          opacity: hasFlippedCard ? 0.4 : 1,
          scale: hasFlippedCard ? 0.90 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
      >
        {/* H1 Heading */}
        <h1 className="font-instrument italic text-5xl sm:text-6xl md:text-7xl font-normal mb-8 text-black">
          All In.
        </h1>
        
        {/* Paragraph */}
        <p className="font-karla text-lg sm:text-xl md:text-2xl font-semibold max-w-3xl mx-auto mb-10 leading-relaxed text-black">
        Hey, I&apos;m Jacob Leuthardt. I&apos;m a two-time founder, I.T. infrastructure engineer, with CompTIA A+ and AWS Cloud Practitioner certifications.
        </p>
        
        {/* Pill Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="font-karla text-xl font-normal bg-black text-white px-12 py-5 rounded-full hover:bg-gray-800 transition-colors">
            My Friends
          </button>
          <button className="font-karla text-xl font-normal bg-[#4633FF] text-white px-12 py-5 rounded-full hover:bg-[#3822FF] transition-colors flex items-center gap-3">
            Contact
            <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
              <path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l5 2.5 5-2.5V4a1 1 0 0 0-1-1H4zm9 2.383-4.708 2.354L4 5.383V12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5.383z"/>
            </svg>
          </button>
        </div>
      </motion.div>
    </main>
  );
}