import express, { Application } from "express";
import cors from "cors";
import { UserRoutes } from "./modules/user/user.route";
import { CategoryRoutes } from "./modules/category/category.route";
import { PostRoutes } from "./modules/post/post.route";
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/users", UserRoutes);
app.use("/api/v1/categories", CategoryRoutes);
app.use("/api/v1/posts", PostRoutes);

export default app;
