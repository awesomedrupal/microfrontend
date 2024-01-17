import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import ChartComponent from "./components/ChartComponent";
import ClientComponent from "./components/ClientComponent";
import {
  StylesProvider,
  createGenerateClassName
} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({
  productionPrefix: "home"
});

export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/home/second" component={ChartComponent} />
            <Route path="/home/first" component={ClientComponent} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
