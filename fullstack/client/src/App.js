import './App.css';
import { useState } from 'react';
import { Switch,Route,useHistory,Link } from 'react-router-dom';

import AddProductForm from './components/views/AddProductForm';
import Home from './components/views/Home';


function App() {

  return (
    <div className="App">
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/addProduct">Creat Product</Link>
      </nav>
      
      
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/addProduct">
            <AddProductForm />
          </Route>

        </Switch>


      <footer>
        Footer
      </footer>
    </div>
  );
}

export default App;
