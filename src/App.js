import logo from "./logo.svg";
import "./App.css";
import Home from "./component/Home";
import Nav from "./component/Nav";
import Tentang from "./component/Tentang";
import Gallery from "./component/Gallery";
import Contact from "./component/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Tentang" component={Tentang} />
          <Route path="/Gallery" component={Gallery} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
