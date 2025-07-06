export type Status =
  | "ACTIVE"
  | "INACTIVE"
  | "DRAFT"
  | "PUBLISHED"
  | "ARCHIVED"
  | "PENDING"
  | "RESOLVED"
  | "INPROGRESS"
  | "COMPLETED"
  | "HALTED"
  | "REJECTED";

// export interface Blog {
//   slug: string; //
//   user_id: number;
//   category_id: number;
//   description: string; //
//   imageurl: string; //
//   headline: boolean;
//   summary: string;
//   title: string; //
//   featuredImage: string;
//   content: string; //
//   category: string; //
//   status: string; //
//   tags?: string | undefined; //
// }

export type Blog = {
  id: number;
  slug: string;
  status: Status;
  imageUrl?: string;
  title: string;
  category: string;
  author: string;
  publishedDate: string;
  tags: string;
  content: string;
};

export interface Project {
  id: number;
  status: string;
  tags: string;
  headline: boolean;
  title: string;
  imageurl: string;
  slug: string;
  summary: string;
  catid: number;
  description: string;
  author: Author;
  created_at: Date;
  updated_at: Date;
}

export interface Category {
  id: number;
  title: string;
  slug: string;
  author: Author;
  description: string;
  color: string;
  footershow: boolean;
  parent: null;
  image: null;
  created_at: Date;
  updated_at: Date;
}

export interface Author {
  id: number;
  img: string;
  verified: boolean;
  first_name: string;
  last_Name: string;
  email: string;
  phone: string;
  country: string;
  status: boolean;
  created_at: Date;
  updated_at: Date;
}
