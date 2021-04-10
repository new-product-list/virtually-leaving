import { Response, Request } from "express";
import { putBoard } from "../put-board";
import { db } from "../../db/client";
import { SK_BOARD_META } from "../../db/constants";
jest.mock("../../db/client");

const baseMockReq = {
  body: { headline: "bob is leaving" },
};
const baseMockRes = {
  status: jest.fn(),
  json: jest.fn(),
};

describe("getBoard controller", () => {
  it("valid request should call put with correct params", async () => {
    const mockRes: Partial<Response> = {
      ...baseMockRes,
    };

    const mockReq: Partial<Request> = {
      ...baseMockReq,
    };

    await putBoard(mockReq as Request, mockRes as Response, jest.fn());
    expect(mockRes.status).toHaveBeenCalledWith(200);
    const itemDetails = {
      SK: SK_BOARD_META,
      headline: baseMockReq.body.headline,
    };
    // We have dynamic id and date generate so we do a partial match
    expect(db.put).toHaveBeenCalledWith(
      expect.objectContaining({ Item: expect.objectContaining(itemDetails) })
    );
    expect(db.put).toBeCalledTimes(1);
  });
});
