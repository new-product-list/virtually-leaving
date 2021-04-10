import { Router } from "express";
import { getBoard } from "./controllers/get-board";
import { putBoard } from "./controllers/put-board";
import { deleteMessage } from "./controllers/delete-message";
import { putMessage } from "./controllers/put-message";

const router = Router();
router.get("/boards/:boardId", getBoard);
router.delete("/boards/:boardId", deleteMessage);
router.post("/boards", putBoard);
router.post("/boards/:boardId/messages", putMessage);
export default router;
