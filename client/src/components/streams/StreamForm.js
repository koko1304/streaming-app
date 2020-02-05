import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

import normalizor from "../../utils/normalizor";

class StreamForm extends React.Component {
	inputField(formProps) {
		const checkForError = output => {
			if (formProps.meta.touched && formProps.meta.error) {
				return output;
			}
		};

		return (
			<div className="form-group">
				<label htmlFor={formProps.id}>{formProps.label}</label>
				<input type={formProps.type} className={`form-control ${checkForError("is-invalid")}`} id={formProps.id} placeholder={formProps.placeholder} autoComplete="off" {...formProps.input} />
				<div className="invalid-feedback">{checkForError(formProps.meta.error)}</div>
			</div>
		);
	}

	onFormSubmit = formValues => {
		this.props.onSubmit(formValues);
	};

	render() {
		return (
			<form className="mt-3" onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
				<Field
					name="title"
					label="Title"
					id="title-field"
					placeholder="Enter title"
					type="text"
					normalize={(value, previousValue) =>
						normalizor
							.params(value, previousValue)
							.maxChar(80)
							.writingChar().value
					}
					component={this.inputField}
				/>
				<Field
					name="description"
					label="Description"
					id="description-field"
					placeholder="Enter description"
					type="text"
					normalize={(value, previousValue) =>
						normalizor
							.params(value, previousValue)
							.maxChar(200)
							.writingChar().value
					}
					component={this.inputField}
				/>
				<button disabled={!this.props.valid} className="btn btn-primary" type="submit">
					{this.props.submitBtnName}
				</button>
				<Link to={this.props.cancelPath} className="btn btn-danger ml-3">
					Cancel
				</Link>
			</form>
		);
	}
}

const validateFormInput = formValues => {
	var errors = {};

	if (!formValues.title) {
		errors.title = "You must enter a title";
	}

	if (!formValues.description) {
		errors.description = "You must enter a description";
	}

	return errors;
};

export default reduxForm({
	form: "StreamForm",
	validate: validateFormInput
})(StreamForm);
