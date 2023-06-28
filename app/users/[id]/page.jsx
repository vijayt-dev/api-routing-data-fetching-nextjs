import UserPost from "@/app/components/UserPost";
import getPost from "@/utils/getPost";
import getUser from "@/utils/getUser";
import { Suspense } from "react";

export const generateMetadata = async ({ params: { id } }) => {
  const { name, email } = await getUser(id);
  return {
    title: name,
  };
};
const User = async ({ params: { id } }) => {
  console.log(id);
  const user = getUser(id);
  const posts = getPost(id);
  const userData = await user;
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Name: {userData.name}</h2>
      <Suspense fallback={<p>Loading...</p>}>
        <UserPost posts={posts} />
      </Suspense>
    </div>
  );
};

export default User;
