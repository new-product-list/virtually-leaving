import React from "react";
import { Button } from "design-system";
import { Card } from "./components/ui/card";
import { useFetch } from "./components/hooks/useFetch";
import "./App.css";
import "design-system/dist/index.css";

const URL = "http://localhost:3000/local/boards/xtr229f2n";

function App() {
  const { messages, metaData } = useFetch(URL);

  return (
    <div className="App">
      <div className="App-body">
        <p className="header">{metaData?.headline}</p>
        <div className="card-container">
          {messages.map((elem, i) => {
            return <Card key={i} bodyText={elem.messageText} />;
          })}
        </div>
        <Button size="large" label="Add message" backgroundColor="white" />
      </div>
    </div>
  );
}

export default App;
