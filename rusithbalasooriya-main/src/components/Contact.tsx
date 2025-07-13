import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Linkedin, Instagram, Send, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const {
    toast
  } = useToast();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon."
    });
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const contactInfo = [{
    icon: <Mail className="w-6 h-6" />,
    label: "Email",
    value: "rusithprabu@gmail.com",
    href: "mailto:rusithprabu@gmail.com"
  }, {
    icon: <Phone className="w-6 h-6" />,
    label: "Phone",
    value: "0703733285",
    href: "tel:0703733285"
  }, {
    icon: <Linkedin className="w-6 h-6" />,
    label: "LinkedIn",
    value: "linkedin.com/in/rusithb",
    href: "https://linkedin.com/in/rusithb"
  }, {
    icon: <Instagram className="w-6 h-6" />,
    label: "Instagram",
    value: "@ruxithhh",
    href: "https://instagram.com/ruxithhh"
  }];
  return <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gray-900/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Contact Information</CardTitle>
                <p className="text-gray-400">Feel free to reach out through any of these channels.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => <a key={index} href={info.href} target={info.href.startsWith('http') ? '_blank' : '_self'} rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''} className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-300 group">
                    <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </a>)}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-400/10 to-blue-500/10 border-cyan-400/30">
              <CardContent className="p-6">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                  <p className="text-gray-400">Sri Lanka</p>
                  <p className="text-sm text-gray-500 mt-2">Available for remote work and local meetings</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};