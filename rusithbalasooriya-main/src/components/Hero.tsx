
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export const Hero = () => {
  const handleDownloadCV = () => {
    // This would trigger a CV download
    console.log("Downloading CV...");
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-xl md:text-2xl text-gray-300 mb-4">Hello, I'm</h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                Rusith Prabuddha
              </h1>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed max-w-md">A talented and hardworking individual skilled in digital marketing, graphic design, video editing, cybersecurity, data analysis, and programming.</p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/rusithb" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border-2 border-cyan-400 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/ruxithhh" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border-2 border-cyan-400 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glowing background effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-80 h-96 md:w-96 md:h-[480px] bg-gradient-to-b from-cyan-400/20 to-transparent rounded-3xl border border-cyan-400/30 overflow-hidden">
                <img src="https://i.postimg.cc/FHQtmvDK/IMG-20241206-WA0143-2.png" alt="Rusith Prabuddha - Profile Photo" className="w-full h-full object-cover object-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
