const { Router } = require("express");
const { addPost, findPosts } = require("../controllers/post.controller");

const router = Router();

router.get("/", findPosts);
router.post("/add", addPost);

module.exports = router;
