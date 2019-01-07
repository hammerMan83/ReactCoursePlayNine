import React from "react";
import ReactDOM from "react-dom";
import FontAwesomeIcon from "react-fontawesome";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

var FontAwesome = require("react-fontawesome");

const Stars = props => {
  return (
    <div className="col-5">
      <FontAwesome name="star" />
      <FontAwesome name="star" />
      <FontAwesome name="star" />
      <FontAwesome name="star" />
      <FontAwesome name="star" />
    </div>
    // <div className="col-5">
    //   <FontAwesome className="fa fa-star" />
    //   <FontAwesome className="fa fa-star" />
    //   <FontAwesome className="fa fa-star" />
    //   <FontAwesome className="fa fa-star" />
    //   <FontAwesome className="fa fa-star" />
    // </div>
  );
};

const Button = props => {
  return (
    <div className="col-2">
      <button>=</button>
    </div>
  );
};

const Answer = props => {
  return <div className="col-5">...</div>;
};

const Numbers = props => {
  return (
    <div className="card text-center">
      <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </div>
    </div>
  );
};

class Game extends React.Component {
  render() {
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Stars />
          <Button />
          <Answer />
        </div>
        <br />
        <Numbers />
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Game />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
