import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "../header";
import Main from "../pages/main";
import AddEmployee from "../pages/add-employee";
import EditEmployee from "../pages/edit-employee";
import PageNotFound from "../pages/page-not-found";
import Spinner from "../spinner";
import "./app.scss";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Switch>
          <Route path="/" component={ Main } exact />
          <Route path="/add-employee" component={ AddEmployee } />
          <Route path="/edit-employee/:id"
            render={({ match }) => {
              const { id } = match.params;
              return <EditEmployee employeeId={ id } />;
            }} />
          <Route path="/page-not-found" component={ PageNotFound } />
          <Redirect to="/page-not-found" />
        </Switch>
      </main>
      <Spinner />
    </>
  );
};

export default App;