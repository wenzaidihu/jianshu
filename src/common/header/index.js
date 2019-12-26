import React,{Component} from 'react';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavVip,
  NavSearch,
  AddItion,
  Button,
  SearWrapper
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
          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearWrapper>
            <NavSearch></NavSearch>
            <span className="iconfont">&#xe6e4;</span>
          </SearWrapper>
          <AddItion>
            <Button className="writting">
              <span className="iconfont">&#xe615;</span>
              写文章
            </Button>
            <Button className="reg">注册</Button>
          </AddItion>
        </Nav>
      </HeaderWrapper>
    )
  }
}

export default Header;