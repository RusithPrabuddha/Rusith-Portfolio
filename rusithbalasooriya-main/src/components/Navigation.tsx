import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };
  const navItems = [{
    name: "Home",
    id: "home"
  }, {
    name: "About",
    id: "about"
  }, {
    name: "Skills",
    id: "skills"
  }, {
    name: "Services",
    id: "services"
  }, {
    name: "Projects",
    id: "projects"
  }, {
    name: "My Edits",
    id: "my-edits"
  }, {
    name: "Experience",
    id: "experience"
  }, {
    name: "Contact",
    id: "contact"
  }];
  return <nav className="fixed top-0 left-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            
            <span className="text-xl font-bold text-cyan-400">
              Portfolio.
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                {item.name}
              </button>)}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-cyan-400">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && <div className="md:hidden border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                  {item.name}
                </button>)}
            </div>
          </div>}
      </div>
    </nav>;
};
