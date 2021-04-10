import Board from "./components/pages/Board";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "design-system/dist/index.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/board/:boardId">
            <Board />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
