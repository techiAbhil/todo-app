import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import {
	FlexCard,
	StyledButton,
	StyledCheckbox,
	StyledInput,
	Text,
} from '../../App.style';
const TodoItem = ({ todoItem, onTodoItemUpdated, onDeleteTodo }) => {
	const { value, id, isCompleted } = todoItem;

	const [isEditMode, setIsEditMode] = useState(false);
	const inputRef = useRef();
	const onCheckboxChange = () => {
		onTodoItemUpdated({ ...todoItem, isCompleted: !isCompleted });
	};

	const onItemUpdatedHandler = () => {
		onTodoItemUpdated({ ...todoItem, value: inputRef.current.value });
		setIsEditMode(false);
	};
	if (isEditMode) {
		return (
			<FlexCard
				border="2px solid #808080"
				margin="10px 10px"
				justifyContent="space-between"
				borderRadius="5px"
			>
				<FlexCard padding="10px">
					<StyledInput defaultValue={value} ref={inputRef} />
					<StyledButton
						margin="2px 4px"
						background="#808080"
						onClick={onItemUpdatedHandler}
					>
						Save
					</StyledButton>

					<StyledButton
						margin="2px 4px"
						background="#808080"
						onClick={() => setIsEditMode(false)}
					>
						Cancel
					</StyledButton>
				</FlexCard>
			</FlexCard>
		);
	}

	return (
		<FlexCard
			border="2px solid #808080"
			margin="10px 10px"
			justifyContent="space-between"
			borderRadius="5px"
		>
			<FlexCard>
				<StyledCheckbox
					name="tod-checkbox"
					checked={isCompleted}
					onChange={onCheckboxChange}
				/>
				<Text>{value}</Text>
			</FlexCard>
			<FlexCard>
				{!isCompleted && (
					<StyledButton
						margin="2px"
						background="#4285f4"
						onClick={() => setIsEditMode(true)}
					>
						Edit
					</StyledButton>
				)}
				<StyledButton
					margin="2px"
					background="#ea4335"
					onClick={() => onDeleteTodo(id)}
				>
					Delete
				</StyledButton>
			</FlexCard>
		</FlexCard>
	);
};

TodoItem.propTypes = {
	todoItem: PropTypes.object.isRequired,
	onTodoItemUpdated: PropTypes.func.isRequired,
	onDeleteTodo: PropTypes.func.isRequired,
};
export default TodoItem;