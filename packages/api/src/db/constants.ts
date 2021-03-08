const DEFAULT_REGION = "eu-west-2";
const DEFAULT_TABLENAME = "leaving-boards";

export const SK_MESSAGE_PREFIX = "message_";
export const SK_BOARD_META = "board_meta";

export const DYNAMO_DB = {
  region: process.env.DYNAMO_DB_REGION ?? DEFAULT_REGION,
  endpoint: process.env.DYNAMO_DB_ENDPOINT,
  tableName: process.env.DYNAMO_DB_TABLE_NAME ?? DEFAULT_TABLENAME,
};
