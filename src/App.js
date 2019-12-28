import React from 'react';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';
import { GlobalStyleFont } from './statics/iconfont/iconfont'
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header/index';
import Home from './pages/home';
import Detail from './pages/detail';
import store from './store';

function App() {
  return (
    <div>
      <GlobalStyle />
      <GlobalStyleFont />
      <Provider store={store}>
        <Header />
        <BrowserRouter>
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail' exact component={Detail}></Route>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
