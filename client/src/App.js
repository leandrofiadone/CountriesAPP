import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';
import CountryDetail from './components/CountryDetail/CountryDetail';
import ActivityCreation from './components/Activity/ActivityCreation';

import css from './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <div className={css.app}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/countries" component={Home} />
          <Route path="/countries/:idPais" component={CountryDetail} />
          <Route path="/activity" component={ActivityCreation} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
