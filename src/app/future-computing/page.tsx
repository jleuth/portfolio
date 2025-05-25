import ContentPage from "@/components/ContentPage";

export default function FutureComputingPage() {
  return (
    <ContentPage 
      title="JavaScript"
      subtitle="The dynamic programming language that powers the modern web"
    >
      <div className="font-karla text-gray-900 space-y-8">
        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Overview</h2>
          <p className="text-lg leading-relaxed mb-6">
            JavaScript is a versatile, high-level programming language that has evolved from a simple 
            scripting language for web browsers into a powerful platform for building full-stack applications. 
            Its dynamic nature and extensive ecosystem make it an essential tool for modern web development.
          </p>
          <p className="text-lg leading-relaxed">
            With its event-driven, non-blocking I/O model, JavaScript excels at creating responsive 
            user interfaces and scalable server-side applications. The language&apos;s flexibility allows 
            developers to write code in multiple paradigms, from functional to object-oriented programming.
          </p>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Key Features</h2>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>Dynamic Typing:</strong> Variables can hold values of any type without explicit declaration</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>First-Class Functions:</strong> Functions can be assigned to variables, passed as arguments, and returned from other functions</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>Prototype-Based OOP:</strong> Object-oriented programming through prototypal inheritance</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>Closures:</strong> Inner functions have access to outer function&apos;s variables</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>Asynchronous Programming:</strong> Promises, async/await, and event-driven architecture</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">My Experience</h2>
          <p className="text-lg leading-relaxed mb-6">
            I&apos;ve been working with JavaScript for over 5 years, building everything from interactive 
            web applications to Node.js backend services. My expertise spans both frontend frameworks 
            like React and Vue, as well as server-side development with Express and modern runtime environments.
          </p>
          <p className="text-lg leading-relaxed">
            I particularly enjoy working with modern JavaScript features like ES6+ syntax, destructuring, 
            modules, and async/await patterns. I&apos;ve also extensive experience with JavaScript build tools, 
            testing frameworks, and performance optimization techniques.
          </p>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Technologies & Tools</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-base">
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>Runtime</strong><br />
              Node.js, Deno, Bun
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>Frameworks</strong><br />
              React, Vue, Angular
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>Backend</strong><br />
              Express, Fastify, Koa
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>Testing</strong><br />
              Jest, Vitest, Cypress
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>Build Tools</strong><br />
              Webpack, Vite, Rollup
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>Package Managers</strong><br />
              npm, yarn, pnpm
            </div>
          </div>
        </section>
      </div>
    </ContentPage>
  );
}