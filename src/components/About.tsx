
import { Download, Award, Coffee, Users, Eye } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Award, label: "Projects Completed", value: "7" },
    { icon: Coffee, label: "Cups of Coffee", value: "50+" },
    { icon: Users, label: "Happy Clients", value: "7" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
              About Me
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                I'm a passionate frontend developer who loves bringing ideas to life through clean, responsive, and interactive user interfaces. With expertise in React and React Native (Expo), I specialize in building seamless web and mobile experiences that feel both intuitive and powerful.
              </p>
              <p>
                Over the years, I've crafted production-grade UIs, designed component libraries, and optimized app performance across devices. Whether it's building with Tailwind CSS, integrating APIs, or setting up end-to-end flows, I thrive on making the frontend shine.
              </p>
              <p>
                My journey into React Native has expanded my creativity—allowing me to build cross-platform mobile apps with native feel and performance, all while keeping a consistent codebase.
              </p>
              <p>
                Outside the screen, I enjoy playing outdoor sports to stay refreshed and energetic—it helps me return to code with even more focus and creativity.
              </p>
              <p>
                I’m always eager to collaborate with other frontend enthusiasts, explore new technologies, and push the boundaries of what’s possible on the web and mobile.
              </p>
            </div>


            <div className="mt-8">
              <a
                href="https://drive.google.com/file/d/19wpISPGGX_wVYYSwmFrm64Iw6cG5DOCE/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-200 shadow-lg"
              >
                <Eye className="w-5 h-5" />
                View Resume
              </a>

            </div>
          </div>

          <div className="lg:pl-12">
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1">
                  <div className="w-full h-full rounded-3xl bg-white flex items-center justify-center">
                    <div className="text-6xl">👨‍💻</div>
                  </div>
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-2xl shadow-lg border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">2+</div>
                  <div className="text-sm text-gray-500">Years Experience</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-lg border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">100%</div>
                  <div className="text-sm text-gray-500">Client Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
