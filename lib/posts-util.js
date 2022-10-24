import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postDir = path.join(process.cwd(), "posts");

export function getPostsFiles() {
  return fs.readdirSync(postDir);
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ""); //removes the file extension

  const filePath = path.join(postDir, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
}

export function getAllPosts() {
  const postFiles = getPostsFiles();
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPost = allPosts.sort((postA, postB) => (postA > postB ? -1 : 1));
  return sortedPost;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPost = allPosts.filter((post) => post.isFeatured);
  return featuredPost;
}
