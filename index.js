import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import errorHandler from "./src/middlewares/error.middleware.js";
import AppError from "./src/utils/app_error.js";
import { STATUS_CODES } from "./src/utils/enums.js";
import inspectorRoutes from "./src/routes/inspector.routes.js";
import swaggerDocs from "./src/config/swagger.js";
import connectDB from "./src/config/db.js";
import authRouter from "./src/routes/auth.routes.js";
import { authenticateUser } from "./src/middlewares/authenticate.middleware.js";
import userRouter from "./src/routes/user.route.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/inspector", inspectorRoutes);
app.use("/api/auth", authRouter);
app.use("/api/user", authenticateUser, userRouter);
swaggerDocs(app);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  connectDB();
  console.log(`Server started on the  port ${process.env.PORT}`);
});
