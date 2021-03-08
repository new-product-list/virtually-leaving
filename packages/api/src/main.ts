import serverless from "serverless-http";
import { Context, APIGatewayProxyEvent } from "aws-lambda";
import server from "./server";

export const handler = serverless(
  (server as unknown) as serverless.Application
);

export const app = async (event: APIGatewayProxyEvent, context: Context) =>
  handler(event, context);
