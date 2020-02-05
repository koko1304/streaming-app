import React from "react";
import { connect } from "react-redux";

// import history from "../../history";
import StreamForm from "./StreamForm";
import { fetchStream, updateStream } from "../../actions";

class StreamEdit extends React.Component {
	componentDidMount() {
		if (!this.props.stream) {
			this.props.fetchStream(this.props.match.params.id);
		}
	}

	render() {
		if (!this.props.stream) {
			return null;
		}

		return (
			<div className="stream-edit mt-3">
				<h2>Edit Stream</h2>
				<StreamForm
					cancelPath="/mystreams"
					submitBtnName="Edit"
					initialValues={{ title: this.props.stream.title, description: this.props.stream.description }}
					onSubmit={formValues => this.props.updateStream(this.props.match.params.id, formValues)}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => {
	return { stream: state.myStreams[props.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, updateStream })(StreamEdit);
