import { useState } from "react";
import { Button } from "design-system";
import { useHistory } from "react-router-dom";
import { useCreateBoard } from "../hooks/useCreateBoard";
import { Modal } from "../ui/modal";
import { Step } from "../ui/step";
import { BASE_URL, INPUT_FIELD_TYPE, URL_PREFIX } from "../../constants";

const copyUrl = (boardId: string) => {
  const dummy = document.createElement("input");
  document.body.appendChild(dummy);
  dummy.value = `${URL_PREFIX}${boardId}`;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
};

function Home() {
  const [modal, setModal] = useState(false);
  const [boardId, setBoardId] = useState(null);
  const history = useHistory();
  const { post } = useCreateBoard(BASE_URL);

  return (
    <div className="App-body">
      <p className="header">{"Welcome to virtuallyleaving.com"}</p>
      {!boardId && (
        <div>
          <div className="info-box">
            You can setup a message board in 3 easy steps...
          </div>
          <div className="info-box">
            <Step number="1" /> Create a board with a headline
          </div>
          <div className="info-box">
            <Step number="2" /> Copy the url that is generated for the message
            board.
          </div>
          <div className="info-box">
            <Step number="3" /> Send the url to your friends so they can add a
            message.
          </div>
          <Modal
            visible={modal}
            placeholder="enter board headline"
            fieldType={INPUT_FIELD_TYPE}
            onCancel={() => {
              setModal(false);
            }}
            onSubmit={async (headline) => {
              if (headline === "") {
                alert("Please enter a value");
                return;
              }
              const resp = await post("/", { headline });
              setBoardId(resp.id);
              setModal(false);
            }}
          ></Modal>
          <Button
            size="large"
            label="Create Board"
            backgroundColor="white"
            onClick={() => setModal(true)}
          />
        </div>
      )}
      {boardId && (
        <div>
          <div className="info-box">
            <Step number="→" /> {URL_PREFIX}
            {boardId}
          </div>
          <Button
            size="large"
            label="Go to board"
            backgroundColor="white"
            onClick={() => history.push(`/board/${boardId}`)}
          />
          <Button
            size="large"
            label="Copy URL to clipboard"
            backgroundColor="white"
            onClick={() => copyUrl(boardId || "")}
          />
        </div>
      )}
    </div>
  );
}

export default Home;
