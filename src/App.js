import ContactsContainer from "./containers/ContactsContainer/index";
import { Router, Route } from "react-router-dom";
import history from "./history";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Route path="/home" component={ContactsContainer} />
        <Route path="/" component={ContactsContainer} />
      </Router>
    </div>
  );
}

export default App;
