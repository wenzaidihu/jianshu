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
		const defaultContent = "<p>This is default <b>content!</b></p>";
		const defaultTitle = "This is default title";
		this.state = {
			title: defaultTitle,
			editorState: BraftEditor.createEditorState(defaultContent)
		};
	}

	handleTitleInputChange = () => {

	}

	renderTitle = () => {
		const { title } = this.state;
		return (
			<div className="jian-shu-writer-page-editor-title-container">
				<input
					className="jian-shu-writer-page-editor-title"
					value={title}
					onChange={this.handleTitleInputChange}
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
		if (!loginStatus) return <Redirect to='/login'/>;
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