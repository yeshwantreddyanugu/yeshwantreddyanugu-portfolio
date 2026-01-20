
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Trip-Nest",
      description: "A travel booking platform to reserve hotels, resorts, and vehicles across destinations. Built with a modern UI and real-time booking features.",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=500&fit=crop", 
      tech: ["Tailwind CSS", "TypeScript", "Firebase", "REST API"],
      liveUrl: "https://yeshwantreddyanugu.github.io/Trip-Nest/",
      githubUrl: "https://github.com/yeshwantreddyanugu/Trip-Nest"
    }
    ,
    {
      title: "Lavit Solutions",
      description: "A construction-based company website developed and deployed live on Google. It showcases services, contact info, and company credentials for building and infrastructure projects.",
      image: "https://images.unsplash.com/photo-1529926691761-20fb82067c71?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tech: ["Typescript", "Firebase", "Tailwind CSS"],
      liveUrl: "https://lavitsolutionsindia.com/",
      githubUrl: "https://github.com/yeshwantreddyanugu/lavit-solutions"
    }
    ,
    {
      title: "Mandir Donation Platform",
      description: "A secure donation platform with responsive UI and multi-gateway integration, allowing seamless online contributions to Mandirs. Built to ensure accessibility, mobile-first UX, and client-specific custom flows with Stripe Pay Integration",
      image: "https://images.unsplash.com/photo-1603766806347-54cdf3745953?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tech: ["React", "Tailwind CSS", "Stripe pay"],
      liveUrl: "https://yeshwantreddyanugu.github.io/mandir-donation-platform/",
      githubUrl: "https://github.com/yeshwantreddyanugu/mandir-donation-platform"
    }

    ,
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with modern web technologies, featuring smooth animations and optimized performance.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      tech: ["Next.js", "TypeScript", "Tailwind Css"],
      liveUrl: "#",
      githubUrl: "https://github.com/yeshwantreddyanugu/yeshwantreddyanugu-portfolio/"
    },
    {
      title: "Azarts.com E-commerce Platform",
      description: "A fully functional e-commerce website featuring product catalog, shopping cart, secure checkout, user authentication, and order management — built for seamless online shopping experience.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tech: ["React Native", "Expo", "Stripe/Razorpay", "Tailwind CSS"],
      liveUrl: "https://azarts.com",
      githubUrl: "https://github.com/yeshwantreddyanugu/yeshwantreddyanugu-portfolio/"
    }
    ,
    {
      title: "CulinaryCanvas Restaurant (Web + Expo App)",
      description: "A responsive restaurant platform developed with Expo and React Native Web, offering seamless food browsing, seasonal menus, chef showcases, and table booking — accessible on both web and mobile.",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&h=500&q=80",
      tech: ["Expo", "React Native", "React Native Web", "Tailwind CSS"],
      liveUrl: "https://yeshwantreddyanugu.github.io/restarent/",
      githubUrl: "https://github.com/yeshwantreddyanugu/restarent"
    }


  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of the projects I've worked on recently. Each one represents
            a unique challenge and showcases different aspects of my skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-700" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors"
                  >
                    <Github className="w-4 h-4 text-gray-700" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
