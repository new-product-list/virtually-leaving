import { Response, Request, NextFunction } from "express";
import { db } from "../db/client";
import { queryParams } from "../db/utils";

// Controller for get-board
// Returns metadata for the board and all its messages
export const getBoard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (typeof req.params.boardId === undefined) {
      throw new Error("Incorrect paramaters");
    }

    const pk_boardid = req.params.boardId;
    const boardResult = await db.query(queryParams(pk_boardid)).promise();

    if (boardResult.Items === undefined) {
      throw new Error("Data not found");
    }

    res.status(200);
    res.json(boardResult.Items);
  } catch (error) {
    res.status(error.status ?? 400);
    res.json({
      error: `Error: ${error.message}`,
    });
  }
};
