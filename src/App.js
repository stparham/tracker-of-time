import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import StartActivity from './StartActivity';
import CurrentActivity from './CurrentActivity';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tracker of Time</h1>
      </header>
      <Switch>
        <Route exact path="/" component={StartActivity} />
        <Route
          path="/active"
          render={
            props => <CurrentActivity {...props} activity={{id: 0, title: 'Entertainment'}} />
          }
        />
        {/* when none of the above match, <NoMatch> will be rendered */}
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  );
}

export default App;
