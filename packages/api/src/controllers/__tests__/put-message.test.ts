import { Response, Request } from "express";
import { putMessage } from "../put-message";
import { db } from "../../db/client";
jest.mock("../../db/client");

const baseMockReq = {
  params: { boardId: "board123" },
  body: { messageText: "good luck bob" },
};
const baseMockRes = {
  status: jest.fn(),
  json: jest.fn(),
};

describe("getCourse controller", () => {
  it("valid request should call put with correct params", async () => {
    const mockRes: Partial<Response> = {
      ...baseMockRes,
    };

    const mockReq: Partial<Request> = {
      ...baseMockReq,
    };

    await putMessage(mockReq as Request, mockRes as Response, jest.fn());
    expect(mockRes.status).toHaveBeenCalledWith(200);
    const itemDetails = {
      pk_boardid: baseMockReq.params.boardId,
      messageText: baseMockReq.body.messageText,
    };
    // We have dynamic id and date generate so we do a partial match
    expect(db.put).toHaveBeenCalledWith(
      expect.objectContaining({ Item: expect.objectContaining(itemDetails) })
    );
    expect(db.put).toBeCalledTimes(1);
  });
});
