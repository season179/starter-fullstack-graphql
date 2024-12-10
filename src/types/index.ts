export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  authorId: string;
  createdAt: string;
  updatedAt: string;
}