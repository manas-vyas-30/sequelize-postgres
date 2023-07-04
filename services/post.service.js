const db = require("../db.config");
const Post = db.posts;

const findAllPosts = () => Post.findAll();

const createPost = (message, userId) => Post.create({ message, userId });

module.exports = {
  findAllPosts,
  createPost,
};
