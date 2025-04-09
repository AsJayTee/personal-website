import React from "react";

export const AboutContent = () => {
  return (
    <div className="prose prose-xl max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="mb-6 text-lg">
        Hello! I'm Siah Jin Thau, a Data Science & Computer Science student at NUS with a passion 
        for creating unique digital experiences that blend technical skills with creative design.
      </p>
      
      <h3 className="text-2xl font-bold mt-8 mb-4">Why a 3D Website?</h3>
      <p className="mb-5 text-lg">
        As a Data Science student, I wanted to explore beyond traditional data visualization and challenge 
        myself to learn new technologies. This 3D website showcases my technical abilities and my passion 
        for creating engaging, immersive user experiences.
      </p>
      <p className="mb-5 text-lg">
        The intersection of data science and interactive 3D visualization presents exciting opportunities
        for data storytelling and innovative interfaces that I'm passionate about exploring.
      </p>
      
      <div className="my-8 p-6 bg-amber-100 bg-opacity-70 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">My Philosophy</h3>
        <p className="mb-4 text-lg">
          I believe that technology should be both functional and beautiful. By combining rigorous data analysis
          with creative design, we can create digital experiences that are not only informative but also engaging
          and memorable.
        </p>
      </div>
      
      <h3 className="text-2xl font-bold mt-8 mb-4">Technologies Used</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="p-4 bg-white bg-opacity-60 rounded-lg text-center">
          <div className="text-lg font-bold">React</div>
          <div className="text-sm text-gray-600">Frontend Framework</div>
        </div>
        <div className="p-4 bg-white bg-opacity-60 rounded-lg text-center">
          <div className="text-lg font-bold">Three.js</div>
          <div className="text-sm text-gray-600">3D Rendering</div>
        </div>
        <div className="p-4 bg-white bg-opacity-60 rounded-lg text-center">
          <div className="text-lg font-bold">Tailwind CSS</div>
          <div className="text-sm text-gray-600">Styling</div>
        </div>
        <div className="p-4 bg-white bg-opacity-60 rounded-lg text-center">
          <div className="text-lg font-bold">Jotai</div>
          <div className="text-sm text-gray-600">State Management</div>
        </div>
      </div>
    </div>
  );
};

export const ProjectsContent = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">My Projects</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Here are some of the key projects I've developed that showcase my skills in data science, 
          visualization, and interactive web applications.
        </p>
      </div>
      
      {/* Featured Project */}
      <div className="mb-16 bg-blue-50 bg-opacity-80 rounded-xl p-6 shadow-lg">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/5 flex items-center justify-center">
            <div className="w-full h-64 bg-blue-200 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-blue-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
              </svg>
            </div>
          </div>
          <div className="md:w-3/5">
            <span className="text-blue-600 font-semibold text-sm">FEATURED PROJECT</span>
            <h3 className="text-2xl font-bold mb-3 mt-1">Interactive Data Visualization Platform</h3>
            <p className="text-gray-700 mb-4">
              An advanced analytics dashboard that transforms complex datasets into interactive visualizations. 
              This platform enables users to explore data through customizable charts, filters, and real-time updates.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 rounded-full text-blue-800 text-sm">React</span>
              <span className="px-3 py-1 bg-blue-100 rounded-full text-blue-800 text-sm">D3.js</span>
              <span className="px-3 py-1 bg-blue-100 rounded-full text-blue-800 text-sm">Python</span>
              <span className="px-3 py-1 bg-blue-100 rounded-full text-blue-800 text-sm">FastAPI</span>
            </div>
            <a href="#" className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              View Project
            </a>
          </div>
        </div>
      </div>
      
      {/* Other Projects Grid */}
      <h3 className="text-2xl font-bold mb-6">Other Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Project 1 */}
        <div className="bg-white bg-opacity-80 border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-amber-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3">Machine Learning Model</h3>
          <p className="text-gray-700 mb-4">
            Developed a predictive model for customer behavior using scikit-learn and TensorFlow, achieving 87% accuracy.
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-2 py-1 bg-gray-100 rounded-full text-gray-800 text-xs">Python</span>
            <span className="px-2 py-1 bg-gray-100 rounded-full text-gray-800 text-xs">TensorFlow</span>
            <span className="px-2 py-1 bg-gray-100 rounded-full text-gray-800 text-xs">scikit-learn</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">2023</span>
            <a href="#" className="text-blue-600 hover:underline font-medium">View Details →</a>
          </div>
        </div>
        
        {/* Project 2 */}
        <div className="bg-white bg-opacity-80 border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-.244l.614-.614c.43-.43.935-.609 1.452-.61.526.001 1.032.18 1.462.61l.614.614a.809.809 0 0 0 1.086.244l.603-.302a1.125 1.125 0 0 1 1.3.21l.13.132a1.125 1.125 0 0 1 0 1.592l-.295.295a1.125 1.125 0 0 1-.98.314l-1.17-.195a1.125 1.125 0 0 0-.905.245l-1.33 1.108a1.087 1.087 0 0 0-.358 1.099 8.7 8.7 0 0 0 2.288 4.042l.723.723c.342.342.865.427 1.298.21l.153-.076a1.125 1.125 0 0 0 .622-1.006v-1.089c0-.298.119-.585.329-.795l1.348-1.348c.342-.342.427-.865.21-1.298L18.75 12l1.64-1.64a6 6 0 0 0 1.676-3.257l.319-1.913A2.625 2.625 0 0 0 19.87 1.5h-3.74A2.625 2.625 0 0 0 13.6 3.75l.001.099" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3">3D Data Visualization</h3>
          <p className="text-gray-700 mb-4">
            An experimental project visualizing multidimensional data in 3D space using Three.js and WebGL.
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-2 py-1 bg-gray-100 rounded-full text-gray-800 text-xs">Three.js</span>
            <span className="px-2 py-1 bg-gray-100 rounded-full text-gray-800 text-xs">JavaScript</span>
            <span className="px-2 py-1 bg-gray-100 rounded-full text-gray-800 text-xs">WebGL</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">2024</span>
            <a href="#" className="text-blue-600 hover:underline font-medium">View Details →</a>
          </div>
        </div>
        
        {/* Project 3 */}
        <div className="bg-white bg-opacity-80 border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-purple-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3">NLP Research Project</h3>
          <p className="text-gray-700 mb-4">
            Research on sentiment analysis using transformer models and large language datasets.
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-2 py-1 bg-gray-100 rounded-full text-gray-800 text-xs">PyTorch</span>
            <span className="px-2 py-1 bg-gray-100 rounded-full text-gray-800 text-xs">Hugging Face</span>
            <span className="px-2 py-1 bg-gray-100 rounded-full text-gray-800 text-xs">NLP</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">2023</span>
            <a href="#" className="text-blue-600 hover:underline font-medium">View Details →</a>
          </div>
        </div>
      </div>
    </div>
  );
};
