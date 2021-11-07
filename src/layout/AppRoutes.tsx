import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ListItems from '../components/ListItems';

const AppRoutes = (props: any) => {
  return (
    <>
      <Switch>
        <Route exact path="/" render={props => <ListItems />} />
      </Switch>
    </>
  );
};

export default AppRoutes;
