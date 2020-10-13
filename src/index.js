import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider, connect } from "react-redux";
import store from "./state/store";
import { bindActionCreators } from "redux";
import getStationsAction from "./middleware/getStations";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => bindActionCreators({
  getStations: getStationsAction,
  dispatch: dispatch,
}, dispatch);

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
