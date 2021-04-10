import { Response, Request } from "express";
import { deleteMessage } from "../delete-message";
import { db } from "../../db/client";
jest.mock("../../db/client");

const baseMockReq = {
  params: { boardId: "board123" },
  body: { messageId: "message_id" },
};
const baseMockRes = {
  status: jest.fn(),
  json: jest.fn(),
};

describe("deleteMessage controller", () => {
  it("valid request should call put with correct params", async () => {
    const mockRes: Partial<Response> = {
      ...baseMockRes,
    };

    const mockReq: Partial<Request> = {
      ...baseMockReq,
    };

    await deleteMessage(mockReq as Request, mockRes as Response, jest.fn());
    expect(mockRes.status).toHaveBeenCalledWith(200);
    const itemDetails = {
      PK: baseMockReq.params.boardId,
      SK: baseMockReq.body.messageId,
    };
    // We have dynamic id and date generate so we do a partial match
    expect(db.delete).toHaveBeenCalledWith(
      expect.objectContaining({ Key: expect.objectContaining(itemDetails) })
    );
    expect(db.delete).toBeCalledTimes(1);
  });
});
