import React, { lazy, Suspense, useState, useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName
} from "@material-ui/core/styles";
import { createBrowserHistory } from "history";

import Header from "./components/Header";
import Footer from "./components/Footer";

const MarketPlaceLazy = lazy(() => import("./components/MarketPlaceApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));
const HomeLazy = lazy(() => import("./components/HomeApp"));

const generateClassName = createGenerateClassName({
  productionPrefix: "host"
});

const history = createBrowserHistory();

// The host or the container app
export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push("/home/first");
    }
  }, [isSignedIn]);

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            onSignOut={() => setIsSignedIn(false)}
            isSignedIn={isSignedIn}
          />
          <Suspense fallback={<div>Loading....</div>}>
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path="/home">
                {!isSignedIn && <Redirect to="/" />}
                <HomeLazy />
              </Route>
              <Route path="/" component={MarketPlaceLazy} />
            </Switch>
          </Suspense>
          <Footer />
        </div>
      </StylesProvider>
    </Router>
  );
};
