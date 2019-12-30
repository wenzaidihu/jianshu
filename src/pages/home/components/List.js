import React, { Component } from 'react';
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';

class List extends Component {
	render() {
		const { list } = this.props;
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
				<LoadMore>更多文字</LoadMore>
			</div>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home', 'articleList']),
	page: state.getIn(['home', 'articlePage'])
});

export default connect(mapState)(List);