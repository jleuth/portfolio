import ContentPage from "@/components/ContentPage";

export default function FilmPage() {
  return (
    <ContentPage 
      title="React"
      subtitle="A JavaScript library for building user interfaces"
    >
      <div className="font-karla text-gray-900 space-y-8">
        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Overview</h2>
          <p className="text-lg leading-relaxed mb-6">
            React is a declarative, efficient, and flexible JavaScript library for building user 
            interfaces. Developed by Facebook, it enables developers to create complex UIs from 
            small, isolated pieces of code called components. React&apos;s component-based architecture 
            promotes reusability and maintainability.
          </p>
          <p className="text-lg leading-relaxed">
            The library&apos;s virtual DOM implementation provides excellent performance by minimizing 
            expensive DOM manipulations. React&apos;s unidirectional data flow makes applications more 
            predictable and easier to debug, while its extensive ecosystem provides solutions for 
            routing, state management, and testing.
          </p>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Core Concepts</h2>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>Components:</strong> Encapsulated, reusable pieces of UI that manage their own state</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>JSX:</strong> Syntax extension that allows writing HTML-like code in JavaScript</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>Virtual DOM:</strong> In-memory representation of real DOM for efficient updates</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>Hooks:</strong> Functions that let you use state and lifecycle features in functional components</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>One-Way Data Flow:</strong> Data flows down from parent to child components</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">My Experience</h2>
          <p className="text-lg leading-relaxed mb-6">
            I&apos;ve been developing with React for over 4 years, starting with class components and 
            transitioning to modern functional components with hooks. I&apos;ve built everything from 
            simple landing pages to complex enterprise applications with hundreds of components.
          </p>
          <p className="text-lg leading-relaxed">
            My expertise includes performance optimization, custom hook development, state management 
            with Context and external libraries, and building accessible, responsive user interfaces. 
            I&apos;m also experienced with React&apos;s ecosystem including Next.js, testing libraries, and 
            development tools.
          </p>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Modern React Patterns</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-instrument text-xl mb-3">Hooks I Master</h3>
              <ul className="space-y-2">
                <li>• useState, useEffect, useContext</li>
                <li>• useReducer, useMemo, useCallback</li>
                <li>• useRef, useImperativeHandle</li>
                <li>• Custom Hooks for reusable logic</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-instrument text-xl mb-3">Advanced Patterns</h3>
              <ul className="space-y-2">
                <li>• Compound Components</li>
                <li>• Render Props and HOCs</li>
                <li>• Context for State Management</li>
                <li>• Error Boundaries</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Ecosystem & Tools</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-base">
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>Frameworks</strong><br />
              Next.js, Gatsby, Remix
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>State Management</strong><br />
              Redux, Zustand, Jotai
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>Styling</strong><br />
              Styled-components, Emotion, Tailwind
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>Testing</strong><br />
              React Testing Library, Jest
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>UI Libraries</strong><br />
              Material-UI, Chakra UI, Ant Design
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>Dev Tools</strong><br />
              React DevTools, Storybook
            </div>
          </div>
        </section>
      </div>
    </ContentPage>
  );
}