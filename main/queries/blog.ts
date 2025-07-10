import AxiosConfig from "@/providers/axios";
import { Blog } from "@/types/types";

export default class BlogQuery {
  route = "/blogs";
  api = new AxiosConfig().api;
  create = async (data: Omit<Blog, "id">) =>
    this.api.post(`${this.route}`, data).then((res) => res.data);
  getAll = async () => this.api.get(`${this.route}`).then((res) => res.data);
  getOne = async (id: number) =>
    this.api.get(`${this.route}/${id}`).then((res) => res.data);
  getOneSlug = async (slug: string) =>
    this.api.get(`${this.route}/slug/${slug}`).then((res) => res.data);
  update = async (id: number, data: Partial<Omit<Blog, "id">>) =>
    this.api.put(`${this.route}/${id}`, data).then((res) => res.data);
  delete = async (id: number) =>
    this.api.delete(`${this.route}/${id}`).then((res) => res.data);
}
