import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <h1>My Loves</h1>
        <p>
          Eu tenho 2 dogs, qual gostaria de saber mais?
        </p>
        <nav>
          <ul>
            <li>
              <Link to="/louis">Louis</Link>
            </li>
            <li>
              <Link to="/lord">Lord</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/louis">
            <Louis />
          </Route>
          <Route path="/lord">
            <Lord />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function Louis() {
  return(
    <div>
      <h2>LOUIS</h2>
      Idade: 4 anos<br /> 
      Peso: 18,3<br />
      Temperamento: Mandona, ciumenta e super amorosa <br />
      <img src="louis.jpg" alt="" />
    </div>
  );
}

function Lord() {
  return (
    <div>
      <h2>LORD</h2>
      Idade: 4 anos <br />
      Peso: 17,7 <br />
      Temperamento: Brincalhão, aventureiro e lindo <br />
      <img src="lord.jpg" alt=""></img>
    </div>
  );
}