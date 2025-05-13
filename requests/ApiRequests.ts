import axios from "@/config/RequestConfig";

export const getProjects = async (): Promise<Project[]> => {
  const response = await axios.get("/projects");
  return response.data;
};

export const getBlogs = async () => {
  const response = await axios.get("/blogs");
  return response.data;
};
