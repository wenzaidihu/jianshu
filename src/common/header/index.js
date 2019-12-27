import React,{Component} from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavVip,
  NavSearch,
  AddItion,
  Button,
  SearWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem
} from './style';
import { bindActionCreators } from 'redux';

class Header extends Component {

  getListArea (show) {
    if (show) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
            <SearchInfoItem>教育</SearchInfoItem>
          </SearchInfoList>
        </SearchInfo>
      )
    }else {
      return null;
    }
  }
  
  render() {
    return (
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
              in={this.props.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={this.props.focused ? 'focused': ''}
                onFocus={this.props.handleInputFocus}
                onBlur={this.props.handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <span className={this.props.focused ? 'focused iconfont': 'iconfont'}>&#xe6e4;</span>
            {this.getListArea(this.props.focused)}
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
}


const mapStateToProps = (state) => {
  return {
    focused: state.get('header').get('focused')
  }
}

const mapDispathToProps = (dispath) => {
  return {
    handleInputFocus() {
      dispath(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispath(actionCreators.searchBlur());
    }
  }
}

export default connect(mapStateToProps,mapDispathToProps)(Header);