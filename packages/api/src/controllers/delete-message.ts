import { Response, Request, NextFunction } from "express";
import { deleteMessageParams } from "../db/utils";
import { db } from "../db/client";
import { SK_MESSAGE_PREFIX } from "../db/constants";

// Controller for delete-message
// Delete a message on a board
export const deleteMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { messageId } = req.body;
    if (
      typeof messageId === undefined ||
      typeof req.params.boardId === undefined ||
      !messageId.startsWith(SK_MESSAGE_PREFIX)
    ) {
      throw new Error("Incorrect paramaters");
    }

    const keyDetails = {
      PK: req.params.boardId,
      SK: messageId,
    };

    await db.delete(deleteMessageParams(keyDetails)).promise();

    res.status(200);
    res.json({ messageId });
  } catch (error) {
    console.log("err: ", error);
    res.status(error.status ?? 400);
    res.json({
      error: `Error: ${error.message}`,
    });
  }
};
