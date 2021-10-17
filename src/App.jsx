import "./App.css";
import { Account } from "./Views/Account";
import { Transfers } from "./Views/Transfers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./Components/Header";
import { useState } from "react";

function App() {
  const [balances, setBalances] = useState({
    savings: 350,
    checking: -45.29,
  });

  return (
    <Router>
      <div>
        <Header></Header>
        <Switch>
          <Route path="/account">
            <Account balances={balances} />
          </Route>
          <Route path="/transfers">
            <Transfers balances={balances} setBalances={setBalances} />
          </Route>
          <Route path="/">
            <Account balances={balances} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
