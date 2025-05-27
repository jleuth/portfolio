import ContentPage from "@/components/ContentPage";

export default function YouTubePage() {
  return (
    <ContentPage 
      title="YouTube"
      subtitle="My time capsule and experimental content"
    >
      <div className="font-karla text-gray-900 space-y-8">
        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Overview</h2>
          <p className="text-lg leading-relaxed mb-6">
            My YouTube channel is my time capsule. I don't post often, or for views, or for recognition. 
            It's meant to be for me to look back on, and remember the times from before. My Iowa roadtrip, 
            class video projects, that time I made a SaaS product in 3 weeks or something, it's both 
            fascinating to look back on, and disgusting to look at 12 year old me.
          </p>
          <p className="text-lg leading-relaxed">
            If you're looking for something interesting, you probably won't find it here. But if you 
            wanna learn more about what the hell goes through my head, or wanna see weird, experimental 
            content, have at it.
          </p>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Content Philosophy</h2>
          <p className="text-lg leading-relaxed mb-6">
            This isn't a traditional YouTube channel focused on growth, monetization, or building an 
            audience. Instead, it serves as a personal archive of moments, projects, and thoughts that 
            I want to preserve for future reflection.
          </p>
          <p className="text-lg leading-relaxed">
            The content is deliberately unpolished and authentic. It's more about capturing genuine 
            moments and experiences rather than creating perfectly produced videos for mass consumption.
          </p>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Types of Content</h2>
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
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Time Capsule Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-instrument text-xl mb-3">For Future Me</h3>
              <ul className="space-y-2">
                <li>• Preserved memories and experiences</li>
                <li>• Documentation of personal growth</li>
                <li>• Record of creative and technical evolution</li>
                <li>• Nostalgia and reflection material</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-instrument text-xl mb-3">Raw & Authentic</h3>
              <ul className="space-y-2">
                <li>• Unfiltered personality and thoughts</li>
                <li>• Minimal editing and production</li>
                <li>• Genuine moments without performance</li>
                <li>• Evolution of perspective over time</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">What to Expect</h2>
          <p className="text-lg leading-relaxed mb-6">
            The content is inconsistent by design. Some videos might be insightful, others might be 
            completely random or embarrassing. That's the point - it's a real, unfiltered look at 
            different moments in time without the pressure to maintain a consistent brand or image.
          </p>
          <p className="text-lg leading-relaxed">
            You might find technical tutorials mixed with travel vlogs, creative experiments alongside 
            serious project documentation. The only constant is that everything is genuine and 
            unpolished.
          </p>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Visit My Channel</h2>
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
          <h2 className="font-instrument text-3xl text-black mb-6">A Personal Archive</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-lg leading-relaxed italic text-gray-700">
              "It's both fascinating to look back on, and disgusting to look at 12 year old me."
            </p>
            <p className="text-base mt-4">
              This channel represents growth, cringe, creativity, and authenticity all rolled into one. 
              It's not for everyone, but it's completely me.
            </p>
          </div>
        </section>
      </div>
    </ContentPage>
  );
}