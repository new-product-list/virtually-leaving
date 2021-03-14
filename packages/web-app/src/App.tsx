import React, { useEffect, useState } from "react";
import { Button, Card } from "design-system";
import { Modal } from "./components/ui/modal";
import useFetch, { FetchData } from "use-http";
import { IMessage, IBoard, IRecord } from "./types";
import "./App.css";
import "design-system/dist/index.css";

const URL = "http://localhost:3000/local/boards/eOcOYjgYS";
const META_ID = "board_meta";

const postData = async (post: FetchData, data: object) => {
  const resp = await post("/messages", data);
  console.log("posted data: ", resp);
};

function App() {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [metaData, setMetaData] = useState<IBoard>();
  const [modal, setModal] = useState(false);
  const { get, post, cache, loading, error } = useFetch(URL);

  useEffect(() => {
    (async () => {
      const data = await get("/");
      if (data) {
        setMetaData(
          data.filter((rec: IRecord) => rec.sk_meta_message === META_ID)[0]
        );
        setMessages(
          data.filter((rec: IRecord) => rec.sk_meta_message !== META_ID)
        );
        cache.clear();
      }
    })();
  }, [get, modal, cache]);

  return (
    <div className="App">
      <div className="App-body">
        <Modal
          visible={modal}
          onCancel={() => {
            setModal(false);
          }}
          onSubmit={async (messageText) => {
            await postData(post, { messageText });
            setModal(false);
          }}
        ></Modal>
        <p className="header">{metaData?.headline}</p>
        <div className="card-container">
          {messages.map((elem, i) => {
            return <Card key={i} bodyText={elem.messageText} />;
          })}
        </div>
        {!loading && (
          <Button
            size="large"
            label="Add message"
            backgroundColor="white"
            onClick={() => setModal(true)}
          />
        )}
        <div>{error}</div>
      </div>
    </div>
  );
}

export default App;
