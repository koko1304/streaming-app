import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchStreams } from "../../actions";

class StreamList extends React.Component {
	componentDidMount() {
		this.props.fetchStreams();
	}

	streamList = () => {
		return this.props.streams.map(stream => {
			return (
				<li className="list-group-item" key={stream.id}>
					<h3 style={{ fontSize: "18px" }}>Title: {stream.title}</h3>
					<p>Description: {stream.description}</p>
					<Link className="btn btn-primary" to={`/streams/${stream.id}`}>Watch</Link>
				</li>
			);
		});
	};

	render() {
		return (
			<div className="stream-list mt-3">
				<h2>Streams</h2>
				<ul className="list-group list-group-flush">{this.streamList()}</ul>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { streams: Object.values(state.streams), currentUserId: state.auth.userId };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
