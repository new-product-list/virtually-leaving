import { Response, Request } from "express";
import { getBoard } from "../get-board";
import { db } from "../../db/client";
import { queryParams } from "../../db/utils";
jest.mock("../../db/client");

const baseMockReq = { params: { boardId: "board123" } };
const baseMockRes = {
  status: jest.fn(),
  json: jest.fn(),
};

describe("getBoard controller", () => {
  it("valid request should call query with correct params", async () => {
    const mockRes: Partial<Response> = {
      ...baseMockRes,
    };

    const mockReq: Partial<Request> = {
      ...baseMockReq,
    };

    await getBoard(mockReq as Request, mockRes as Response, jest.fn());
    expect(mockRes.status).toHaveBeenCalledWith(400);
    const params = queryParams(baseMockReq.params.boardId);
    expect(db.query).toHaveBeenCalledWith(params);
  });
});
