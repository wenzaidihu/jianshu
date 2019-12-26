import React from 'react';
import { Provider } from 'react-redux'
import { GlobalStyle } from './style'
import { GlobalStyleFont } from './statics/iconfont/iconfont'
import Header from './common/header/index'
import store from './store'

function App() {
  return (
    <div>
      <GlobalStyle />
      <GlobalStyleFont />
      <Provider store={store}>
        <Header />
      </Provider>
    </div>
  );
}

export default App;
