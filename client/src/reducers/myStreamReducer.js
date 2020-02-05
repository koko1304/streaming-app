import { CREATE_STREAM, UPDATE_STREAM, DELETE_STREAM, FETCH_MYSTREAMS, FETCH_STREAM } from "../actions/types";

const delObjProp = (obj, propsKey) => {
	var newObj = {};

	for (var key in obj) {
		if (key === propsKey) continue;

		newObj[key] = obj[key];
	}

	return newObj;
};

const myStreamReducer = (myStream = {}, actions) => {
	switch (actions.type) {
		case FETCH_STREAM:
			return { ...myStream, [actions.payload.id]: actions.payload };
		case CREATE_STREAM:
			return { ...myStream, [actions.payload.id]: actions.payload };
		case FETCH_MYSTREAMS:
			var newStreamObj = { ...myStream };
			// Insert All Streams To newStreamObj
			actions.payload.forEach(stream => {
				newStreamObj[stream.id] = stream;
			});

			return newStreamObj;
		case UPDATE_STREAM:
			return { ...myStream, [actions.payload.id]: actions.payload };
		case DELETE_STREAM:
			return delObjProp(myStream, actions.payload);
		default:
			return myStream;
	}
};

export default myStreamReducer;
