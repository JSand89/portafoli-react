import { useState, useEffect } from 'react';
import TarjetaProyecto from './TarjetaProyecto';
import FormularioProyecto from './FormularioProyecto';
import { getProjects, deleteProject } from '../services/projects';

export default function Proyectos() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
console.log(projects)
  const loadProjects = async () => {
    const data = await getProjects();
    setProjects(data);
  };

  const handleDelete = async (_id) => {
    await deleteProject(_id);
    loadProjects();
  };

  useEffect(() => {
    loadProjects();
  }, []);
return (
    <div className="max-w-5xl mx-auto p-4">
      <FormularioProyecto
        existingProject={selectedProject}
        onSave={() => {
          setSelectedProject(null);
          loadProjects();
        }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {projects.map((proyecto) => (
          <TarjetaProyecto
            key={proyecto._id}
            proyecto={proyecto}
            onEdit={() => setSelectedProject(proyecto)}
            onDelete={() => handleDelete(proyecto._id)}
          />
        ))}
      </div>
    </div>
  );
}
