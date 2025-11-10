import ContentPage from "@/components/ContentPage";

export default function FriendsPage() {
  const friends = [
    { name: "Halia", url: "https://halia.codes", special: true, emoji: "❤️", color: "from-red-400 to-pink-500" },
    { name: "Luca", url: "https://github.com/mrdapoyo", emoji: "🎮", color: "from-blue-400 to-cyan-500" },
    { name: "Neon", url: "https://saahild.com", emoji: "💫", color: "from-purple-400 to-pink-500" },
    { name: "Sahana", url: "https://github.com/boykisserchan", emoji: "🌸", color: "from-pink-400 to-rose-500" },
    { name: "Joaquin", url: "https://jschere.com", emoji: "🎨", color: "from-orange-400 to-red-500" },
    { name: "Fox", url: "https://foxmoss.com", emoji: "🦊", color: "from-amber-400 to-orange-500" },
  ];

  return (
    <ContentPage
      title="My Friends"
      subtitle="Cool people doing cool things"
    >
      <div className="font-karla text-gray-900 space-y-8">
        <section>
          <p className="text-lg leading-relaxed mb-8 font-mono bg-yellow-100 p-4 rounded-xl border-2 border-yellow-300">
            These are some genuinely rad humans. Go check out their work!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {friends.map((friend) => (
              <a
                key={friend.name}
                href={friend.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className={`bg-gradient-to-br ${friend.color} p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 hover:rotate-1`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-4xl">{friend.emoji}</span>
                    <h3 className="font-mono text-2xl font-bold text-white flex items-center gap-2">
                      {friend.name}
                      {friend.special && <span className="animate-pulse">❤️</span>}
                    </h3>
                  </div>
                  <div className="font-mono text-white/90 text-sm break-all group-hover:underline">
                    {friend.url.replace('https://', '')} →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </ContentPage>
  );
}
