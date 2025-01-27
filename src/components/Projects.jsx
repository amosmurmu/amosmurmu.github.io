const projects = [
  {
    title: "RealTime Chat Application",
    description: "A minimalist chat app built with MERN stack",
    techStack: ["React", "Tailwind", "Node", "Express"],
    github: "https://github.com/amosmurmu/chat_app",
    demo: "https://vaat-app.onrender.com/",
  },
  {
    title: "Ecommerce Application",
    description: "An Ecommerce app built with Node",
    techStack: ["MongoDb", "Node", "Express"],
    github: "https://github.com/amosmurmu/chat_app",
    demo: "https://vaat-app.onrender.com/",
  },
];

const Projects = () => (
  <section id="projects" className="py-16 bg-base-200">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-lg font-semibold">
                {project.title}
              </h3>
              <p className="">{project.description}</p>
              <div className="mt-4 flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  className="btn btn-link text-primary"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  className="btn btn-link text-primary"
                  rel="noreferrer"
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
