import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, Database, TrendingUp, Building } from "lucide-react";
export const Projects = () => {
  const projects = [{
    icon: <Code className="w-8 h-8" />,
    title: "Java Application for Hotel Front Desk Management",
    description: "A comprehensive desktop application built with Java to streamline hotel front desk operations including booking management, guest check-in/out, and room allocation.",
    tools: ["Java", "MySQL", "Swing GUI"],
    category: "Desktop Application"
  }, {
    icon: <Building className="w-8 h-8" />,
    title: "Hotel Booking Website + VR Experience for Mahawali Villa",
    description: "Full-stack web application with integrated VR experience allowing users to virtually tour the hotel before booking. Features responsive design and secure payment integration.",
    tools: ["HTML/CSS", "PHP", "MySQL", "VR Integration"],
    category: "Web Development"
  }, {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "E-Commerce Trend Analysis via Kaggle Data",
    description: "Comprehensive data analysis project using Kaggle datasets to identify e-commerce trends, customer behavior patterns, and market insights using advanced analytics techniques.",
    tools: ["Power BI", "MySQL", "Data Analysis"],
    category: "Data Analysis"
  }, {
    icon: <Database className="w-8 h-8" />,
    title: "ERP Systems and Digital Transformation Research",
    description: "In-depth research project analyzing the impact of ERP systems on digital transformation in businesses, including case studies and implementation strategies.",
    tools: ["Research", "Power BI", "Documentation"],
    category: "Research"
  }];
  return <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my technical projects demonstrating various skills and technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => <Card key={index} className="bg-gray-900/50 border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group hover:scale-105">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                    {project.icon}
                  </div>
                  <div className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                    {project.category}
                  </div>
                </div>
                <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
                
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => <span key={toolIndex} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700">
                        {tool}
                      </span>)}
                  </div>
                </div>

                <div className="flex space-x-4 pt-4">
                  
                  
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};