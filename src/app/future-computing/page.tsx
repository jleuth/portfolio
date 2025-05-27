import ContentPage from "@/components/ContentPage";

export default function FutureComputingPage() {
  return (
    <ContentPage 
      title="Future Computing"
      subtitle="A nonprofit helping kickstart the careers of teens in tech"
    >
      <div className="font-karla text-gray-900 space-y-8">
        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Overview</h2>
          <p className="text-lg leading-relaxed mb-6">
            Future Computing is a nonprofit I founded after closing Frantic. I found that philanthropic 
            work drew me in so much more than making money, because it came without pressure. When you're 
            doing good work without people breathing down your neck to make money, get customers, or 
            release on-time, life is so much more enjoyable.
          </p>
          <p className="text-lg leading-relaxed">
            FC aims to help kickstart the careers of teens in tech by giving them the resources they 
            need to hit the ground running. FC offers several grants paid for by donors/partnering 
            companies to give teens free education, infrastructure, domains, and the opportunity to 
            ask for anything else they might need.
          </p>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Our Approach</h2>
          <p className="text-lg leading-relaxed mb-6">
            All our applications are reviewed holistically. That means no automation, every application 
            for a grant is read and considered by a human, so there's no SEO wording needed to get onto 
            the desk of someone who knows what they're doing.
          </p>
          <p className="text-lg leading-relaxed">
            I'm so much happier running FC, because I know that I'm running no risk, nor do I have to 
            suck up to investors. I get to see, and help my peers in any way I can, and that's way more 
            fulfilling to me than getting rich or having some "entrepreneur" status.
          </p>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">What We Offer</h2>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>Education Grants:</strong> Free access to courses, tutorials, and learning resources</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>Infrastructure Support:</strong> Cloud hosting, development tools, and technical resources</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>Domain Registration:</strong> Professional web domains for teen developers' projects</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>Custom Requests:</strong> Anything else teens might need to advance their tech careers</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>Human Review:</strong> Every application personally reviewed, no automated rejection</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Mission & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-instrument text-xl mb-3">Our Mission</h3>
              <ul className="space-y-2">
                <li>• Democratize access to tech resources</li>
                <li>• Support the next generation of developers</li>
                <li>• Remove financial barriers to learning</li>
                <li>• Foster innovation among young creators</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-instrument text-xl mb-3">Our Values</h3>
              <ul className="space-y-2">
                <li>• Human-centered approach</li>
                <li>• No-pressure environment</li>
                <li>• Holistic application review</li>
                <li>• Community over profit</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Why This Matters</h2>
          <p className="text-lg leading-relaxed mb-6">
            After the intense pressure and burnout from running Frantic, Future Computing represents 
            a completely different approach to making an impact. There's no pressure to monetize, 
            no investors to appease, and no artificial deadlines to meet.
          </p>
          <p className="text-lg leading-relaxed">
            This work is infinitely more fulfilling because it's about genuinely helping people rather 
            than building something to get rich or achieve status. Seeing young developers get the 
            resources they need to pursue their passions is worth more than any revenue target.
          </p>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Get Involved</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-instrument text-xl mb-3">Visit Future Computing</h3>
            <p className="text-base mb-4">
              Learn more about our grants, apply for resources, or find out how to support our mission.
            </p>
            <a 
              href="https://futurecomputing.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
            >
              futurecomputing.dev
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </section>
      </div>
    </ContentPage>
  );
}