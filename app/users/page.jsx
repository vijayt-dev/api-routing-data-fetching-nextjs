import getUsers from "@/utils/getUsers";
import Link from "next/link";

const Users = async () => {
  const users = await getUsers();
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Users</h2>
      {users.map((user) => (
        <p key={user.id}>
          <Link href={`users/${user.id}`}>{user.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default Users;
