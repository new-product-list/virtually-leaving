import { Response, Request, NextFunction } from "express";
import { putBoardParams } from "../db/utils";
import { db } from "../db/client";
import { generate } from "shortid";
import { SK_BOARD_META } from "../db/constants";

// Controller for put-board
// Create a board with attributes
export const putBoard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { headline } = req.body;
    if (typeof headline === undefined) {
      throw new Error("Incorrect paramaters");
    }

    const pk_boardid = generate();
    const itemDetails = {
      pk_boardid,
      sk_meta_message: SK_BOARD_META,
      headline,
      dateCreated: new Date().toISOString(),
    };

    await db.put(putBoardParams(itemDetails)).promise();

    res.status(200);
    res.json({ id: pk_boardid });
  } catch (error) {
    console.log("err: ", error);
    res.status(error.status ?? 400);
    res.json({
      error: `Error: ${error.message}`,
    });
  }
};
