import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchMyStreams } from "../../actions";

class MyStreams extends React.Component {
	constructor(props) {
		super(props);

		if (!this.props.isSignedIn) {
			this.props.history.push("/");
		}
	}

	componentDidMount() {
		this.props.fetchMyStreams();
	}

	myStreamList = () => {
		return this.props.myStreams.map(stream => {
			return (
				<li className="list-group-item" key={stream.id}>
					<h3 style={{ fontSize: "18px" }}>Title: {stream.title}</h3>
					<p>Description: {stream.description}</p>
					<Link to={`/streams/${stream.id}`} className="btn btn-primary mr-1">
						Watch
					</Link>
					<Link to={`/streams/edit/${stream.id}`} className="btn btn-primary mr-1">
						Edit
					</Link>
					<Link to={`/streams/delete/${stream.id}`} className="btn btn-danger">
						Delete
					</Link>
				</li>
			);
		});
	};

	render() {
		return (
			<div className="stream-list mt-3">
				<h2>My Streams</h2>
				<ul className="list-group list-group-flush">{this.myStreamList()}</ul>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { myStreams: Object.values(state.myStreams), currentUserId: state.auth.userId, isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { fetchMyStreams })(MyStreams);
