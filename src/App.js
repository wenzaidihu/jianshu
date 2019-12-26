import React from 'react';
import { GlobalStyle } from './style'
import { GlobalStyleFont } from './statics/iconfont/iconfont'
import Header from './common/header/index'

function App() {
  return (
    <div>
      <GlobalStyle />
      <GlobalStyleFont />
      <Header />
    </div>
  );
}

export default App;
