import ContentPage from "@/components/ContentPage";

export default function FriendsPage() {
  return (
    <ContentPage
      title="My Friends"
      subtitle="Cool people doing cool things"
    >
      <div className="font-karla text-gray-900 space-y-8">
        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Friends & Colleagues</h2>
          <p className="text-lg leading-relaxed mb-8">
            Here are some amazing people I&apos;m lucky to know. Check out their work!
          </p>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 className="font-instrument text-2xl mb-3 flex items-center gap-2">
                <a
                  href="https://halia.codes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-[#4633FF] transition-colors"
                >
                  Halia
                </a>
                <span className="text-red-500">❤️</span>
              </h3>
              <a
                href="https://halia.codes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4633FF] hover:underline text-lg"
              >
                halia.codes →
              </a>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 className="font-instrument text-2xl mb-3">
                <a
                  href="https://github.com/mrdapoyo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-[#4633FF] transition-colors"
                >
                  Luca
                </a>
              </h3>
              <a
                href="https://github.com/mrdapoyo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4633FF] hover:underline text-lg"
              >
                github.com/mrdapoyo →
              </a>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 className="font-instrument text-2xl mb-3">
                <a
                  href="https://saahild.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-[#4633FF] transition-colors"
                >
                  Neon
                </a>
              </h3>
              <a
                href="https://saahild.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4633FF] hover:underline text-lg"
              >
                saahild.com →
              </a>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
              <h3 className="font-instrument text-2xl mb-3">
                <a
                  href="https://github.com/boykisserchan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-[#4633FF] transition-colors"
                >
                  Sahana
                </a>
              </h3>
              <a
                href="https://github.com/boykisserchan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4633FF] hover:underline text-lg"
              >
                github.com/boykisserchan →
              </a>
            </div>
          </div>
        </section>
      </div>
    </ContentPage>
  );
}
