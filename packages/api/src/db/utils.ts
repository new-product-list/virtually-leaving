import { DYNAMO_DB } from "./constants";

interface IBase {
  pk_boardid: string;
  sk_meta_message: string;
  dateCreated: string;
}

interface IBoard extends IBase {
  headline: string;
}

interface IMessage extends IBase {
  messageText: string;
}

export const putBoardParams = (itemDetails: IBoard) => {
  return {
    TableName: DYNAMO_DB.tableName,
    Item: {
      ...itemDetails,
    },
  };
};

export const putMessageParams = (itemDetails: IMessage) => {
  return {
    TableName: DYNAMO_DB.tableName,
    Item: {
      ...itemDetails,
    },
  };
};

export const queryParams = (pk_boardid: string) => {
  return {
    TableName: DYNAMO_DB.tableName,
    KeyConditionExpression: "pk_boardid = :hkey",
    ExpressionAttributeValues: {
      ":hkey": pk_boardid,
    },
  };
};
