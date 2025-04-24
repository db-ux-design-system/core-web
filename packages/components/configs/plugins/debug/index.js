module.exports = () => ({
	json: {
		pre(json) {
			console.log('---- PRE: JSON ----');
			console.log(json);
			return json;
		},
		post(json) {
			console.log('---- POST: JSON ----');
			console.log(json);
			return json;
		}
	},
	code: {
		pre(code) {
			console.log('---- PRE: CODE ----');
			console.log(code);
			return code;
		},
		post(code) {
			console.log('---- POST: CODE ----');
			console.log(code);
			return code;
		}
	}
});
