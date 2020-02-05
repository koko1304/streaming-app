import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import history from "../history";

const Modal = props => {
	return ReactDOM.createPortal(
		<div className="modal show" onClick={() => history.push("/mystreams")} style={{ display: "block", background: "rgba(0,0,0,0.5)" }} tabIndex="-1" role="dialog">
			<div className="modal-dialog" onClick={e => e.stopPropagation()} role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">{props.title}</h5>
						<Link to="/mystreams" className="close">
							<span aria-hidden="true">&times;</span>
						</Link>
					</div>
					<div className="modal-body">
						<p>{props.content}</p>
					</div>
					<div className="modal-footer">{props.actions}</div>
				</div>
			</div>
		</div>,
		document.querySelector("#modal")
	);
};

export default Modal;
