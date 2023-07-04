const { createPost, findAllPosts } = require("../services/post.service");

const findPosts = async (req, res) => {
  try {
    const data = await findAllPosts();
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

const addPost = async (req, res) => {
  try {
    const data = await createPost(req.body.message, req.body.userId || null);
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, msg: error.message });
  }
};

module.exports = {
  findPosts,
  addPost,
};
