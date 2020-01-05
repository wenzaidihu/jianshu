import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import BraftEditor from 'braft-editor';
import renderPreview from './Preview';
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

	getExcludeControls = () => {
    return [
      "letter-spacing",
      "line-height",
      "clear",
      "headings",
      "list-ol",
      "list-ul",
      "remove-styles",
      "superscript",
      "subscript",
      "hr",
      "text-align"
    ];
  }

  getExtendControls = () => {
    return [{
      key: "preview-button",
      type: "button",
      text: "预览",
      onClick: this.handlePreview
    }, {
      key: "save-button",
      type: "button",
      text: "保存",
      onClick: this.handleSave
    }];
	}

	handlePreview = () => {
    const { title, editorState } = this.state;
    const html = editorState.toHTML();
    if (window.previewWindow) window.previewWindow.close();
    window.previewWindow = window.open();
    window.previewWindow.document.write(renderPreview(title, html));
    window.previewWindow.document.close();
  }

  handleSave = () => {
    const { title, editorState } = this.state;
    const html = editorState.toHTML();
    console.log("submitContent title:", title);
    console.log("submitContent html:", html);
  }
	
	handleTitleInputChange = event => {
		this.setState({
			title: event.target.value
		});
	}

	handleEditorChange = editorState => {
		this.setState({
			editorState
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
				excludeControls={this.getExcludeControls()}
				extendControls={this.getExtendControls()}
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