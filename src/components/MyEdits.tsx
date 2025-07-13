import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";

export const MyEdits = () => {
  const edits = [{
    title: "warlton international campus online courses",
    description: "A showcase of my video editing skills featuring creative transitions, color grading, and professional storytelling techniques.",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=225&fit=crop",
    category: "Video Editing",
    duration: "2:45",
    link: "https://vimeo.com/1098712891"
  }, {
    title: "Space and Time Reel",
    description: "Professional video editing showcasing advanced techniques in motion graphics, color correction, and seamless transitions.",
    thumbnail: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=400&h=225&fit=crop",
    category: "Video Editing",
    duration: "3:20",
    link: "https://vimeo.com/1100547005"
  }, {
    title: "Creative Showcase Reel",
    description: "Dynamic video editing featuring cinematic storytelling, visual effects, and professional post-production techniques.",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=225&fit=crop",
    category: "Video Editing",
    duration: "2:15",
    link: "https://vimeo.com/1100554277"
  }, {
    title: "Visual Effects Compilation",
    description: "Advanced video editing showcase with motion tracking, compositing, and creative visual effects production.",
    thumbnail: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=400&h=225&fit=crop",
    category: "Video Editing",
    duration: "3:45",
    link: "https://vimeo.com/1100554392"
  }];

  return (
    <section id="my-edits" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Edits</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing my video editing and creative content creation skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {edits.map((edit, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group hover:scale-105">
              <CardHeader>
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={edit.thumbnail} 
                    alt={edit.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                    {edit.category}
                  </span>
                  <span className="text-sm text-gray-400">
                    {edit.duration}
                  </span>
                </div>
                <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {edit.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-400 leading-relaxed">
                  {edit.description}
                </p>
                <div className="flex space-x-4">
                  <Button 
                    variant="outline" 
                    className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900"
                    onClick={() => window.open(edit.link, '_blank')}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Watch
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="text-gray-400 hover:text-cyan-400"
                    onClick={() => window.open(edit.link, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View on Vimeo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
