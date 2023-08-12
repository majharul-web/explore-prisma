import { Response, Request } from "express";
import { UserService } from "./user.service";

const insertIntoDb = async (req: Request, res: Response) => {
  try {
    const result = await UserService.insertIntoDb(req.body);

    res.status(200).json({
      message: "User created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
const insertOrUpdateProfile = async (req: Request, res: Response) => {
  try {
    const result = await UserService.insertOrUpdateProfile(req.body);

    res.status(200).json({
      message: "Profile created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getUsers();
    res.send({
      succes: true,
      message: "data fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getSingleUser(parseInt(req.params.id));
    res.send({
      succes: true,
      message: "data fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

export const UserController = {
  insertIntoDb,
  insertOrUpdateProfile,
  getUsers,
  getSingleUser,
};
