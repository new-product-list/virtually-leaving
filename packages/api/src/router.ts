import { Router } from "express";
import { getBoard } from "./controllers/get-board";
import { putBoard } from "./controllers/put-board";
import { putMessage } from "./controllers/put-message";

const router = Router();
router.get("/boards/:boardId", getBoard);
router.post("/boards", putBoard);
router.post("/boards/:boardId/messages", putMessage);
export default router;
