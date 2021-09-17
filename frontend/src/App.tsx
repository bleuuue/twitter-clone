import React, { FC } from 'react';
import Main from './pages/main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/common/Layout';
import { MeProvider } from './contexts';
import Profile from './pages/profile/profile';
import { ToastContainer } from 'react-toastify';
import Followers from './pages/profile/followers';
import Followings from './pages/profile/followings';

const App: FC = () => {
  return (
    <div
      className={`${
        process.env.NODE_ENV !== 'production' ? 'debug-screens' : ''
      }`}
    >
      <MeProvider>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/profile/:userId" component={Profile} />
              <Route
                exact
                path="/profile/:userId/followers"
                component={Followers}
              />
              <Route
                exact
                path="/profile/:userId/followings"
                component={Followings}
              />
            </Switch>
          </Layout>
        </Router>
        <ToastContainer />
      </MeProvider>
    </div>
  );
};

export default App;
