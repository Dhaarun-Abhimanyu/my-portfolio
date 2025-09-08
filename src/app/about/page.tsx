import Link from 'next/link'

export default function About() {
  return (
    <div className="grid grid-rows-[50px_1fr_50px] items-center justify-items-center min-h-screen p-8 gap-8 bg-gradient-to-b from-gray-200 via-gray-100 to-gray-50">
      <h1 className="text-6xl font-extrabold text-gray-900">Hello, I'm Dhaarun Abhimanyu</h1>
      
      <div className="text-center max-w-3xl text-lg md:text-xl leading-relaxed text-gray-700">
        <p>
          I'm a passionate developer with a knack for creating interactive experiences. With a background in
          web development, I thrive on blending creativity and technology to build applications that solve real-world problems.
        </p>
        <p className="mt-4">
          Whether it's full-stack development, game design, or exploring new tools, I enjoy pushing the boundaries of what's possible. When I'm not coding, you'll find me learning new things or diving into my latest project.
        </p>
      </div>
      
      <Link href="/projects">
        <button className="mt-8 px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition duration-300">
          See My Projects
        </button>
      </Link>
    </div>
  );
  
}