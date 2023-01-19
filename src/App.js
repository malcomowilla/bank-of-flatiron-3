import React, { Component } from "react";
import "../stylesheets/App.css";

// components
import AccountContainer from "./AccountContainer";

class App extends Component {
  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        {/* AccountContainer component */}
        <AccountContainer />
      </div>
    );
  }
}

export default App;
