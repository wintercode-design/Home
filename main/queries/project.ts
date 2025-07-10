import AxiosConfig from "@/providers/axios";
import api from "@/providers/axios";
import { Project } from "@/types/types";

export default class ProjectQuery {
  route = "/projects";
  api = new AxiosConfig().api;
  create = async (data: Omit<Project, "id">) =>
    this.api.post(`${this.route}`, data).then((res) => res.data);
  getAll = async () => this.api.get(`${this.route}`).then((res) => res.data);
  getOne = async (id: number) =>
    this.api.get(`${this.route}/${id}`).then((res) => res.data);
  getOneSlug = async (slug: string) =>
    this.api.get(`${this.route}/slug/${slug}`).then((res) => res.data);
  update = async (id: number, data: Partial<Omit<Project, "id">>) =>
    this.api.put(`${this.route}/${id}`, data).then((res) => res.data);
  delete = async (id: number) =>
    this.api.delete(`${this.route}/${id}`).then((res) => res.data);
}
