import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import flvjs from "flv.js";

import { fetchStream } from "../../actions";

class StreamShow extends React.Component {
	constructor(props) {
		super(props);

		this.videoRef = React.createRef();
	}

	componentDidMount() {
		const { id } = this.props.match.params;

		if (!this.props.stream) {
			this.props.fetchStream(id);
		} else if (!this.player) {
			this.buildPlayer();
		}
	}

	componentDidUpdate() {
		if (this.props.stream && !this.player) {
			this.buildPlayer();
		}
	}

	componentWillUnmount() {
		this.player.destroy();
	}

	buildPlayer() {
		const { id } = this.props.match.params;

		this.player = flvjs.createPlayer({
			type: "flv",
			url: `http://localhost:8000/live/${id}.flv`
		});

		this.player.attachMediaElement(this.videoRef.current);
		this.player.load();
	}

	render() {
		if (!this.props.stream) {
			return null;
		}

		return (
			<div className="stream-show mt-3">
				<video ref={this.videoRef} style={{ width: "100%" }} controls />
				<h2>{this.props.stream.title}</h2>
				<p>{this.props.stream.description}</p>
				<Link className="btn btn-primary" to="/">
					Back
				</Link>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => {
	return { stream: state.streams[props.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
