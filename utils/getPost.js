export default async function getPost(id) {
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  if (!post.ok) {
    throw new Error("Failed to Fetch Post");
  }
  const data = await post.json();
  return data;
}
