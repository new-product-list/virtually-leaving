import { Response, Request, NextFunction } from "express";
import { putMessageParams } from "../db/utils";
import { db } from "../db/client";
import { generate } from "shortid";
import { SK_MESSAGE_PREFIX } from "../db/constants";

// Controller for put-message
// Create a message on a board
export const putMessage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { messageText } = req.body;
    if (
      typeof messageText === undefined ||
      typeof req.params.boardId === undefined
    ) {
      throw new Error("Incorrect paramaters");
    }

    const id = generate();
    const itemDetails = {
      pk_boardid: req.params.boardId,
      sk_meta_message: `${SK_MESSAGE_PREFIX}${id}`,
      messageText,
      dateCreated: new Date().toISOString(),
    };

    await db.put(putMessageParams(itemDetails)).promise();

    res.status(200);
    res.json({ id });
  } catch (error) {
    console.log("err: ", error);
    res.status(error.status ?? 400);
    res.json({
      error: `Error: ${error.message}`,
    });
  }
};
