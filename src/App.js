import React from "react";
import "./App.css";
// Redux secction
import store from "./redux/mainStore";
import { Provider } from "react-redux";
// Router secction
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
// Internal components
import NavBar from "./components/NavBar/NavBar";
import Body from "./views/Body";

const history = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router history={history}>
            {/* Navbar secction */}
            <NavBar history={this.props} />
            {/* Body seccion */}
            <Body />
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
