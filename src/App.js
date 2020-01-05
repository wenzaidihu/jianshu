import React from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';
import { GlobalStyleFont } from './statics/iconfont/iconfont'
import { HashRouter, Route } from 'react-router-dom';
import Header from './common/header/index';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';
import store from './store';

// BrowserRouter: http://localhost:3000/login
// HashRouter: http://localhost:3000/#/login
function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <GlobalStyleFont />
      <HashRouter>
        <Header />
        <Route path='/' exact component={Home}></Route>
        <Route path='/login' exact component={Login}></Route>
        <Route path='/write' exact component={Write}></Route>
        <Route path='/detail/:id' exact component={Detail}></Route>
      </HashRouter>
    </Provider>
  );
}

export default App;
