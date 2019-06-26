import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Main } from "./Components/Main";
import About from "./Components/About";
import Gallery from "./Components/Gallery";
import SiberianProd from "./Components/SiberianProd";
import MakeQuerry from "./Components/MakeQuerry";
import { Contacts } from "./Components/Contacts";
import { PageError } from "./Components/PageError";

import { Layout } from "./Components/Stylecom/Layout";
import { NaviBar } from "./Components/NaviBar";
import { Jumbotron } from "./Components/Stylecom/Jumbotron";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NaviBar />
        <Jumbotron />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/about" component={About} />
              <Route path="/siberianproducts" component={SiberianProd} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/contacts" component={Contacts} />
              <Route path="/makeaninquiry" component={MakeQuerry} />
              <Route component={PageError} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
