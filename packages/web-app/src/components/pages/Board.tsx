import { useState } from "react";
import { Button, Card } from "design-system";
import { Modal } from "../ui/modal";
import { useBoardData } from "../hooks/useBoardData";
import { Link, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants";

function Board() {
  const [modal, setModal] = useState(false);
  const [reload, setReload] = useState(false);
  let { boardId } = useParams<{ boardId: string }>();

  const { messages, metaData, loading, error, post, del } = useBoardData(
    `${BASE_URL}/${boardId}`,
    reload
  );

  return (
    <div className="App-body">
      <Modal
        visible={modal}
        onCancel={() => {
          setModal(false);
        }}
        onSubmit={async (messageText) => {
          if (messageText === "") {
            alert("Please enter a value");
            return;
          }
          await post("/messages", { messageText });
          setModal(false);
          setReload(!reload);
        }}
      ></Modal>
      <p className="header">{metaData?.headline ?? "No data for board..."}</p>
      <div className="card-container">
        {messages.map((elem) => {
          return (
            <div key={elem.SK}>
              <Card bodyText={elem.messageText} />
              <Button
                size="small"
                backgroundColor="white"
                onClick={async () => {
                  await del("", { messageId: elem.SK });
                  setReload(!reload);
                }}
                label="Delete"
                disabled={loading}
              />
            </div>
          );
        })}
      </div>
      {metaData && (
        <Button
          size="large"
          label="Add message"
          backgroundColor="white"
          disabled={loading}
          onClick={() => setModal(true)}
        />
      )}
      <Link to="/">
        <Button size="large" label="Home" backgroundColor="white" />
      </Link>
      <div>{error}</div>
    </div>
  );
}

export default Board;
