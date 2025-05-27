import ContentPage from "@/components/ContentPage";

export default function WebPage() {
  return (
    <ContentPage 
      title="Web"
      subtitle="Experimental projects and creative technology"
    >
      <div className="font-karla text-gray-900 space-y-8">
        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Overview</h2>
          <p className="text-lg leading-relaxed mb-6">
            Some of my projects don't fit into a category, and they end up here. A smorgasbord of 
            really cool, barely functional, incredibly experimental projects that were a lot of fun 
            to make.
          </p>
          <p className="text-lg leading-relaxed">
            This is a non-exhaustive list (that will not be updated, I clearly won't remember) of 
            various web projects that showcase different aspects of my interests in technology, 
            research, and creative problem-solving.
          </p>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Featured Projects</h2>
          
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-instrument text-2xl mb-3">The Great AI Debate</h3>
              <p className="text-lg leading-relaxed mb-4">
                A research project and weeklong event where a bunch of LLMs duke it out gladiator-style 
                over hundreds of different topics and categories which thousands watch then have at it. 
                The idea is to see how LLMs handle debating each other, and biases in their training.
              </p>
              <a 
                href="https://greatdebate.live" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                greatdebate.live
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-instrument text-2xl mb-3">SuperWallClock</h3>
              <p className="text-lg leading-relaxed">
                A Spotify-enabled wall clock I made with an old monitor and a Pi Zero. It was entirely 
                client-based, so it never relied on a central server to call back to. It showed local 
                weather, currently playing song, UptimeRobot status of my various sites, and, of course, 
                the time!
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-instrument text-2xl mb-3">DIY SlimeVR Trackers</h3>
              <p className="text-lg leading-relaxed">
                I designed and soldered together a full set of open-source SlimeVR trackers. Due to 
                AliExpress' absolutely nonexistent quality assurance, every IMU I got was absolutely 
                destroyed by drift, and never worked right. But, I got to learn a lot about CAD (and 
                I think this was my first full soldering project).
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-instrument text-2xl mb-3">Sparse Fusion</h3>
              <p className="text-lg leading-relaxed">
                This research project was a concept for a lightweight Mixture of Experts architecture 
                designed to run high-quality AI on low-resource devices. It used a classifier to route 
                inputs to small, specialized LoRA adapters, then fused their outputs for intelligent, 
                domain-aware responses, all without ever touching a GPU cluster. I never built it when 
                I finished the research and design, but the idea still reflects my obsession with making 
                powerful models run stupidly well on everyday hardware.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Project Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-instrument text-xl mb-3">Research & AI</h3>
              <ul className="space-y-2">
                <li>• LLM behavior analysis</li>
                <li>• Efficient AI architectures</li>
                <li>• Edge computing solutions</li>
                <li>• Machine learning experiments</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-instrument text-xl mb-3">Hardware & IoT</h3>
              <ul className="space-y-2">
                <li>• Raspberry Pi projects</li>
                <li>• Custom hardware builds</li>
                <li>• Soldering and electronics</li>
                <li>• DIY motion tracking</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Project Philosophy</h2>
          <p className="text-lg leading-relaxed mb-6">
            These projects represent pure experimentation and learning. They're not polished products 
            or commercial ventures, but rather explorations of interesting technical challenges and 
            creative ideas.
          </p>
          <p className="text-lg leading-relaxed">
            The "barely functional" nature is intentional - these are proof-of-concepts and learning 
            exercises that prioritize exploration over perfection. Each project taught me something 
            new or satisfied a particular curiosity.
          </p>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Technical Interests</h2>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>Edge AI:</strong> Running powerful models on resource-constrained hardware</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>Creative Hardware:</strong> Repurposing old technology for new applications</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>Distributed Systems:</strong> Client-side applications that don't rely on servers</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>Open Source:</strong> Building on and contributing to community projects</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>Research Implementation:</strong> Turning theoretical concepts into working prototypes</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">The Joy of Experimentation</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-lg leading-relaxed mb-4">
              These projects capture the pure joy of building things just to see if they can be built. 
              They're messy, incomplete, and sometimes frustrating, but they represent the kind of 
              curiosity-driven work that keeps technology interesting.
            </p>
            <p className="text-lg leading-relaxed italic">
              "A smorgasbord of really cool, barely functional, incredibly experimental projects that 
              were a lot of fun to make."
            </p>
          </div>
        </section>
      </div>
    </ContentPage>
  );
}