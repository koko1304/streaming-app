import React from "react";
import { connect } from "react-redux";

import StreamForm from "./StreamForm";
import { createStream } from "../../actions";

class StreamCreate extends React.Component {
	render() {
		return (
			<div className="stream-create mt-3">
				<h2>Create Stream</h2>
				<StreamForm cancelPath="/" submitBtnName="Create" onSubmit={formValues => this.props.createStream(formValues)} />
			</div>
		);
	}
}

export default connect(null, { createStream })(StreamCreate);
