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
        {/* this displays the nav bar, and router contents */}
        {/* the router contents consist of the paths */}
        <Nav />
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;