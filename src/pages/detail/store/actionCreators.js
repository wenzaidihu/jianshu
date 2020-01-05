import axios from 'axios';
import * as constants from './constants';

const changeDetail = (title, content) => ({
	type: constants.CHANGE_DETAIL,
	title,
	content
});

export const getDetail = (id) => {
	return (dispatch, getState) => {
		const state = getState();
		const articleList = state.getIn(['home', 'articleList']).toJS();
		const target = articleList.find(item => String(item.id) === id);
		if (target && target.content) dispatch(changeDetail(target.title, target.content));
		else axios.get('/api/detail.json?id=' + id).then((res) => {
			const result = res.data.data;
			dispatch(changeDetail(result.title, result.content));
		}).catch(() => {
			
		})
	}
};