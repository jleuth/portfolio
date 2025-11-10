import ContentPage from "@/components/ContentPage";

export default function VideosPage() {
  return (
    <ContentPage
      title="Videos"
      subtitle="Creative projects, YouTube content, and visual storytelling"
    >
      <div className="font-karla text-gray-900 space-y-8">
        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Overview</h2>
          <p className="text-lg leading-relaxed mb-6">
            I create video content in two main forms: artistic film projects when I get a creative burst,
            and YouTube videos that serve as my personal time capsule. Film and design is how I make sense
            of the world. Where work fails, I turn to writing, designing, and storytelling.
          </p>
          <p className="text-lg leading-relaxed">
            My YouTube channel isn't about views or recognition - it's meant for me to look back on and
            remember the times from before. My Iowa roadtrip, class video projects, that time I made a SaaS
            product in 3 weeks, it's both fascinating to look back on, and disgusting to look at 12 year old me.
          </p>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Film & Creative Work</h2>
          <p className="text-lg leading-relaxed mb-6">
            Art is the one place where I get to be as inconsistent, imperfect, and ugly as I want to be,
            and that's what makes it so fun. A lot of that work blends pretty visuals with introspection,
            and expresses some sort of larger meaning. Some pieces are quiet, some are chaotic, and most
            live in-between.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            I find art to be a very intimate thing, so 99% of what I do never gets released, and that's
            alright. Sometimes it's posters, sometimes it's album covers, sometimes it's political jabs,
            sometimes it's UI/UX mockups for a totally fake thing.
          </p>
          <p className="text-lg leading-relaxed">
            It's more than side-work, it's part of my thought process. Never scheduled. Always bouncing
            around. Art allows me to explore ideas and emotions that don't fit into the structured world
            of technology and business.
          </p>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Types of Content</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-instrument text-2xl text-black mb-3">Film & Design</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="text-2xl mr-3">•</span>
                  <span><strong>Poster Design:</strong> Visual communication and artistic expression through print media</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">•</span>
                  <span><strong>Album Covers:</strong> Music-inspired artwork that captures sound in visual form</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">•</span>
                  <span><strong>Political Commentary:</strong> Visual statements on current events and social issues</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">•</span>
                  <span><strong>UI/UX Mockups:</strong> Interface designs for imaginary products and concepts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">•</span>
                  <span><strong>Film Projects:</strong> Video content that blends narrative with visual experimentation</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-instrument text-2xl text-black mb-3">YouTube Content</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="text-2xl mr-3">•</span>
                  <span><strong>Travel Documentation:</strong> Road trips and adventures captured as they happen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">•</span>
                  <span><strong>Class Projects:</strong> Academic work and creative assignments from school</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">•</span>
                  <span><strong>Development Sprints:</strong> Building products in short timeframes, like SaaS in 3 weeks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">•</span>
                  <span><strong>Experimental Content:</strong> Weird, creative, and unconventional video ideas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">•</span>
                  <span><strong>Personal Reflections:</strong> Thoughts and insights from different periods of life</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Creative Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-instrument text-xl mb-3">Artistic Freedom</h3>
              <ul className="space-y-2">
                <li>• No schedules or deadlines</li>
                <li>• Embrace imperfection and inconsistency</li>
                <li>• Personal expression over commercial appeal</li>
                <li>• Most work remains private</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-instrument text-xl mb-3">Time Capsule Approach</h3>
              <ul className="space-y-2">
                <li>• Documentation for future reflection</li>
                <li>• Raw and authentic moments</li>
                <li>• Not focused on views or growth</li>
                <li>• Capturing genuine experiences</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Creative Spectrum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-instrument text-xl mb-3">Quiet Pieces</h3>
              <ul className="space-y-2">
                <li>• Minimalist compositions</li>
                <li>• Subtle emotional narratives</li>
                <li>• Contemplative visuals</li>
                <li>• Introspective themes</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-instrument text-xl mb-3">Chaotic Pieces</h3>
              <ul className="space-y-2">
                <li>• Bold visual statements</li>
                <li>• Experimental techniques</li>
                <li>• High-energy compositions</li>
                <li>• Provocative messaging</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Visit My YouTube Channel</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-instrument text-xl mb-3">YouTube Channel</h3>
            <p className="text-base mb-4">
              Explore weird, experimental content and glimpses into what goes through my head.
            </p>
            <a
              href="https://www.youtube.com/@jleuthardt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-red-600 hover:text-red-800 transition-colors"
            >
              @jleuthardt
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Why Video Matters</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-lg leading-relaxed mb-4">
              Video serves as a counterbalance to the technical and business-focused aspects of my work.
              It's where I can embrace imperfection, explore emotions, and communicate ideas that don't
              fit into code or spreadsheets.
            </p>
            <p className="text-lg leading-relaxed italic">
              "Art is the one place where I get to be as inconsistent, imperfect, and ugly as I want
              to be, and that's what makes it so fun."
            </p>
          </div>
        </section>
      </div>
    </ContentPage>
  );
}
