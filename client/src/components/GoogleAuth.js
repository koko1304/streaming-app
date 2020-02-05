import React from "react";
import { connect } from "react-redux";

import { signIn, signOut } from "../actions";

const KEY = "130459938260-drfo7uuvi7bhfa343ghlvna7odvh9f76.apps.googleusercontent.com";

class GoogleAuth extends React.Component {
	componentDidMount() {
		window.gapi.load("client:auth2", () => {
			window.gapi.client
				.init({
					clientId: KEY,
					scope: "email"
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();

					this.onAuthChange(this.auth.isSignedIn.get());
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	onAuthChange = isSignedIn => {
		if (isSignedIn) {
			this.props.signIn(this.auth.currentUser.get().getId());
		} else {
			this.props.signOut();
		}
	};

	onSignInClick = () => {
		this.auth.signIn();
	};

	onSignOutClick = () => {
		this.auth.signOut();
	};

	renderAuthButton() {
		if (this.props.isSignedIn === null) {
			return (
				<div className="btn btn-secondary" disabled>
					<div className="spinner-border spinner-border-sm" role="status">
						<span className="sr-only">Loading...</span>
					</div>
				</div>
			);
		} else if (this.props.isSignedIn) {
			return (
				<button onClick={this.onSignOutClick} className="btn btn-danger">
					Log Out
				</button>
			);
		} else {
			return (
				<button onClick={this.onSignInClick} className="btn btn-primary">
					Log In with Google
				</button>
			);
		}
	}

	render() {
		return <div>{this.renderAuthButton()}</div>;
	}
}

const mapStateToProps = state => {
	return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
