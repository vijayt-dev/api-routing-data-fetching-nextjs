const UserPost = async ({ posts }) => {
  const postData = await posts;
  console.log(postData);
  return (
    <div>
      <ul>
        {postData.map((post) => {
          return (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserPost;
