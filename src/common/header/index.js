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

  getListArea () {
    const { focused, list, page, mouseIn, handleMouseEnter, handleMouseLeave } = this.props;
    const newList = list.toJS();
    const pageList = [];
    for (let i = (page-1)*10; i < page*10; i++) {
      pageList.push(
        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
      )
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    }else {
      return null;
    }
  }

  render() {
    const { focused, handleInputFocus, handleInputBlur } = this.props;
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
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused': ''}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <span className={focused ? 'focused iconfont': 'iconfont'}>&#xe6e4;</span>
            {this.getListArea()}
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
    focused: state.getIn(['header','focused']),
    list: state.getIn(['header','list']),
    page: state.getIn(['header','page']),
    mouseIn: state.getIn(['header','mouseIn'])
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    }
  }
}

export default connect(mapStateToProps,mapDispathToProps)(Header);