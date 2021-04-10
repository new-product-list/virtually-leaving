import { useState, useEffect } from "react";
import { IMessage, IBoard, IRecord } from "../../types";
import useFetch from "use-http";
const META_ID = "board_meta";

export const useBoardData = (url: string, reload: boolean) => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [metaData, setMetaData] = useState<IBoard>();
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const { get, post, cache, loading, error, del } = useFetch(url, options);
  console.log("hook...");

  useEffect(() => {
    (async () => {
      const data = await get("/");
      if (data) {
        cache.clear();
        console.log("cache cleared: ", data.length);
        setMetaData(data.filter((rec: IRecord) => rec.SK === META_ID)[0]);
        setMessages(data.filter((rec: IRecord) => rec.SK !== META_ID));
      }
    })();
  }, [get, cache, reload]);
  return { messages, metaData, loading, error, post, del };
};
