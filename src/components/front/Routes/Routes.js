import React from 'react';
import Products from '../Products/Products';
import { Route, Switch } from "react-router-dom";

const Routes = ({ ProductItems }) => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Products ProductItems={ProductItems} />
        </Route>
      </Switch>
    </div>
  )
}

export default Routes