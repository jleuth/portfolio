import ContentPage from "@/components/ContentPage";

export default function CodePage() {
  return (
    <ContentPage
      title="Code"
      subtitle="Non-business coding projects and experiments"
    >
      <div className="font-karla text-gray-900 space-y-8">
        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Overview</h2>
          <p className="text-lg leading-relaxed mb-6">
            Beyond my professional work, I enjoy experimenting with code through personal projects
            and technical explorations. These projects allow me to learn new technologies, test ideas,
            and build things just for the fun of it.
          </p>
          <p className="text-lg leading-relaxed">
            Whether it's a weekend hackathon project, a tool to solve a personal problem, or an
            experiment with emerging technologies, this is where I code without constraints.
          </p>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Project Philosophy</h2>
          <p className="text-lg leading-relaxed mb-6">
            These projects aren't bound by business requirements, client needs, or production constraints.
            They're opportunities to explore, experiment, and sometimes fail spectacularly - all in the
            name of learning and creativity.
          </p>
          <p className="text-lg leading-relaxed">
            Some projects become useful tools, others are learning exercises, and many are just fun
            experiments that teach me something new along the way.
          </p>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Project Types</h2>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>Personal Tools:</strong> Utilities and scripts to solve everyday problems</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>Learning Projects:</strong> Experiments with new languages, frameworks, and technologies</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>Weekend Hacks:</strong> Quick projects built in short timeframes</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>Open Source Contributions:</strong> Contributing to projects I use and care about</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>Technical Experiments:</strong> Testing new ideas and approaches</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Technologies I Explore</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-instrument text-xl mb-3">Languages & Frameworks</h3>
              <ul className="space-y-2">
                <li>• JavaScript / TypeScript</li>
                <li>• React / Next.js</li>
                <li>• Node.js</li>
                <li>• Python</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-instrument text-xl mb-3">Tools & Platforms</h3>
              <ul className="space-y-2">
                <li>• Cloud platforms (AWS, etc.)</li>
                <li>• DevOps tools</li>
                <li>• Automation scripts</li>
                <li>• API integrations</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Project Approach</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-lg leading-relaxed mb-4">
              These projects represent pure creative freedom - no deadlines, no stakeholders, no
              requirements beyond my own curiosity. It's where I get to experiment, learn, and
              sometimes build something genuinely useful.
            </p>
            <p className="text-lg leading-relaxed italic">
              "Code for the sake of coding, learn for the sake of learning."
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Featured Projects</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-instrument text-2xl mb-3">Coming Soon</h3>
              <p className="text-base">
                Project descriptions and links will be added here as I document and organize my
                various coding experiments and personal projects.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Why Personal Projects Matter</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-lg leading-relaxed">
              Personal coding projects keep my skills sharp, expose me to new technologies, and
              remind me why I fell in love with programming in the first place. They're not about
              building the next big thing - they're about continuous learning and creative exploration.
            </p>
          </div>
        </section>
      </div>
    </ContentPage>
  );
}
