import styled from 'styled-components';
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
  href: '/'
})`
  height: 56px;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  background: url(${logoPic});
  background-size: contain;
`;

export const Nav = styled.div`
  height: 100%;
  width: 960px;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const NavVip = styled.img.attrs({
  src: '//cdn2.jianshu.io/assets/web/nav_jsds_beta-eeb44d165b8ba37680fdb7e65ae17ae4.png'
})`
  float: right;
  padding: 15px 0px
  display: block;
  height: 25px
  width: 56.81px;
  background-size: contain;
`;

export const SearWrapper = styled.div`
  position: relative;
  float: left;
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  height: 38px;
  width: 160px;
  margin-top: 9px;
  margin-left: 20px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  padding: 0 20px;
  box-sizing: border-box;
  font-size: 14px;
  &::placeholder {
    color: #999;
  }
`;

export const AddItion = styled.div`
  height: 56px;
  top: 0;
  right: 0;
  position: absolute;
`;

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  padding: 0px 20px;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`;