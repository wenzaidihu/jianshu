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

export const getHomeInfo = () => {
	return (dispatch) => {
		axios.get('/api/home.json').then((res) => {
			const result = res.data.data;
      dispatch(changHomeData(result));
		});
	}
}

export const getMoreList = () => {
	return (dispatch) => {
		axios.get('/api/homeList.json').then((res) => {
			const result = res.data.data;
			dispatch(addHomeList(result));
		});
	}
}