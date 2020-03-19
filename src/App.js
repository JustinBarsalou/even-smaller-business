// this is my main app file
import React from 'react';
import './App.css';
import Nav from './components/navBar'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

//app component
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* this displays the nav bar across all routes */}
        {/* the router contents consist of the paths and componenets */}
        <Nav />
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;