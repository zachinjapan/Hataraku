// ES6 styling
import express from "express";
const app = express();

//env
import dotenv from "dotenv";
dotenv.config();

//express error package
import "express-async-errors";

//morgan (used for logging requests)
import morgan from "morgan";

// db and authentication
import connectDB from "./db/connect.js";

//routers
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";

//middleware for if the route is not found
notFoundMiddleware;
import notFoundMiddleware from "./middleware/not-found.js";
//middleware for if there is an error within a valid addresses
errorHandlerMiddleware;
import errorHandlerMiddleware from "./middleware/error-handler.js";
//authetnication after login
import authenticateUser from "./middleware/auth.js";

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "Hello World" });
});

app.get("/api/v1", (req, res) => {
  res.send({ message: "API" });
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
