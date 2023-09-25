const performOperation = (state, action) => {
	//reducer function
	switch (action.type) {
		case 'add':
			return {
				...state,
				operationType: 'Addition',
				result: +state.num1 + +state.num2,
			};
		case 'sub':
			return {
				...state,
				operationType: 'Substraction',
				result: state.num1 - state.num2,
			};
		case 'mult':
			return {
				...state,
				operationType: 'Multiplication',
				result: state.num1 * state.num2,
			};
		case 'div':
			return {
				...state,
				operationType: 'Division',
				result: state.num1 / state.num2,
			};
		case 'num1':
			return {
				...state,
				num1: action.payload,
				result: null,
				operationType: null,
			};
		case 'num2':
			return {
				...state,
				num2: action.payload,
				result: null,
				operationType: null,
			};
	}
};

export default performOperation;
