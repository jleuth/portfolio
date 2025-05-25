import ContentPage from "@/components/ContentPage";

export default function YouTubePage() {
  return (
    <ContentPage 
      title="TypeScript"
      subtitle="A typed superset of JavaScript that compiles to plain JavaScript"
    >
      <div className="font-karla text-gray-900 space-y-8">
        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Overview</h2>
          <p className="text-lg leading-relaxed mb-6">
            TypeScript is a strongly typed programming language that builds on JavaScript by adding 
            static type definitions. Developed by Microsoft, it provides optional static typing, 
            classes, and interfaces, enabling developers to catch errors early and write more 
            maintainable code.
          </p>
          <p className="text-lg leading-relaxed">
            The beauty of TypeScript lies in its gradual adoption approach - you can start with 
            regular JavaScript and progressively add types as needed. This makes it an excellent 
            choice for both new projects and migrating existing JavaScript codebases.
          </p>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Key Benefits</h2>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>Static Type Checking:</strong> Catch errors at compile time rather than runtime</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>Enhanced IDE Support:</strong> Better autocomplete, refactoring, and navigation</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>Self-Documenting Code:</strong> Types serve as inline documentation</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>Advanced Language Features:</strong> Generics, decorators, and advanced type manipulation</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>Gradual Adoption:</strong> Can be introduced incrementally to existing projects</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">My Expertise</h2>
          <p className="text-lg leading-relaxed mb-6">
            I&apos;ve been using TypeScript extensively for the past 4 years, initially adopting it for 
            large-scale React applications and later expanding to Node.js backend development. 
            I&apos;m particularly skilled in designing type-safe APIs, creating complex type definitions, 
            and leveraging advanced TypeScript features for better code quality.
          </p>
          <p className="text-lg leading-relaxed">
            My experience includes migrating large JavaScript codebases to TypeScript, setting up 
            comprehensive type definitions for third-party libraries, and implementing strict typing 
            configurations that maximize type safety while maintaining developer productivity.
          </p>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Advanced Features I Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-instrument text-xl mb-3">Type System</h3>
              <ul className="space-y-2">
                <li>• Union and Intersection Types</li>
                <li>• Mapped Types and Conditional Types</li>
                <li>• Template Literal Types</li>
                <li>• Type Guards and Assertions</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-instrument text-xl mb-3">Advanced Patterns</h3>
              <ul className="space-y-2">
                <li>• Generic Constraints</li>
                <li>• Utility Types (Partial, Pick, etc.)</li>
                <li>• Decorators and Metadata</li>
                <li>• Module Augmentation</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Tools & Configuration</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-base">
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>Compiler</strong><br />
              TSC, SWC, esbuild
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>Linting</strong><br />
              ESLint, Prettier
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>Testing</strong><br />
              Jest, Vitest, ts-node
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>Bundlers</strong><br />
              Webpack, Vite, Rollup
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>IDEs</strong><br />
              VS Code, WebStorm
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>Type Libraries</strong><br />
              @types/*, DefinitelyTyped
            </div>
          </div>
        </section>
      </div>
    </ContentPage>
  );
}