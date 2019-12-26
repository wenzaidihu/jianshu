import React,{Component} from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux'
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

const Header = (props) => {
  return(
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <NavItem className="right">登录</NavItem>
        <NavVip></NavVip>
        <NavItem className="right">
          <span className="iconfont">&#xe636;</span>
        </NavItem>
        <SearWrapper>
          <CSSTransition
            in={props.focused}
            timeout={200}
            classNames="slide"
          >
            <NavSearch
              className={props.focused ? 'focused': ''}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <span className={props.focused ? 'focused iconfont': 'iconfont'}>&#xe6e4;</span>
        </SearWrapper>
      </Nav>
      <AddItion>
        <Button className="writting">
          <span className="iconfont">&#xe615;</span>
          写文章
        </Button>
        <Button className="reg">注册</Button>
      </AddItion>
    </HeaderWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    focused: state.focused
  }
}

const mapDispathToProps = (dispath) => {
  return {
    handleInputFocus() {
      const action = {
        type: 'search-focus'
      };
      dispath(action);
    },
    handleInputBlur() {
      const action = {
        type: 'search-blur'
      };
      dispath(action);
    }
  }
}

export default connect(mapStateToProps,mapDispathToProps)(Header);