import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Megaphone, Video } from "lucide-react";
export const Services = () => {
  const services = [{
    icon: <Megaphone className="w-12 h-12" />,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing solutions including social media strategy, content creation, and brand awareness campaigns. I help businesses build their online presence and engage with their target audience effectively.",
    features: ["Social Media Strategy", "Content Creation", "Brand Awareness Campaigns", "Analytics & Reporting"]
  }, {
    icon: <Video className="w-12 h-12" />,
    title: "Video Editing",
    description: "Professional video editing services specializing in short-form reels, promotional content, and motion graphics. Using industry-standard tools like Premiere Pro, After Effects, and DaVinci Resolve.",
    features: ["Short-form Reels", "Professional Edits", "Motion Graphics", "Color Grading"]
  }];
  return <section id="services" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional services tailored to help your business grow and succeed in the digital landscape
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => <Card key={index} className="bg-gray-900/50 border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-400 text-center leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-cyan-400 font-semibold">Key Features:</h4>
                  <ul className="text-gray-300 space-y-1">
                    {service.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                        {feature}
                      </li>)}
                  </ul>
                </div>

                <div className="text-center pt-4">
                  
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};