export const Skills = () => {
  const skillCategories = [{
    category: "Programming Languages",
    skills: [{
      name: "HTML/CSS",
      level: 85
    }, {
      name: "Java",
      level: 75
    }, {
      name: "PHP",
      level: 70
    }, {
      name: "MySQL",
      level: 80
    }, {
      name: "Kotlin",
      level: 65
    }]
  }, {
    category: "Design & Editing Tools",
    skills: [{
      name: "Premiere Pro",
      level: 90
    }, {
      name: "After Effects",
      level: 85
    }, {
      name: "Photoshop",
      level: 80
    }, {
      name: "Illustrator",
      level: 75
    }, {
      name: "DaVinci Resolve",
      level: 75
    }, {
      name: "Canva",
      level: 95
    }]
  }, {
    category: "Development & Analysis",
    skills: [{
      name: "Android Studio",
      level: 70
    }, {
      name: "Power BI",
      level: 75
    }, {
      name: "MySQL Workbench",
      level: 80
    }, {
      name: "Virtual Box",
      level: 85
    }]
  }, {
    category: "Mobile & Quick Edit",
    skills: [{
      name: "CapCut",
      level: 90
    }, {
      name: "Mobile Design",
      level: 85
    }]
  }];
  return <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => <div key={index} className="space-y-6">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">
                {category.category}
              </h3>
              {category.skills.map((skill, skillIndex) => <div key={skillIndex} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    
                  </div>
                  
                </div>)}
            </div>)}
        </div>
      </div>
    </section>;
};
