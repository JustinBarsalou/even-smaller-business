//this is my router
import React from 'react'
import { Switch, Route } from 'react-router'
import Listings from './containers/listings'
import Details from './containers/details'
import Access from './containers/access'

const Router = () => {
    return (
        <Switch>
          {/* these are the paths the user has access to */}
          {/* listings content, referencing listings component */}
          <Route path="/Listings" component={Listings} />
          {/* detail content, refrencing the specific listing clicked on */}
			    <Route path="/place/:id" component={Details} />
          {/* login content, referencing the login component */}
		      <Route path="/access" component={Access} />
        </Switch>
    );
};

export default (Router);