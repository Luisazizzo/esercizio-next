import { postsJson } from "@/pages/api/post";
export function getAllPosts() {
  return postsJson[0];
}
