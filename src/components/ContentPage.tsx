import Link from "next/link";

interface ContentPageProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function ContentPage({ title, subtitle, children }: ContentPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link 
            href="/"
            className="inline-flex items-center font-karla text-sm text-gray-600 hover:text-black transition-colors mb-6"
          >
            ← Back to Portfolio
          </Link>
          <h1 className="font-instrument text-5xl md:text-6xl font-normal text-black mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="font-karla text-xl text-gray-600 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <article className="prose prose-lg max-w-none">
          {children}
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-20">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center">
            <Link 
              href="/"
              className="font-karla text-sm text-gray-600 hover:text-black transition-colors"
            >
              ← Back to Portfolio
            </Link>
            <p className="font-karla text-sm text-gray-500">
              Jacob Leuthardt
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}