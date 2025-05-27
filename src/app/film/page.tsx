import ContentPage from "@/components/ContentPage";

export default function FilmPage() {
  return (
    <ContentPage 
      title="Film"
      subtitle="Creative projects and visual storytelling"
    >
      <div className="font-karla text-gray-900 space-y-8">
        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Overview</h2>
          <p className="text-lg leading-relaxed mb-6">
            I occasionally do film and design projects when I get a creative burst. Film, design, and 
            other art is how I make sense of the world. Where work fails, I turn to writing, designing, 
            and storytelling.
          </p>
          <p className="text-lg leading-relaxed">
            Art is the one place where I get to be as inconsistent, imperfect, and ugly as I want to be, 
            and that's what makes it so fun. A lot of that work blends pretty visuals with introspection, 
            and express some sort of larger meaning. Some pieces are quiet, some are chaotic, and most 
            live in-between.
          </p>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Creative Philosophy</h2>
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
          <h2 className="font-instrument text-3xl text-black mb-6">Types of Work</h2>
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
          <h2 className="font-instrument text-3xl text-black mb-6">The Process</h2>
          <p className="text-lg leading-relaxed mb-6">
            Creative work happens when inspiration strikes, not on a schedule. This organic approach 
            allows for authentic expression without the constraints of deadlines or client expectations. 
            The freedom to create without external pressure is what makes this work so valuable to me.
          </p>
          <p className="text-lg leading-relaxed">
            Most projects remain private because they're deeply personal explorations rather than 
            commercial endeavors. The act of creating is often more important than sharing the final 
            result.
          </p>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Why Art Matters</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-lg leading-relaxed mb-4">
              Art serves as a counterbalance to the technical and business-focused aspects of my work. 
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