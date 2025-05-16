const Home = () => {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex flex-col md:flex-col items-center text-center">
        {/* Profile Picture */}
        <div className="avatar mb-6">
          <div className="w-56 h-56 rounded-lg shadow-lg">
            <img
              src="/pfp.jpg" // Replace with your image path
              alt="Profile"
            />
          </div>
        </div>
        {/* Text Content */}
        <div className="font-serif max-w-md mb-6 md:mb-0">
          <h1 className="text-5xl font-bold">Hi, I&#39;m amosmurmu</h1>
          <p className="font-serif py-6">
            Software Developer with a focus on backend development. Experience
            in Node.js, Express, RESTful APIs, and working with databases like
            MySQL, PostgreSQL, and MongoDB.
          </p>
          <p className="py-2">50 movies to watch once in a lifetime</p>
          <a
            href="https://amosmurmu.notion.site/50-Movies-List-188fdb1d511e80bfbb29ffde36823a4a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            Notion Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;