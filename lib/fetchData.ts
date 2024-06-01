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
