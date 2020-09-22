import React from 'react';
//importo componentes
import Search from './Components/Search';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MoviesCard from './Components/MoviesCard';
import Header from './Components/Header';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Switch>
            <Route exact path="/">
              <Search />
            </Route>
            <Route path="/:id">
              <MoviesCard />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
