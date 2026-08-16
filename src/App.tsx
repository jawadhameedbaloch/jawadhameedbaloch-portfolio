import { lazy, Suspense } from 'react';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Education = lazy(() => import('./components/Education'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="bg-bg min-h-screen text-fg font-sans selection:bg-accent/30 selection:text-fg w-full overflow-x-hidden">
      <Loader />
      <CustomCursor />
      
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections natively stacked */}
      <main className="w-full relative z-10 bg-bg">
        <Hero />
        <Suspense fallback={<div style={{ minHeight: '100vh' }}></div>}>
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
