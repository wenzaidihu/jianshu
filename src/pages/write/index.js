import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
import './index.css';
class Write extends PureComponent {

	constructor(props) {
		super(props);
		this.initState();
	}

	initState = () => {
		this.state = {
			title: null,
			editorState: BraftEditor.createEditorState(null)
		};
	}

	handleTitleInputChange = event => {
		this.setState({
			title: event.target.value
		});
	}

	renderTitle = () => {
		const { title } = this.state;
		return (
			<div className="jian-shu-writer-page-editor-title-container">
				<input
					className="jian-shu-writer-page-editor-title"
					value={title}
					onChange={this.handleTitleInputChange}
					placeholder="请输入文章标题 ……"
				/>
			</div>
		);
	}

	renderBraftEditor = () => {
		const { editorState } = this.state;
		return (
			<BraftEditor
				contentStyle={{ width: "100%" }}
				value={editorState}
				onChange={this.handleEditorChange}
				placeholder="请输入文章内容 ……"
				// excludeControls={this.getExcludeControls()}
				// extendControls={this.getExtendControls()}
			/>
		);
	}

	renderPageWithIsLogin = () => {
		return (
			<div className="jian-shu-writer-page-container">
				<div className="jian-shu-writer-page-editor-title-wrapper">
					{this.renderTitle()}
				</div>
				<div className="jian-shu-writer-page-braft-editor-wrapper">
					{this.renderBraftEditor()}
				</div>
			</div>
		);
	}

	renderPageWithLoginStatus = () => {
		const { loginStatus } = this.props;
		// if (!loginStatus) return <Redirect to='/login'/>;
		return this.renderPageWithIsLogin();
	}

	render() {
		return this.renderPageWithLoginStatus();
	}
}

const mapState = (state) => ({
	loginStatus: state.getIn(['login', 'login'])
})

export default connect(mapState, null)(Write);