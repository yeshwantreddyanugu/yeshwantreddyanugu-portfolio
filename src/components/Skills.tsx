
import { Code, Palette, Database, Globe, Smartphone, Zap , Users} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "Expo", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: ["Java", "SQL",  "Spring-Boot"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: ["HTML5", "CSS3", "JavaScript", "REST APIs",],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["React Native", "iOS", "Android", "Expo"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Zap,
      title: "Tools & Others",
      skills: ["Git", "Linix", "Netlify", "Github", "Android Studio", "IBM Cognos", "VS Code"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users, 
      title: "Soft & Interpersonal Skills",
      skills: [
        "Problem Solving",
        "Team Collaboration",
        "Attention to Detail",
        "Time Management",
        "Communication"
      ],
      color: "from-purple-500 to-pink-500"
    }

  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I work with a diverse set of technologies and tools to bring ideas to life.
            Here's what I'm passionate about and experienced in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-full h-full text-white" />
              </div>

              <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-purple-600 transition-colors">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
