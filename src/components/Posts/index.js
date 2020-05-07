import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as userActions from '../../actions/userActions';
import * as postsActions from '../../actions/postsActions';

class Posts extends Component {
	componentDidMount() {
		if (!this.props.userReducer.users.length) {
			this.props.bringAll();
		}
	}
	render() {
		return (
			<div>
				<h1>Post by</h1>
				<div>{this.props.match.params.key}</div>
			</div>
		);
	}
}

const mapStateToProps = ({ userReducer, postsReducer }) => {
	return {
		userReducer,
		postsReducer,
	};
};

const mapDispatchToProps = {
	...userActions,
	...postsActions,
};
export default connect(mapStateToProps, mapDispatchToProps)(Posts);
