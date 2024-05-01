const baseURL = "https://663071fdc92f351c03d9dabe.mockapi.io/projects";

export const getProjects = async () => {
  const response = await fetch(baseURL);
  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }
  return response.json();
};
export const getSingleProject = async (id: string) => {
  const response = await fetch(`${baseURL}/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }
  return response.json();
};
