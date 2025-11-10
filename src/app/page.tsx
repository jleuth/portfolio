"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const sections = [
    {
      emoji: "🔧",
      name: "Frantic",
      desc: "I.T. infrastructure company I founded",
      slug: "frantic",
      color: "from-orange-400 to-red-500"
    },
    {
      emoji: "🚀",
      name: "Future Computing",
      desc: "Nonprofit I run (we do cool shit)",
      slug: "future-computing",
      color: "from-blue-400 to-purple-500"
    },
    {
      emoji: "🎬",
      name: "Film",
      desc: "My creative/artistic side",
      slug: "film",
      color: "from-pink-400 to-rose-500"
    },
    {
      emoji: "📺",
      name: "YouTube",
      desc: "Video content & stuff",
      slug: "youtube",
      color: "from-red-500 to-pink-500"
    },
    {
      emoji: "🌐",
      name: "Web Projects",
      desc: "Other things I've built",
      slug: "web",
      color: "from-green-400 to-teal-500"
    },
  ];


  const ContactModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
    if (!isOpen) return null;

    return (
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          exit={{ scale: 0.8, opacity: 0, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-3xl p-1 max-w-md w-full shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-white rounded-[22px] p-8">
            <button
              onClick={onClose}
              className="float-right -mt-2 -mr-2 w-8 h-8 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-bold"
            >
              ×
            </button>

            <h2 className="font-mono text-3xl mb-2 text-black font-bold">{'// CONTACT ME'}</h2>
            <p className="font-karla text-gray-700 mb-6">hit me up wherever:</p>

            <div className="space-y-3">
              <a
                href="https://www.linkedin.com/in/leuth/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-xl transition-all transform hover:scale-105 text-white font-bold"
              >
                🔗 LinkedIn
              </a>

              <a
                href="mailto:me@jleuthardt.com"
                className="block p-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-xl transition-all transform hover:scale-105 text-white font-bold"
              >
                📧 me@jleuthardt.com
              </a>

              <a
                href="https://x.com/dadsgone0"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-gray-800 rounded-xl transition-all transform hover:scale-105 text-white font-bold"
              >
                𝕏 @dadsgone0 (unhinged)
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4 md:p-8">
      {/* Retro Browser Window */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-800 rounded-t-2xl p-3 flex items-center gap-2 shadow-2xl">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 bg-gray-700 rounded px-3 py-1 text-xs text-gray-300 font-mono">
            jleuthardt.com ~ {currentTime}
          </div>
        </div>

        <div className="bg-white rounded-b-2xl shadow-2xl overflow-hidden">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-8 md:p-16 text-center relative overflow-hidden">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 rounded-full opacity-20 blur-3xl"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-0 left-0 w-64 h-64 bg-pink-300 rounded-full opacity-20 blur-3xl"
            />

            <motion.h1
              className="font-mono text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 drop-shadow-lg relative z-10"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              JACOB LEUTHARDT
            </motion.h1>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="relative z-10"
            >
              <p className="font-karla text-xl md:text-2xl text-white/90 mb-2">
                builder • engineer • creative
              </p>
              <p className="font-karla text-base md:text-lg text-white/80 max-w-2xl mx-auto">
                Two-time founder, I.T. infrastructure engineer (CompTIA A+ & AWS certified),
                also making films and other weird stuff
              </p>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="p-6 md:p-12">
            <h2 className="font-mono text-3xl md:text-4xl font-bold mb-8 text-gray-800 border-b-4 border-purple-500 pb-3 inline-block">
              &gt;&gt; WHAT I DO
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {sections.map((section, i) => (
                <motion.div
                  key={section.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="group"
                >
                  <Link href={`/${section.slug}`}>
                    <div className={`bg-gradient-to-br ${section.color} p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform`}>
                      <div className="text-5xl mb-3">{section.emoji}</div>
                      <h3 className="font-mono text-xl font-bold text-white mb-2">
                        {section.name}
                      </h3>
                      <p className="font-karla text-white/90 text-sm">
                        {section.desc}
                      </p>
                      <div className="mt-4 text-white font-bold group-hover:translate-x-2 transition-transform inline-block">
                        →
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 mb-8">
              <h3 className="font-mono text-2xl font-bold mb-4 text-gray-800">
                &gt;&gt; WANNA CONNECT?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/friends"
                  className="font-karla text-lg font-bold bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 text-center"
                >
                  👥 Check out my friends
                </Link>
                <button
                  onClick={() => setShowContactModal(true)}
                  className="font-karla text-lg font-bold bg-gradient-to-r from-pink-500 to-orange-500 text-white px-8 py-4 rounded-full hover:from-pink-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  📬 Hit me up
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center text-gray-500 text-sm font-mono border-t-2 border-gray-200 pt-6">
              <p>Made with ☕ and probably too much caffeine</p>
              <p className="mt-2">© {new Date().getFullYear()} Jacob Leuthardt. Still figuring it out.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
    </main>
  );
}