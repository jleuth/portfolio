import Link from "next/link";

interface ContentPageProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function ContentPage({ title, subtitle, children }: ContentPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Retro Browser Window */}
        <div className="bg-gray-800 rounded-t-2xl p-3 flex items-center gap-2 shadow-2xl">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 bg-gray-700 rounded px-3 py-1 text-xs text-gray-300 font-mono">
            jleuthardt.com/{title.toLowerCase().replace(/\s+/g, '-')}
          </div>
        </div>

        <div className="bg-white rounded-b-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <header className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 md:p-12">
            <Link
              href="/"
              className="inline-flex items-center font-mono text-sm text-white/90 hover:text-white transition-colors mb-6 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full"
            >
              ← back home
            </Link>
            <h1 className="font-mono text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-lg">
              {title}
            </h1>
            {subtitle && (
              <p className="font-karla text-xl text-white/90 leading-relaxed">
                {subtitle}
              </p>
            )}
          </header>

          {/* Content */}
          <main className="px-6 md:px-12 py-12">
            <article className="prose prose-lg max-w-none">
              {children}
            </article>
          </main>

          {/* Footer */}
          <footer className="border-t-2 border-gray-200 px-6 md:px-12 py-8 bg-gradient-to-r from-purple-50 to-pink-50">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <Link
                href="/"
                className="font-mono text-sm font-bold text-purple-600 hover:text-purple-800 transition-colors bg-white px-4 py-2 rounded-full shadow hover:shadow-lg"
              >
                ← Back to Home
              </Link>
              <p className="font-mono text-sm text-gray-600">
                © Jacob Leuthardt
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}