import React from "react";

export const AboutContent = () => {
  return (
    <div className="prose prose-xl max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="mb-4 text-lg">
            Hello! I'm Siah Jin Thau, a 3rd Year student at the National
            University of Singapore. I'm majoring in Data Science and Analytics
            with a minor in Computer Science.
          </p>
          <p className="mb-4 text-lg">
            I have a deep passion for all things AI and am especially excited
            about the future applications of Generative AI and Agentic systems.
          </p>
          <p className="mb-4 text-lg">
            I'm particularly drawn to how these technologies can comprehend
            complex instructions to become true collaborators, helping us tackle
            challenges in unprecedented ways.
          </p>
        </div>

        <div className="md:w-1/3 flex justify-center items-start pt-6 md:pt-0">
          <div
            className="w-full max-w-xs h-64 md:h-80 bg-gray-200 rounded-lg overflow-hidden shadow-md"
            style={{ aspectRatio: "3/4" }}
          >
            <img 
              src="/images/my_pic.jpg" 
              alt="Siah Jin Thau" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="my-8 p-6 bg-blue-50 rounded-lg">
        <h3 className="text-2xl font-bold mb-4">So... Why a 3D Website?</h3>
        <p className="mb-4 text-lg">
          This might sound cool and all, but I'm guessing you're a bit confused
          about why a Data Science student would go out of their way to build a
          3D website 😅 Fair question!
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold mt-8 mb-4">My Journey</h3>
        <p className="mb-4 text-lg">
          I've always loved building backend systems, especially ones powered by
          advanced LLM architecture like RAG and smart tooling. But honestly,
          the typical chatbot interface—just typing into a text box—always felt
          a little underwhelming.
        </p>

        <p className="mb-4 text-lg">
          Back then, I was using Streamlit for most of my frontend work. It's a
          super simple way to get things up and running in Python, and it
          definitely helped me build quickly. But over time, I started feeling
          like something was missing. The experience didn't quite match the
          level of depth I was putting into the backend.
        </p>

        <p className="mb-4 text-lg">
          So, I set myself a challenge: why not build a 3D avatar interface for
          my chatbots? Something more human, more interactive - something that
          felt like talking to a real assistant, not just a blank screen. At the
          same time, I figured it'd be a great way to sharpen my web dev skills
          and pick up a new toolset that could come in handy for both personal
          projects and future opportunities.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">From Concept to Reality</h3>
        <p className="mb-4 text-lg">
          This site is a product of that journey. It's definitely still a work
          in progress - there are some performance things I'm still figuring
          out—but I'm proud of how far it's come.
        </p>
        <p className="mb-4 text-lg">
          Even better, I got to put it into action and actually built a 3D
          avatar AI you can interact with!
        </p>
      </div>

      {/* Image of 3D Avatar Project */}
      <div className="my-8 bg-white p-4 rounded-lg shadow-md border border-blue-100">
        <h3 className="text-xl font-semibold mb-3">My AI 3D Avatar Project</h3>
        <div className="aspect-video bg-blue-50 rounded-md overflow-hidden mb-3">
          <img 
            src="/images/ai_avatar.png" 
            alt="3D AI Avatar Project" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Link to 3D Avatar Project */}
        <div className="text-center">
          <a
            href="#"
            className="inline-block px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors"
          >
            Check Out My 3D Avatar AI
          </a>
        </div>
      </div>

      <div className="mt-8 mb-4">
        <h3 className="text-2xl font-bold mb-4">What's Next?</h3>
        <p className="mb-4 text-lg">
          I'm continuing to explore the intersection of AI and interactive 3D
          experiences. I believe the future of human-AI interaction lies in
          creating more natural, intuitive interfaces — and I'm excited to be
          part of that journey.
        </p>

        <p className="mb-4 text-lg">
          If you're working on something similar, have questions, or just want
          to chat tech - I'd love to connect 😁
        </p>
      </div>
      
      {/* Social Media Links Section */}
      <div className="mt-12 mb-8">
        <h3 className="text-2xl font-bold mb-6 text-center">Let's Connect!</h3>
        <div className="flex justify-center items-center gap-8">
          {/* LinkedIn */}
          <a 
            href="https://www.linkedin.com/in/siahjinthau" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-blue-600 group-hover:shadow-lg group-hover:-translate-y-1">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-8 h-8 text-blue-600 transition-colors duration-300 group-hover:text-white"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </div>
            <p className="mt-2 text-center font-medium text-blue-600">LinkedIn</p>
          </a>
          
          {/* GitHub */}
          <a 
            href="https://github.com/AsJayTee" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-gray-800 group-hover:shadow-lg group-hover:-translate-y-1">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-8 h-8 text-gray-800 transition-colors duration-300 group-hover:text-white"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"></path>
              </svg>
            </div>
            <p className="mt-2 text-center font-medium text-gray-800">GitHub</p>
          </a>
          
          {/* Discord */}
          <a 
            href="https://discordapp.com/users/asjaytee" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-indigo-600 group-hover:shadow-lg group-hover:-translate-y-1">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-8 h-8 text-indigo-600 transition-colors duration-300 group-hover:text-white"
              >
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.127c.126-.094.252-.192.372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127c-.598.35-1.22.645-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.834 19.834 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"></path>
              </svg>
            </div>
            <p className="mt-2 text-center font-medium text-indigo-600">Discord</p>
          </a>
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
          Here are some of the key projects I've developed that showcase my
          skills in data science, visualization, and interactive web
          applications.
        </p>
      </div>

      {/* Featured Project */}
      <div className="mb-16 bg-blue-50 bg-opacity-80 rounded-xl p-6 shadow-lg">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/5 flex items-center justify-center">
            <div className="w-full h-64 bg-blue-200 rounded-lg flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-16 h-16 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                />
              </svg>
            </div>
          </div>
          <div className="md:w-3/5">
            <span className="text-blue-600 font-semibold text-sm">
              FEATURED PROJECT
            </span>
            <h3 className="text-2xl font-bold mb-3 mt-1">
              Interactive Data Visualization Platform
            </h3>
            <p className="text-gray-700 mb-4">
              An advanced analytics dashboard that transforms complex datasets
              into interactive visualizations. This platform enables users to
              explore data through customizable charts, filters, and real-time
              updates.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 rounded-full text-blue-800 text-sm">
                React
              </span>
              <span className="px-3 py-1 bg-blue-100 rounded-full text-blue-800 text-sm">
                D3.js
              </span>
              <span className="px-3 py-1 bg-blue-100 rounded-full text-blue-800 text-sm">
                Python
              </span>
              <span className="px-3 py-1 bg-blue-100 rounded-full text-blue-800 text-sm">
                FastAPI
              </span>
            </div>
            <a
              href="#"
              className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-amber-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3">Machine Learning Model</h3>
          <p className="text-gray-700 mb-4">
            Developed a predictive model for customer behavior using
            scikit-learn and TensorFlow, achieving 87% accuracy.
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-2 py-1 bg-gray-100 rounded-full text-gray-800 text-xs">
              Python
            </span>
            <span className="px-2 py-1 bg-gray-100 rounded-full text-gray-800 text-xs">
              TensorFlow
            </span>
            <span className="px-2 py-1 bg-gray-100 rounded-full text-gray-800 text-xs">
              scikit-learn
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">2023</span>
            <a href="#" className="text-blue-600 hover:underline font-medium">
              View Details →
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white bg-opacity-80 border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-green-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.115 5.19l.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-.244l.614-.614c.43-.43.935-.609 1.452-.61.526.001 1.032.18 1.462.61l.614.614a.809.809 0 0 0 1.086.244l.603-.302a1.125 1.125 0 0 1 1.3.21l.13.132a1.125 1.125 0 0 1 0 1.592l-.295.295a1.125 1.125 0 0 1-.98.314l-1.17-.195a1.125 1.125 0 0 0-.905.245l-1.33 1.108a1.087 1.087 0 0 0-.358 1.099 8.7 8.7 0 0 0 2.288 4.042l.723.723c.342.342.865.427 1.298.21l.153-.076a1.125 1.125 0 0 0 .622-1.006v-1.089c0-.298.119-.585.329-.795l1.348-1.348c.342-.342.427-.865.21-1.298L18.75 12l1.64-1.64a6 6 0 0 0 1.676-3.257l.319-1.913A2.625 2.625 0 0 0 19.87 1.5h-3.74A2.625 2.625 0 0 0 13.6 3.75l.001.099"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3">3D Data Visualization</h3>
          <p className="text-gray-700 mb-4">
            An experimental project visualizing multidimensional data in 3D
            space using Three.js and WebGL.
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-2 py-1 bg-gray-100 rounded-full text-gray-800 text-xs">
              Three.js
            </span>
            <span className="px-2 py-1 bg-gray-100 rounded-full text-gray-800 text-xs">
              JavaScript
            </span>
            <span className="px-2 py-1 bg-gray-100 rounded-full text-gray-800 text-xs">
              WebGL
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">2024</span>
            <a href="#" className="text-blue-600 hover:underline font-medium">
              View Details →
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-white bg-opacity-80 border border-gray-200 rounded-xl p-5 hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-purple-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3">NLP Research Project</h3>
          <p className="text-gray-700 mb-4">
            Research on sentiment analysis using transformer models and large
            language datasets.
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="px-2 py-1 bg-gray-100 rounded-full text-gray-800 text-xs">
              PyTorch
            </span>
            <span className="px-2 py-1 bg-gray-100 rounded-full text-gray-800 text-xs">
              Hugging Face
            </span>
            <span className="px-2 py-1 bg-gray-100 rounded-full text-gray-800 text-xs">
              NLP
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">2023</span>
            <a href="#" className="text-blue-600 hover:underline font-medium">
              View Details →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
