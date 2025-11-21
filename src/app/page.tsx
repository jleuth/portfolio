"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const cards = [
    { 
      label: "Fr", 
      name: "Frantic",
      info: "Frantic - An I.T. infra management company I founded and ran",
      slug: "frantic",
      icon: "/frantic-icon.svg"
    },
    { 
      label: "Fu", 
      name: "Future Computing",
      info: "Future Computing - Nonprofit organization I currently run",
      slug: "future-computing",
      icon: "/future-computing-icon.svg"
    },
    { 
      label: "Fi", 
      name: "Film",
      info: "Film - My film projects and creative art work",
      slug: "film",
      icon: "/film-icon.svg"
    },
    { 
      label: "Yt", 
      name: "YouTube",
      info: "YouTube - My YouTube channel and video content",
      slug: "youtube",
      icon: "/youtube-icon.svg"
    },
    { 
      label: "We", 
      name: "Web",
      info: "Web - Other web projects and development work I've done",
      slug: "web",
      icon: "/web-icon.svg"
    },
  ];

  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
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
        <div className={`font-instrument mb-4 ${size === "large" ? "text-3xl" : "text-2xl"}`}>{card.name}</div>
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

  const ContactModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    if (!isOpen) return null;

    return (
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-6 z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <h2 className="font-instrument text-3xl mb-2 text-black">Get in Touch</h2>
          <p className="font-karla text-gray-600 mb-8">Let&apos;s connect! Here&apos;s where you can find me:</p>

          <div className="space-y-5">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/leuth/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
            >
              <div className="w-12 h-12 bg-[#0A66C2] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="font-karla font-semibold text-black group-hover:text-[#0A66C2] transition-colors">LinkedIn</div>
                <div className="font-karla text-sm text-gray-600">Professional network</div>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-400 group-hover:text-[#0A66C2] transition-colors">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:me@jleuthardt.com"
              className="flex items-center gap-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
            >
              <div className="w-12 h-12 bg-[#4633FF] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="font-karla font-semibold text-black group-hover:text-[#4633FF] transition-colors">Email</div>
                <div className="font-karla text-sm text-gray-600">me@jleuthardt.com</div>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-400 group-hover:text-[#4633FF] transition-colors">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            {/* X/Twitter */}
            <a
              href="https://x.com/dadsgone0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
            >
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="font-karla font-semibold text-black group-hover:text-black transition-colors">X / Twitter</div>
                <div className="font-karla text-sm text-gray-600">@dadsgone0 (unhinged)</div>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-400 group-hover:text-black transition-colors">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            {/* 88x31 Buttons */}
            <a
              href="https://drive.google.com/drive/folders/1KBzmMkQ3K7YZYjcqYh91pDA1NKBgN67y?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
            >
              <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <rect x="3" y="3" width="7" height="7" rx="1"/>
                  <rect x="14" y="3" width="7" height="7" rx="1"/>
                  <rect x="3" y="14" width="7" height="7" rx="1"/>
                  <rect x="14" y="14" width="7" height="7" rx="1"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="font-karla font-semibold text-black group-hover:text-[#FF6B35] transition-colors">88x31 Buttons</div>
                <div className="font-karla text-sm text-gray-600">Retro web buttons</div>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-400 group-hover:text-[#FF6B35] transition-colors">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    );
  };

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
                  <div className="w-28 h-28 flex items-center justify-center">
                    <Image 
                      src={card.icon} 
                      alt={`${card.label} icon`} 
                      width={112} 
                      height={112} 
                      className="w-28 h-28 object-contain"
                    />
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
                  <div className="w-24 h-24 flex items-center justify-center">
                    <Image 
                      src={card.icon} 
                      alt={`${card.label} icon`} 
                      width={96} 
                      height={96} 
                      className="w-24 h-24 object-contain"
                    />
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
                  <div className="w-24 h-24 flex items-center justify-center">
                    <Image 
                      src={cards[4].icon} 
                      alt={`${cards[4].label} icon`} 
                      width={96} 
                      height={96} 
                      className="w-24 h-24 object-contain"
                    />
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
                  <div className="w-24 h-24 flex items-center justify-center">
                    <Image 
                      src={card.icon} 
                      alt={`${card.label} icon`} 
                      width={96} 
                      height={96} 
                      className="w-24 h-24 object-contain"
                    />
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
          <Link href="/friends" className="font-karla text-xl font-normal bg-black text-white px-12 py-5 rounded-full hover:bg-gray-800 transition-colors">
            My Friends
          </Link>
          <button
            onClick={() => setShowContactModal(true)}
            className="font-karla text-xl font-normal bg-[#4633FF] text-white px-12 py-5 rounded-full hover:bg-[#3822FF] transition-colors flex items-center gap-3"
          >
            Contact
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M3 7l9 6 9-6" />
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Contact Modal */}
      <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
    </main>
  );
}