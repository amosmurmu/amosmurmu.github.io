
export const Experience = () => {
  const experiences = [
    {
      id : 1,
      role: "Software Engineer Intern",
      company: "Tech Company",
      duration: "June 2023 - August 2023",
      description: "Worked on developing and maintaining web applications using React and Node.js.",
      skills: ["JavaScript", "React", "Node.js", "Express"],
    },
    {
      id : 2,
      role: "Full Stack Developer",
      company: "Another Tech Company",
      duration: "January 2023 - May 2023",
      description: "Contributed to the development of a large-scale e-commerce platform.",
      skills: ["JavaScript", "React", "Node.js", "MongoDB"],
    },
    {
      id : 3,
      role: "Intern",
      company: "Startup Company",
      duration: "June 2022 - August 2022",
      description: "Assisted in building a mobile application using React Native.",
      skills: ["JavaScript", "React Native", "Firebase"],
    },
    {
      id : 4,
      role: "Intern",
      company: "Another Startup",
      duration: "January 2022 - May 2022",
      description: "Worked on a project to improve the performance of a web application.",
      skills: ["JavaScript", "React", "Node.js"],
    },
  ];

  return (
    <div id="experience" className="min-h-screen flex flex-col justify-center items-center p-4 bg-gray-50 dark:bg-gray-900" >
      <h2 className='text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white'>Experience</h2>
      
    </div>
  );
}
