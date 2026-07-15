import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    try 
    {
    // CONSTANT
    const ip: string = req.ip ?? "UNKNOWN"; // null check
    const date: Date = new Date();
    const json = { status: ip };
    const dateString : String = `${date.getDay()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`

    console.log(`[IP] ${ip} [TIME] ${dateString}`); // We Have To Enforce IPV4 or IPV6 in the frontend and make two calls
    
    return res.status(200).json({ json });
    }
    catch (error)
    {
        return res.status(400).json({"error" : String(error)});
    }
});

export default router;
