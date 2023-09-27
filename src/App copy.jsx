import { useReducer, useState } from 'react';
import MyInput from './components/my-input';
import performOperation from './components/my-reducer';

function App() {
	const [state, dispatch] = useReducer(performOperation, {
		num1: 0,
		num2: 0,
		result: null,
		operationType: null,
	});

	const [operation, setOpeartion] = useState('');

	return (
		<div
			style={{
				background: 'skyblue',
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<div>
					<MyInput
						name="first-name"
						value={state.num1}
						onChange={(value) => dispatch({ type: 'num1', payload: value })}
					/>
					<br />
					<MyInput
						name="last-name"
						value={state.num2}
						onChange={(value) => dispatch({ type: 'num2', payload: value })}
					/>
					<br />
					<MyInput name="operation" value={operation} onChange={setOpeartion} />
					<br />
					<button onClick={() => dispatch({ type: operation })}>
						Perform Operation
					</button>
					{state.operationType && (
						<h3>
							The {state.operationType} result is {state.result}
						</h3>
					)}
					{/* My Name is {fullName}
					<br />
					{reverseName()} */}
					{/* <div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						Addition = {+firstName + +lastName}
					</div>

					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						Substraction = {firstName - lastName}
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						Multiplication {firstName * lastName}
					</div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						Division {firstName / lastName}
					</div> */}
				</div>
			</div>
		</div>
	);
}

export default App;
