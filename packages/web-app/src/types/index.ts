export interface IRecord {
  SK: string;
}

export interface IMessage extends IRecord {
  messageText: string;
}

export interface IBoard extends IRecord {
  headline: string;
}

export type ModalInputType = "INPUT" | "TEXTAREA";
