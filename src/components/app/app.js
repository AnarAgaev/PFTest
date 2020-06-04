import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "../footer";
import Header from "../header";
import Main from "../pages/main";
import PageNotFound from "../pages/page-not-found";
import Spinner from "../spinner";
import "./app.scss";

const App = () => {
  return (
    <>
      {/*<Header />*/}
      <main className="main">
        <Switch>
          <Route path="/" component={ Main } exact />
          <Route path="/page-not-found" component={ PageNotFound } />
          <Redirect to="/page-not-found" />
        </Switch>
      </main>
      {/*<Footer />*/}
      <Spinner />
    </>
  );
};

export default App;