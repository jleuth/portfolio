import ContentPage from "@/components/ContentPage";

export default function FranticPage() {
  return (
    <ContentPage 
      title="Angular"
      subtitle="A platform and framework for building single-page client applications"
    >
      <div className="font-karla text-gray-900 space-y-8">
        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Overview</h2>
          <p className="text-lg leading-relaxed mb-6">
            Angular is a comprehensive web application framework developed by Google. Built with 
            TypeScript by default, Angular provides a complete solution for building large-scale, 
            enterprise-grade applications. It offers a rich set of features including dependency 
            injection, routing, forms handling, and HTTP client out of the box.
          </p>
          <p className="text-lg leading-relaxed">
            The framework follows a component-based architecture with strong opinions about application 
            structure. Angular&apos;s CLI provides powerful scaffolding and build tools, while RxJS 
            integration enables reactive programming patterns for handling asynchronous operations 
            and complex data flows.
          </p>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Key Features</h2>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>TypeScript First:</strong> Built with TypeScript providing strong typing and modern JavaScript features</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>Dependency Injection:</strong> Powerful DI system for managing application dependencies</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>Two-Way Data Binding:</strong> Automatic synchronization between model and view</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>RxJS Integration:</strong> Reactive programming with observables for async operations</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>Comprehensive CLI:</strong> Powerful command-line tools for project scaffolding and management</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">My Experience</h2>
          <p className="text-lg leading-relaxed mb-6">
            I have 3 years of experience with Angular, working primarily on enterprise applications 
            that require robust architecture and scalability. My expertise includes building complex 
            forms, implementing authentication systems, and creating reusable component libraries.
          </p>
          <p className="text-lg leading-relaxed">
            I&apos;m particularly skilled in Angular&apos;s reactive forms, routing with guards, state 
            management with NgRx, and performance optimization techniques. I&apos;ve also worked 
            extensively with Angular Material and created custom UI component libraries following 
            Angular&apos;s design patterns.
          </p>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Architecture Patterns</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-instrument text-xl mb-3">Core Concepts</h3>
              <ul className="space-y-2">
                <li>• Components and Templates</li>
                <li>• Services and Dependency Injection</li>
                <li>• Modules and Lazy Loading</li>
                <li>• Directives and Pipes</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-instrument text-xl mb-3">Advanced Features</h3>
              <ul className="space-y-2">
                <li>• Change Detection Strategy</li>
                <li>• Custom Form Controls</li>
                <li>• Route Guards and Resolvers</li>
                <li>• Interceptors and Error Handling</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Technologies & Libraries</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-base">
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>Core</strong><br />
              Angular CLI, TypeScript, RxJS
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>State Management</strong><br />
              NgRx, Akita, NGXS
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>UI Libraries</strong><br />
              Angular Material, PrimeNG, Ionic
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>Testing</strong><br />
              Jasmine, Karma, Protractor
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>Build Tools</strong><br />
              Webpack, Angular CLI, Nx
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>Mobile</strong><br />
              Ionic, NativeScript
            </div>
          </div>
        </section>
      </div>
    </ContentPage>
  );
}