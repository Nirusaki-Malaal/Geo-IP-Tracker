import "dotenv/config";
import express, { Request, Response }from "express"; // importing express
import rootRouter from './routes/root';
import cors from "cors";

const app = express(); // Express object
const PORT: number = 5000;

app.set('trust proxy', true); // Allow Proxies 
app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))
app.use('/api/getIp', rootRouter); // Routing 

app.listen(PORT , () => console.log(`listening at port ${PORT}`));