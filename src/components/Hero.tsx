
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/30 to-purple-600/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/30 to-pink-600/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-lg">
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                <img
                  src="https://lunchboxbuck.s3.amazonaws.com/c55fbb31-4300-4e59-9042-fe03df00ea28"
                  alt="Yeshwant Reddy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>




          <div
            className="text-center px-4"
            style={{ overflow: 'visible', paddingTop: '1rem' }} // extra space for font drop
          >
            <h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in"
              style={{
                lineHeight: '1.2', // ensures descenders like "g", "y", etc. show
                paddingBottom: '0.2em', // adds slight buffer below
              }}
            >
              Anugu Yeshwant Reddy
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in">
              Frontend Developer & React Native Expert
            </p>

            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in">
              Passionate about crafting beautiful, responsive, and intuitive digital interfaces for web and mobile.
              I specialize in React, React Native (Expo), and modern frontend technologies to turn creative ideas
              into production-ready apps that users love.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <a href="#projects" style={{ scrollBehavior: 'smooth' }}>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-200 shadow-lg">
                  View My Work
                </button>
              </a>
              <a href="#contact" style={{ scrollBehavior: 'smooth' }}>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-purple-500 hover:text-purple-600 transition-colors duration-200">
                  Get In Touch
                </button>
              </a>
            </div>




          </div>


        </div>


      </div>
    </section>
  );
};

export default Hero;
