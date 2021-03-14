import React, { useEffect, useState } from "react";
import { Button, Card } from "design-system";
import { Modal } from "./components/ui/modal";
import useFetch from "use-http";
import { IMessage, IBoard, IRecord } from "./types";
import "./App.css";
import "design-system/dist/index.css";

const URL = "http://localhost:3000/local/boards/eOcOYjgYS";
const META_ID = "board_meta";

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
            await post("/messages", { messageText });
            setModal(false);
          }}
        ></Modal>
        <p className="header">Title: {metaData?.headline}</p>
        <div className="card-container">
          {messages.map((elem) => {
            return (
              <Card key={elem.sk_meta_message} bodyText={elem.messageText} />
            );
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
