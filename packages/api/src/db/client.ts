import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { DYNAMO_DB } from "./constants";

type DbParams = {
  region: string;
  endpoint?: string;
};

const params: DbParams = {
  region: DYNAMO_DB.region,
};

if (DYNAMO_DB.endpoint) {
  params.endpoint = DYNAMO_DB.endpoint;
}

export const db = new DocumentClient({ ...params, convertEmptyValues: true });
