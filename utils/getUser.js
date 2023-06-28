export default async function getUser(id) {
  const user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!user.ok) {
    throw new Error("Failed to Fetch User");
  }
  const data = await user.json();
  return data;
}
