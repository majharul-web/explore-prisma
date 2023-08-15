import express from "express";
import { PostController } from "./post.controller";

const router = express.Router();
router.get("/learn-query", PostController.learnAggregateAndGrouping);
router.get("/", PostController.getAllPost);
router.get("/:id", PostController.getSinglePost);
router.patch("/:id", PostController.updatePostById);
router.delete("/:id", PostController.deletePostById);
router.post("/create-post", PostController.insertIntoDb);

export const PostRoutes = router;
