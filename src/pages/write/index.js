import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import BraftEditor from 'braft-editor';
import renderPreview from './Preview';
import { actionCreators } from '../home/store';
import 'braft-editor/dist/index.css';
import './index.css';
class Write extends PureComponent {

	constructor(props) {
		super(props);
		this.initState();
		this.getMaxId();
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

	getMaxId = () => {
		const { articleList } = this.props;
		const ids = articleList.toJS().map(item => item.id);
		const maxId = Math.max(...ids);
		return maxId + 1;
	}

	getArticleCover = html => {
		const defaultImgUrl = "http://img.mukewang.com/szimg/5e116f160830985803600240.jpg";
		const srcList = html.match(/src=[\'\"]?([^\'\"]*)[\'\"]?/gi);
		if (!srcList) return defaultImgUrl;
		const imgUrls = srcList.map(item => item.slice(5, -1));
		const imgUrl = imgUrls[0]? imgUrls[0]: defaultImgUrl;
		return imgUrl;
	}

	handlePreview = () => {
    const { title, editorState } = this.state;
		const html = editorState.toHTML();
		const text = editorState.toText();
		if (!title) return alert("文章标题不能为空！");
		if (!text) return alert("文章内容不能为空！");
    if (window.previewWindow) window.previewWindow.close();
    window.previewWindow = window.open();
    window.previewWindow.document.write(renderPreview(title, html));
    window.previewWindow.document.close();
  }

  handleSave = () => {
		const { history, unshiftItemToArticleList } = this.props;
    const { title, editorState } = this.state;
		const html = editorState.toHTML();
		const text = editorState.toText();
		const cover = this.getArticleCover(html);
		const desc = text.length > 100? text.slice(0, 200): text;
		if (!title) return alert("文章标题不能为空！");
		if (!text) return alert("文章内容不能为空！");
		unshiftItemToArticleList({
			id: this.getMaxId(),
			imgUrl: cover,
			title,
			desc,
			content: html
		})
		history.push("/");
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
		if (!loginStatus) return <Redirect to='/login'/>;
		return this.renderPageWithIsLogin();
	}

	render() {
		return this.renderPageWithLoginStatus();
	}
}

const mapState = (state) => ({
	articleList: state.getIn(['home', 'articleList']),
	loginStatus: state.getIn(['login', 'login']),
})

const mapDispatch = (dispatch) => ({
	unshiftItemToArticleList(item) {
		dispatch(actionCreators.unshiftItemToArticleList(item))
	}
})

export default connect(mapState, mapDispatch)(Write);