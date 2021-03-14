import React, { useState } from "react";
import { IMessage, IBoard, IRecord } from "../../types";
const META_ID = "board_meta";

export const useFetch = (url: string) => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [metaData, setMetaData] = useState<IBoard>();
  const [error, setError] = useState("");
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setMetaData(
          json.filter((rec: IRecord) => rec.sk_meta_message === META_ID)[0]
        );
        setMessages(
          json.filter((rec: IRecord) => rec.sk_meta_message !== META_ID)
        );
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [url]);
  return { messages, metaData, error };
};
