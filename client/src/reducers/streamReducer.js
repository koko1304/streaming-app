import { CREATE_STREAM, FETCH_STREAM, FETCH_STREAMS, UPDATE_STREAM, DELETE_STREAM } from "../actions/types";

const delObjProp = (obj, propsKey) => {
	var newObj = {};

	for (var key in obj) {
		if (key === propsKey) continue;

		newObj[key] = obj[key];
	}

	return newObj;
};

const streamReducer = (streams = {}, actions) => {
	switch (actions.type) {
		case CREATE_STREAM:
			return { ...streams, [actions.payload.id]: actions.payload };
		case FETCH_STREAMS:
			var newStreamObj = { ...streams };
			// Insert All Streams To newStreamObj
			actions.payload.forEach(stream => {
				newStreamObj[stream.id] = stream;
			});

			return newStreamObj;
		case UPDATE_STREAM:
			return { ...streams, [actions.payload.id]: actions.payload };
		case DELETE_STREAM:
			return delObjProp(streams, actions.payload);
		case FETCH_STREAM:
			return { ...streams, [actions.payload.id]: actions.payload };
		default:
			return streams;
	}
};

export default streamReducer;
