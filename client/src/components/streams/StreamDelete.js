import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchStream, deleteStream } from "../../actions";

import Modal from "../Modal";

class StreamDelete extends React.Component {
	componentDidMount() {
		if (!this.props.stream) {
			this.props.fetchStream(this.props.match.params.id);
		}
	}

	actionsBtn() {
		return (
			<React.Fragment>
				<button onClick={() => this.props.deleteStream(this.props.match.params.id)} className="btn btn-danger">
					Delete
				</button>
				<Link to="/mystreams" className="btn btn-secondary">
					Cancel
				</Link>
			</React.Fragment>
		);
	}

	render() {
		if (!this.props.stream) {
			return null;
		}

		return <Modal actions={this.actionsBtn()} title="Delete Stream" content="Are you sure you want to delete the stream?" />;
	}
}

const mapStateToProps = (state, props) => {
	return { stream: state.myStreams[props.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
