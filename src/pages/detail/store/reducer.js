import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	title: '一个新开始',
	content: '<img src="//upload-images.jianshu.io/upload_images/14359384-192535e30279e007.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"/><p><b>2017年，衡水中学考上清华北大的人数是176人</b>，2016年是139人，再往前推到2015年，这个人数是119人。但是在这些辉煌的名单背后，却是外地来衡水上学人数暴涨，本地人上好高中越来越艰难的尴尬处境。</p><p>2017年，衡水中学考上清华北大的人数是176人，2016年是139人，再往前推到2015年，这个人数是119人。但是在这些辉煌的名单背后，却是外地来衡水上学人数暴涨，本地人上好高中越来越艰难的尴尬处境。</p><p>2017年，衡水中学考上清华北大的人数是176人，2016年是139人，再往前推到2015年，这个人数是119人。但是在这些辉煌的名单背后，却是外地来衡水上学人数暴涨，本地人上好高中越来越艰难的尴尬处境。</p><p>2017年，衡水中学考上清华北大的人数是176人，2016年是139人，再往前推到2015年，这个人数是119人。但是在这些辉煌的名单背后，却是外地来衡水上学人数暴涨，本地人上好高中越来越艰难的尴尬处境。</p>'
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.CHANGE_DETAIL:
			return state.merge({
				title: action.title,
				content: action.content
			})
		default:
			return state;
	}
}