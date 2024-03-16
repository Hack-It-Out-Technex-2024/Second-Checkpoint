import { Router } from "express";
import { get, purchase, sell } from "../controllers/controllers.js";

const router = Router();

router.get("/", get);

router.post("/sell", sell);

router.get("/purchase", purchase);

export default router;
