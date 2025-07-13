
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { MyEdits } from "@/components/MyEdits";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <MyEdits />
      <Experience />
      <Contact />
    </div>
  );
};

export default Index;
