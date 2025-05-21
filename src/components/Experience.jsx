
export const Experience = () => {
  const experiences = [
    {
      id : 1,
      role: "Open Source Contributor",
      company: "Directus",
      duration: "May 2025",
      description: "Worked on essential events in ExtensionManager and updated the documentation with respect to the new changes.",
      skills: ["TypeScript", "Vue", "Node.js", "Express"],
    },
    {
      id : 2,
      role: "Open Source Contributor",
      company: "MotionCanvas",
      duration: "April 2025",
      description: "I implemented a new prop centerArrow for the Arrow component, allowing users to customize the arrow's center position and updated the documentation with internals of motionvcanvas.",
      skills: ["JavaScript", "React", "Node.js", "MongoDB"],
    },
    {
      id : 3,
      role: "IT Teacher",
      company: "Ganpat University",
      duration: "Jan 2024 - May 2024",
      description: "Taught more than 150 students about the basics of programming and MS Office Suite and took practical sessions on the same and took tests for the students.",
      skills: ["OS", "Networking", "MS Word", "MS Excel"],
    },
  ];

  return (
    <div id="experience" className="flex flex-col justify-center items-center p-4 bg-base-100" >
      <h2 className='text-4xl font-bold text-center mb-12 text-base-content'>Experience</h2>

        <div className="w-full max-w-4xl">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-base-300">

            </div>
              {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={exp.id} className="relative mb-16">
                  {/* Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2 w-4 h-4 rounded-full bg-primary"></div>
                  
                  {/* Content Box */}
                  <div className="flex w-full">
                    {/* Left side */}
                    <div className={`w-1/2 ${isEven ? "text-right pr-8" : "pr-8"}`}>
                      {isEven ? (
                        <span className="text-sm text-base-content opacity-70">{exp.duration}</span>
                      ) : (
                        <div className="card bg-base-200 shadow-xl p-6">
                          <h3 className="text-xl font-bold text-base-content">{exp.role}</h3>
                          <h4 className="text-lg text-primary mb-2">{exp.company}</h4>
                          <p className="text-base-content opacity-80 mb-4">{exp.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, i) => (
                              <span key={i} className="badge badge-outline badge-primary">{skill}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Right side */}
                    <div className={`w-1/2 ${isEven ? "pl-8" : "text-left pl-8"}`}>
                      {isEven ? (
                        <div className="card bg-base-200 shadow-xl p-6">
                          <h3 className="text-xl font-bold text-base-content">{exp.role}</h3>
                          <h4 className="text-lg text-primary mb-2">{exp.company}</h4>
                          <p className="text-base-content opacity-80 mb-4">{exp.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, i) => (
                              <span key={i} className="badge badge-outline badge-primary">{skill}</span>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <span className="text-sm text-base-content opacity-70">{exp.duration}</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    </div> 
  );
}
