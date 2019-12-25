import React,{Component} from 'react';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavVip,
  NavSearch,
  AddItion,
  Button
} from './style';

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo></Logo>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavVip></NavVip>
          <NavItem className="right">Aa</NavItem>
          <NavSearch></NavSearch>
          <AddItion>
            <Button className="writting">写文章</Button>
            <Button className="reg">注册</Button>
          </AddItion>
        </Nav>
      </HeaderWrapper>
    )
  }
}

export default Header;