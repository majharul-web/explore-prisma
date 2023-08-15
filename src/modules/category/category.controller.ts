import { Request, Response } from "express";
import { CategoryService } from "./category.service";

const insertIntoDb = async (req: Request, res: Response) => {
  try {
    const result = await CategoryService.insertIntoDb(req.body);
    res.status(200).json({
      message: "Category added successfully",
      result: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const CategoryController = {
  insertIntoDb,
};
