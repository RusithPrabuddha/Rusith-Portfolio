
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Digital Marketing Trainee",
      company: "Warlton International Campus",
      duration: "3 months",
      type: "Trainee",
      description: "Gained hands-on experience in digital marketing strategies, social media management, and content creation. Worked on real client projects and learned industry best practices.",
      responsibilities: [
        "Social media content creation and scheduling",
        "Market research and competitor analysis",
        "Campaign performance tracking and reporting",
        "Client communication and project coordination"
      ],
      tools: ["Canva", "Social Media Platforms", "Analytics Tools"]
    },
    {
      title: "Freelance Video Editor",
      company: "Self-Employed",
      duration: "Ongoing",
      type: "Freelance",
      description: "Providing professional video editing services to various clients, specializing in short-form content, promotional videos, and social media reels.",
      responsibilities: [
        "Video editing and post-production",
        "Motion graphics and visual effects",
        "Color correction and audio enhancement",
        "Client consultation and project management"
      ],
      tools: ["Premiere Pro", "After Effects", "DaVinci Resolve", "CapCut"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work <span className="text-cyan-400">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and hands-on experience in the industry
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card 
              key={index}
              className="bg-gray-900/50 border-gray-700 hover:border-cyan-400/50 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-cyan-400">
                      <Briefcase className="w-8 h-8" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-white mb-2">
                        {experience.title}
                      </CardTitle>
                      <div className="flex items-center space-x-4 text-gray-400">
                        <span className="font-semibold">{experience.company}</span>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                    {experience.type}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-400 leading-relaxed">
                  {experience.description}
                </p>
                
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-3">Key Responsibilities:</h4>
                  <ul className="text-gray-300 space-y-2">
                    {experience.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-cyan-400 font-semibold mb-2">Tools & Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.tools.map((tool, toolIndex) => (
                      <span 
                        key={toolIndex}
                        className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
