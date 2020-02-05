import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import MyStreams from "./streams/MyStreams";
import Header from "./Header";
import history from "../history";

const App = () => {
	return (
		<Router history={history}>
			<Header />
			<div className="container">
				<Switch>
					<Route path="/" exact component={StreamList} />
					<Route path="/mystreams" exact component={MyStreams} />
					<Route path="/streams/new" exact component={StreamCreate} />
					<Route path="/streams/edit/:id" exact component={StreamEdit} />
					<Route path="/streams/delete/:id" exact component={StreamDelete} />
					<Route path="/streams/:id" exact component={StreamShow} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
