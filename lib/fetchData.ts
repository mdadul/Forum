import { Comment, Post, PostWithComments, PostWithUser, User } from "@/types";

export async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error(
      res.statusText || "An error occurred while fetching the data."
    );
  }

  const data = await res.json();
  return data;
}

export async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    throw new Error(
      res.statusText || "An error occurred while fetching the data."
    );
  }

  const data = await res.json();
  return data;
}

export async function getComment() {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");

  if (!res.ok) {
    throw new Error(
      res.statusText || "An error occurred while fetching the data."
    );
  }

  const data = await res.json();
  return data;
}

export async function fetchPostsData() {
  const [posts, users, comments] = await Promise.all([
    getPosts(),
    getUsers(),
    getComment(),
  ]);

  const postsWithUser = posts.map((post: Post) => {
    const user = users.find((user: User) => user.id === post.userId);
    return { ...post, user };
  });

  const postsWithComments = postsWithUser.map((post: PostWithUser) => {
    const commentsForPost = comments.filter(
      (comment: Comment) => comment.postId === post.id
    );
    return { ...post, comments: commentsForPost };
  });

  postsWithComments.sort(
    (a: PostWithComments, b: PostWithComments) => b.id - a.id
  );

  return postsWithComments;
}
