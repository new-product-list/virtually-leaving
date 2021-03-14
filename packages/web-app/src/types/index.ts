export interface IRecord {
  sk_meta_message: string;
}

export interface IMessage extends IRecord {
  messageText: string;
}

export interface IBoard extends IRecord {
  headline: string;
}
