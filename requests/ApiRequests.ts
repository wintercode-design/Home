import axios from "@/config/RequestConfig";

export const getProjects = () => {
  return axios
    .get("/projects")
    .then<Project[]>((response) => response.data)
    .catch((err) => {
      console.log(err);
    });
};

export const getBlogs = () => {
  return axios.get("/blogs").then((response) => response.data);
};
