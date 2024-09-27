"use client"; // Mark this as a client component

import Link from "next/link";
import { useEffect, useState } from "react";

// Import your projects data
const projects = require('../../public/projects.json'); // Adjust the path if needed

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = window.innerHeight * 0.75;
      const position = window.scrollY;
      if (position > triggerHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen p-10 bg-gray-100 text-black">
      <h1 className="text-5xl font-bold text-center mb-12">
        My Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project: { id: number; name: string; image: string; description: string; link: string }) => (
          <div
            key={project.id}
            className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Link href={project.link} className="block p-4 bg-white rounded-lg">
              <img src={project.image} alt={project.name} className="mb-4" />
              <h2 className="text-2xl font-semibold">{project.name}</h2>
              <p>{project.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}