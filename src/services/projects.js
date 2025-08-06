const API_URL = 'http://localhost:3006/api/proyectos'; // o el backend que tengas

export async function getProjects() {
  const res = await fetch(`${API_URL}/`);
  const data = await res.json();
  return data;
}

export async function getProject(id) {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
}

export async function createProject(project) {
  const res = await fetch(`${API_URL}/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(project),
  });
  return res.json();
}

export async function updateProject(id, project) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(project),
  });
  return res.json();
}

export async function deleteProject(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  return res.ok;
}