import React, { Suspense } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import { mainRoutes } from "../../routes/mainroutes";

const Navigation = () => {
  return (
    <>
      <ul className='list right'>
        {mainRoutes.map(({ path, name, exact }) => (
          <li className='listItem' key={path}>
            <NavLink
              to={path}
              exact={exact}
              className='link'
              activeClassName='activeLink'>
              {name.toUpperCase()}
            </NavLink>
          </li>
        ))}
      </ul>
      <Suspense fallback={<h2>...loading</h2>}>
        <Switch>
          {mainRoutes.map(({ path, exact, component }) => (
            <Route path={path} exact={exact} component={component} key={path} />
          ))}
        </Switch>
      </Suspense>
    </>
  );
};

export default Navigation;
