let posts = [];

export const getPosts = () => posts;

export const setPosts = (post) => posts.push(post);

export const getById = (id) => {
  console.log(posts, 'posts');
  return posts.find((post) => post.id === id);
};
