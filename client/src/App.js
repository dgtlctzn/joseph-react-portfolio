import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./containers/About/About";
import Projects from "./containers/Projects/Projects";
import Contact from "./containers/Contact/Contact";
import Nav from "./components/Nav/Nav"
import Foot from "./components/Foot/Foot"

function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Foot/>
    </Router>
  );
}

export default App;
