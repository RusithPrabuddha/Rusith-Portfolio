import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award, User } from "lucide-react";
export const About = () => {
  return <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know more about my background, education, and what drives my passion for technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Personal Info */}
          <Card className="bg-gray-900/50 border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-cyan-400">
                <User className="w-6 h-6 mr-2" />
                Personal Info
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-2">
              <p><strong>Full Name:</strong> Rusith Prabuddha Balasooriya</p>
              <p><strong>Email:</strong> rusithprabu@gmail.com</p>
              <p><strong>Phone:</strong> 0703733285</p>
              <p><strong>Location:</strong> Sri Lanka</p>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="bg-gray-900/50 border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-cyan-400">
                <GraduationCap className="w-6 h-6 mr-2" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-3">
              <div>
                <p className="font-semibold">BSc (Hons) IT for Business</p>
                <p className="text-sm text-gray-400">Currently Reading</p>
              </div>
              <div>
                <p className="font-semibold">G.C.E. A/L</p>
                <p className="text-sm text-gray-400">2021</p>
              </div>
              <div>
                <p className="font-semibold">G.C.E. O/L</p>
                <p className="text-sm text-gray-400">2018</p>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="bg-gray-900/50 border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center text-cyan-400">
                <Award className="w-6 h-6 mr-2" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300 space-y-3">
              <div>
                <p className="font-semibold">Database Foundations</p>
                <p className="text-sm text-gray-400">Certificate Course</p>
              </div>
              <div>
                <p className="font-semibold">Introduction to Cybersecurity</p>
                <p className="text-sm text-gray-400">Certificate Course</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Soft Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {["Project Management", "Public Relations", "Time Management", "Effective Communication", "Data Analysis"].map(skill => <div key={skill} className="bg-gray-900/50 border border-gray-700 rounded-lg p-4 text-center hover:border-cyan-400/50 transition-all duration-300">
                <p className="text-gray-300 font-medium">{skill}</p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};