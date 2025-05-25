import ContentPage from "@/components/ContentPage";

export default function WebPage() {
  return (
    <ContentPage 
      title="Vue.js"
      subtitle="The progressive JavaScript framework for building user interfaces"
    >
      <div className="font-karla text-gray-900 space-y-8">
        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Overview</h2>
          <p className="text-lg leading-relaxed mb-6">
            Vue.js is an approachable, performant, and versatile framework for building web user 
            interfaces. Created by Evan You, Vue is designed to be incrementally adoptable, meaning 
            you can use as little or as much of Vue as you need. Its gentle learning curve and 
            excellent documentation make it accessible to developers of all skill levels.
          </p>
          <p className="text-lg leading-relaxed">
            Vue&apos;s reactive data binding system automatically updates the DOM when your application 
            state changes. The framework combines the best features of React and Angular while 
            maintaining simplicity and flexibility. Vue 3&apos;s Composition API provides powerful 
            tools for organizing and reusing logic across components.
          </p>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Key Strengths</h2>
          <ul className="space-y-3 text-lg">
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>Progressive Framework:</strong> Can be adopted incrementally, from a simple library to a full framework</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>Gentle Learning Curve:</strong> Easy to learn with excellent documentation and tutorials</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>Reactive Data Binding:</strong> Automatic UI updates when data changes</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>Component-Based:</strong> Encapsulated, reusable components with scoped styling</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-3">•</span>
              <span><strong>Flexible Architecture:</strong> Works well for both simple projects and complex applications</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">My Experience</h2>
          <p className="text-lg leading-relaxed mb-6">
            I&apos;ve been working with Vue.js for 3 years, initially drawn to its simplicity and 
            excellent developer experience. I&apos;ve built numerous applications ranging from simple 
            dashboards to complex SPAs with Vue 2 and Vue 3, leveraging both the Options API and 
            the newer Composition API.
          </p>
          <p className="text-lg leading-relaxed">
            My Vue expertise includes state management with Vuex and Pinia, routing with Vue Router, 
            building custom components, and integrating with various UI libraries. I particularly 
            enjoy Vue&apos;s single-file components and the seamless development experience provided 
            by the Vue ecosystem.
          </p>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Vue 3 Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-instrument text-xl mb-3">Composition API</h3>
              <ul className="space-y-2">
                <li>• ref, reactive, computed</li>
                <li>• watch, watchEffect</li>
                <li>• Custom composition functions</li>
                <li>• Better TypeScript support</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-instrument text-xl mb-3">Performance</h3>
              <ul className="space-y-2">
                <li>• Proxy-based reactivity</li>
                <li>• Tree-shaking support</li>
                <li>• Multiple root elements</li>
                <li>• Suspense component</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-instrument text-3xl text-black mb-6">Ecosystem & Tools</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-base">
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>Core Tools</strong><br />
              Vue CLI, Vite, Vue DevTools
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>State Management</strong><br />
              Vuex, Pinia, VueUse
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>Routing</strong><br />
              Vue Router, Nuxt.js
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>UI Libraries</strong><br />
              Vuetify, Quasar, Element Plus
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>Testing</strong><br />
              Vue Test Utils, Cypress
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <strong>Meta Frameworks</strong><br />
              Nuxt.js, VitePress, Gridsome
            </div>
          </div>
        </section>
      </div>
    </ContentPage>
  );
}