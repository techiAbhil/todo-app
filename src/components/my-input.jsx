import React from 'react';

function MyInput(props) {
	const { name, value, onChange } = props;

	return (
		<input
			placeholder={name}
			type="text"
			style={{ height: '25px', margin: '5px' }}
			name={name}
			value={value}
			onChange={(e) => onChange(e.target.value)}
		/>
	);
}

export default MyInput;
