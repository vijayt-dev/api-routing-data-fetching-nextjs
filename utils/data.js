let posts = [];

export const getPosts = () => posts;

export const setPosts = (post) => posts.push(post);

export const getById = (id) => {
  return posts.find((post) => post.id === id);
};

export const deletePost = (id) => {
  posts = posts.filter((post) => post.id !== id);
};

export const updatePost = (id, title) => {
  const post = posts.find((post) => post.id === id);
  if (post) {
    post.title = title;
  } else {
    throw new Error("NO POST FOUND");
  }
};
