import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router,Switch,Route}
from "react-router-dom" ;
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HSlBcJKCsA9cpy0ux0ohNOc6ltV7iuywbCz3C20lsaLNO1tsUDAtOO3lo2tSYzDP6YhQLJEt2TfcVCunXcmeHsO008trTYFcy"
);

function App() {
  const [{}, dispatch ] = useStateValue();

  useEffect(() => {
    //will only run when the app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>>' , authUser);

      if(authUser){
        //the user just logged in  / the user was logged in

        dispatch({
          type: `SET_USER`,
          user: authUser
        })
      }
      else{
        //the user is logged out
        dispatch({
          type: `SET_USER`,
          user: null
        })
      }
    })
  }, [])

  return (
    //BEM naming convention
    <Router>
      <div className="app">
        <Switch>

          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
