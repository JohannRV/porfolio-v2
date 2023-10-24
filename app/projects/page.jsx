"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/data.json");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.log("Error al obtener los datos:", error);
      }
    };

    fetchData();
  }, []);

  if (projects.length === 0) {
    return (
      <p className="bg-dark min-h-screen mx-auto flex text-text_primary items-center justify-center font-semibold text-6xl">
        Cargando...
      </p>
    );
  }

  return (
    <div className="bg-dark min-h-screen mx-auto p-11">
      <nav>
        <Sidebar />
      </nav>
      {projects.map((project) => (
        <div key={project.id}>
          <header className="flex-col px-9 py-3">
            <main className="px-2 py-5 border-2 border-borderMain rounded-lg ml-20">
              <h2 className="text-text_primary selection: text-xl">
                {project.title}
              </h2>
              <p className="text-text_primary">{project.description}</p>
              <p className="text-text_primary">
                Technologies: {project.technologies.join(", ")}
              </p>
              <a
                className="text-text_secondary mt-2 hover:text-text_primary"
                href={project.github}>
                Github
              </a>
              <a
                className="text-text_secondary m-8 hover:text-text_primary"
                href={project.url}>
                Website
              </a>
            </main>
          </header>
        </div>
      ))}
    </div>
  );
};

export default Projects;
