import React from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';
import { GlobalStyleFont } from './statics/iconfont/iconfont'
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header/index';
import Home from './pages/home';
import Detail from './pages/detail/index';
import Login from './pages/login';
import Write from './pages/write';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <GlobalStyleFont />
      <BrowserRouter>
        <Header />
        <Route path='/' exact component={Home}></Route>
        <Route path='/login' exact component={Login}></Route>
        <Route path='/write' exact component={Write}></Route>
        <Route path='/detail/:id' exact component={Detail}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
