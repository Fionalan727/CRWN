import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.scss';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component"
import SignInAndSignUpPage from './pages/sign-in-and-sing-up/sign-in-and-sing-up.component';
import Header from './components/header/header.component';
import { auth } from "./firebase/firebase.utils"

class App extends React.component{
  constructor(){
    super();

    this.state ={
      currentUser : null
    }
  }
  
   componentDidMount(){
     auth.onAuthStateChanged(user => {
       this.setState({currentUser : user})
     })
   }

  render(){
    return (
      <div className='App'>
      <Header />
      <Switch>
        <Route exact path ='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
        
      </div>
    );
  } 
}


export default App;
