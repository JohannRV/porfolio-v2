import projects from "./data/data.json";

function Projects() {
  return (
    <div>
      <h1>My Projects</h1>
      <ul>
        {projects.map((project) => (
          <div key={project.id}>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <p>{project.technologies}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              Visita el repositorio de GitHub
            </a>
          </div>
        ))}
      </ul>
    </div>
  );
}
export default Projects;
