import ContentPage from "@/components/ContentPage";

export default function FranticPage() {
  return (
    <ContentPage 
      title="Frantic"
      subtitle="I.T. infrastructure management solutions for cross-platform cloud deployments"
    >
      <div className="font-karla text-gray-900 space-y-8">
        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Overview</h2>
          <p className="text-lg leading-relaxed mb-6">
            Frantic Software, LLC was a company I ran that specialized in creating I.T. infrastructure 
            management solutions for cross-platform cloud deployments. It was also a startup that I ran 
            alone, 24/7, no breaks, and NO help.
          </p>
          <p className="text-lg leading-relaxed">
            It started as a personal project to learn more about AWS. I just thought it was interesting. 
            Eventually I needed a reason to go bigger with AWS, so I figured a company would be fun; 
            hey, I could be a founder, right?? That passion project became the death of me, and turning 
            it into a company was absolutely one of the worst decisions I'd ever made.
          </p>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">The Experience</h2>
          <p className="text-lg leading-relaxed mb-6">
            I worked myself into the ground. I was so drilled into the idea that "founders don't rest" 
            that I quite literally spent every waking moment doing SOMETHING for the company. If I were 
            at school, I was planning, doing BizAdm, or researching how to do the things I want to. When 
            I was at home, I was either coding or going to work (because for some reason I thought getting 
            a normal job would be a good idea on top of this).
          </p>
          <p className="text-lg leading-relaxed mb-6">
            I figured being absolutely miserable was just part of the grind. I wasn't just burning out, 
            I was crashing and exploding into flames. I stopped being social, stopped going out, stopped 
            being okay.
          </p>
          <p className="text-lg leading-relaxed">
            On the final day, my family intervened and told me I had to shut the company down. I'm very 
            grateful they did, because if I hadn't have heard it from someone else, I would've worked 
            myself to death, literally. It was so nice to just be... over. Not give a shit anymore.
          </p>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Finding Purpose Again</h2>
          <p className="text-lg leading-relaxed mb-6">
            I lost purpose for a little while, because what the hell am I if not a founder when I'd spent 
            every hour of the past year ingraining it into my life? However, I rediscovered that purpose 
            through Hack Club, and remembering what brought me to becoming a founder in the first place.
          </p>
          <p className="text-lg leading-relaxed">
            The product was never the problem, I still think it was a great idea. But building a company 
            around it, alone, at that age, not knowing what the hell I was doing, or what I was getting 
            myself into... it broke me. But it also taught me a lot. How to move fast, think critically 
            under immense pressure, and how NOT to run a startup.
          </p>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">What I Learned</h2>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>Moving Fast:</strong> How to rapidly iterate and make decisions under pressure</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>Critical Thinking:</strong> Problem-solving skills developed under immense stress</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>Startup Pitfalls:</strong> What NOT to do when building a company</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>Work-Life Balance:</strong> The importance of sustainable work practices</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>Self-Awareness:</strong> Recognizing when to ask for help and when to step back</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Technical Focus</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-instrument text-xl mb-3">Cloud Infrastructure</h3>
              <ul className="space-y-2">
                <li>• AWS Cloud Services</li>
                <li>• Cross-Platform Deployments</li>
                <li>• Infrastructure as Code</li>
                <li>• Cloud Architecture Design</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-instrument text-xl mb-3">Management Solutions</h3>
              <ul className="space-y-2">
                <li>• Infrastructure Monitoring</li>
                <li>• Deployment Automation</li>
                <li>• Resource Optimization</li>
                <li>• Multi-Cloud Strategy</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Reflection</h2>
          <p className="text-lg leading-relaxed mb-6">
            I don't necessarily see Frantic as a failure, just a hard-earned life lesson. I did end up 
            walking away with better skills, more maturity, and a wholly different outlook on life. I 
            didn't sacrifice a whole year of my life for nothing!
          </p>
          <p className="text-lg leading-relaxed italic text-gray-700">
            RIP Frantic. You were fun, and hell.
          </p>
        </section>
      </div>
    </ContentPage>
  );
}