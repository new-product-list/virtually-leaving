import { DYNAMO_DB } from "./constants";

interface IBase {
  PK: string;
  SK: string;
}

interface IBoard extends IBase {
  headline: string;
  dateCreated: string;
}

interface IMessage extends IBase {
  messageText: string;
  dateCreated: string;
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

export const deleteMessageParams = (keyDetails: IBase) => {
  return {
    TableName: DYNAMO_DB.tableName,
    Key: {
      ...keyDetails,
    },
  };
};

export const queryParams = (pk_boardid: string) => {
  return {
    TableName: DYNAMO_DB.tableName,
    KeyConditionExpression: "PK = :hkey",
    ExpressionAttributeValues: {
      ":hkey": pk_boardid,
    },
  };
};
