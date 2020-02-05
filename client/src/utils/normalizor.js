const normalizor = {
	value: "",
	initValue: "",
	initPreviousValue: "",
	params: function(value, previousValue) {
		if (value) {
			this.initValue = value;
		} else {
			this.initValue = "";
		}

		if (previousValue) {
			this.initPreviousValue = previousValue;
		} else {
			this.initPreviousValue = "";
		}

		return this;
	},
	maxChar: function(max) {
		if (!max) {
			throw Error("Please give maximun character to the maxChar function");
		}

		if (this.initValue.length > max) {
			this.value = this.initPreviousValue;
		} else {
			this.value = this.initValue;
		}

		return this;
	},
	writingChar: function() {
		if (/[^!@".,? a-zA-Z0-9]/.test(this.initValue)) {
			this.value = this.initPreviousValue;
		}

		return this;
	},
	numberChar: function() {
		if (/[^0-9 ]/.test(this.initValue)) {
			this.value = this.initPreviousValue;
		}

		return this;
	}
};

export default normalizor;
