import React, { Component } from 'react';
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends Component {
	render() {
		const { list, getMoreList, page } = this.props;
		return (
			<div>
				{
				list.map((item) => {
					return (
						<ListItem key={item.get('id')}>
							<img alt='' className='pic' src={item.get('imgUrl')} />
							<ListInfo>
					<h3 className='title'>{item.get('title')}</h3>
					<p className='desc'>{item.get('desc')}</p>
							</ListInfo>
						</ListItem>
						);
					})
				}
			</div>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home', 'articleList']),
	page: state.getIn(['home', 'articlePage'])
});

export default connect(mapState)(List);