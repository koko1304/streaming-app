import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import GoogleAuth from "./GoogleAuth";

const Header = props => {
	const authUserBtn = (content, path) => {
		if (props.isSignedIn) {
			return (
				<li className="nav-item">
					<Link className="nav-link" to={path}>
						{content}
					</Link>
				</li>
			);
		}
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<Link className="navbar-brand" to="/">
					STREAMING APP
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<Link className="nav-link" to="/">
								Stream List <span className="sr-only">(current)</span>
							</Link>
						</li>
						{authUserBtn("My Streams", "/mystreams")}
						{authUserBtn("Create Stream", "/streams/new")}
					</ul>
					<GoogleAuth />
				</div>
			</div>
		</nav>
	);
};

const mapStateToProps = state => {
	return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(Header);
