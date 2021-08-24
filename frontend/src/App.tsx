import React, { FC } from 'react';
import Main from './pages/main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import { MeProvider } from './contexts';

const App: FC = () => {
  return (
    <MeProvider>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
        </Layout>
      </Router>
    </MeProvider>
  );
};

export default App;
