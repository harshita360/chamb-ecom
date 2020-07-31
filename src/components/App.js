import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Search from "./Search";
import Pricing from "./Pricing";
import Howitworks from "./Howitworks";
import ProductDetails from "./ProductDetails";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/chamb/pricing" exact component={Pricing} />
          <Route path="/chamb/howitworks" exact component={Howitworks} />
          <Route path="/chamb/details/:id" exact component={ProductDetails} />
          <Search />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
