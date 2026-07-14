import "dotenv/config";
import express, { Request, Response }from "express"; // importing express
import authRouter from './routes/auth';
import rootRouter from './routes/root';
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express(); // creating express object
const PORT: number = 5000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))
app.use('/', rootRouter);
app.use('/auth', authRouter);
app.listen(PORT , () => console.log(`listening at port ${PORT}`));