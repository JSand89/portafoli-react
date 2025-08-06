import { useState, useEffect } from 'react';
import { createProject, updateProject } from '../services/projects';

export default function ProjectForm({ onSave }) {
  const [project, setProject] = useState({
    nombre: '',
    descripcion: '',
    repo: '',
    imagen: ''
  });

  useEffect(() => {
    // if (existingProject) {
    //   setProject(existingProject);
    // } else {
      setProject({ nombre: '', descripcion: '', repo: '', imagen: '' });
    // }
  // }, [existingProject]);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (existingProject) {
    //   await updateProject(existingProject.id, project);
    // } else {
      await createProject(project);
    // }
    onSave();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded shadow-md space-y-3">
      <h2 className="text-xl font-bold">
        {'Nuevo proyecto'}
      </h2>

      <input
        className="w-full p-2 border rounded"
        placeholder="Nombre"
        value={project.nombre}
        onChange={(e) => setProject({ ...project, nombre: e.target.value })}
      />

      <textarea
        className="w-full p-2 border rounded"
        placeholder="Descripción"
        value={project.descripcion}
        onChange={(e) => setProject({ ...project, descripcion: e.target.value })}
      />

      <input
        className="w-full p-2 border rounded"
        placeholder="URL del repositorio"
        value={project.repo}
        onChange={(e) => setProject({ ...project, repo: e.target.value })}
      />

      <input
        className="w-full p-2 border rounded"
        placeholder="URL de la imagen"
        value={project.imagen}
        onChange={(e) => setProject({ ...project, imagen: e.target.value })}
      />

      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        {'Crear'}
      </button>
    </form>
  );
}
