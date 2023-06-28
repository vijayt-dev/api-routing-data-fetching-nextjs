export default async function getUsers() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!users.ok) {
    throw new Error("Failed to Fetch Users");
  }
  const data = await users.json();
  return data;
}
