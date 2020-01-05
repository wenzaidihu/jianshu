import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable'

const changHomeData = (result) => ({
	type: constants.CHANGE_HOME_DATA,
	topicList: result.topicList,
	articleList: result.articleList,
	recommendList: result.recommendList
});

const addHomeList = (list, nextPage) => ({
	type: constants.ADD_ARTICLE_LIST,
	list: fromJS(list),
	nextPage
})

export const unshiftItemToArticleList = item => ({
	type: constants.UNSHIFT_ITEM_TO_ARTICLE_LIST,
	item
})

export const getHomeInfo = () => {
	return (dispatch, getState) => {
		const state = getState();
		const listSize = state.getIn(['home', 'articleList']).size;
		if (!listSize) axios.get('/api/home.json').then((res) => {
			const result = res.data.data;
			dispatch(changHomeData(result));
		});
	}
}

export const getMoreList = (page) => {
	return (dispatch) => {
		axios.get('/api/homeList.json?page=' + page).then((res) => {
			const result = res.data.data;
			dispatch(addHomeList(result, page+1));
		});
	}
}

export const toggleTopShow = (show) => ({
	type: constants.TOGGLE_SCROLL_TOP,
	show
})