/*
1. Importing the BrowserRouter, Switch, and Route components from the react-router-dom package.
2. Importing the Navbar component from the Components folder.
3. Importing the Home and About components from the Components folder.
4. Creating the App component.
5. Creating the Router component.
6. Creating the Navbar component.
7. Creating the Switch component.
8. Creating the Route component.
9. Creating the Home component.
10. Creating the About component.
11. Returning the App component.
*/
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import NoteState from "./context/notes/NoteState";
import { Alert } from "./Components/Alert";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="Amazing!!!" />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
            </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
