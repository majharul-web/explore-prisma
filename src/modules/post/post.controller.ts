import { Request, Response } from "express";
import { PostService } from "./post.service";

const insertIntoDb = async (req: Request, res: Response) => {
  try {
    const result = await PostService.insertIntoDb(req.body);
    res.status(200).json({
      message: "Post added successfully",
      result: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const getAllPost = async (req: Request, res: Response) => {
  const options = req.query;
  try {
    const result = await PostService.getAllPost(options);
    res.status(200).json({
      message: "Post retrieved successfully",
      total: result.total,
      result: result.data,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const getSinglePost = async (req: Request, res: Response) => {
  try {
    const result = await PostService.getSinglePost(Number(req.params.id));
    res.status(200).json({
      message: "Post retrieved successfully",
      result: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const updatePostById = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    const result = await PostService.updatePostById(Number(req.params.id), data);
    res.status(200).json({
      message: "Post update successfully",
      result: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const deletePostById = async (req: Request, res: Response) => {
  try {
    const result = await PostService.deletePostById(Number(req.params.id));
    res.status(200).json({
      message: "Post deleted successfully",
      result: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};
const learnAggregateAndGrouping = async (req: Request, res: Response) => {
  try {
    const result = await PostService.learnAggregateAndGrouping();
    res.status(200).json({
      message: "Learn aggregate successfully",
      result: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const PostController = {
  insertIntoDb,
  getAllPost,
  getSinglePost,
  updatePostById,
  deletePostById,
  learnAggregateAndGrouping,
};
