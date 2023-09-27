import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { FlexCard, Text } from '../../App.style';
import TodoItem from './todo-item';

const TodoList = ({ todoListItems, onTodoItemUpdated, onDeleteTodo }) => {
	const compltedTodoItems = useMemo(() => {
		return todoListItems.filter((todo) => todo.isCompleted === true);
	}, [todoListItems]);

	const inCompltedTodoItems = useMemo(() => {
		return todoListItems.filter((todo) => todo.isCompleted === false);
	}, [todoListItems]);
	return (
		<>
			{inCompltedTodoItems.length > 0 && (
				<FlexCard>
					<Text fontWeight="bolder">Incomplete Todos</Text>
				</FlexCard>
			)}
			{inCompltedTodoItems?.map((todoItem) => (
				<TodoItem
					key={todoItem.id}
					todoItem={todoItem}
					onTodoItemUpdated={onTodoItemUpdated}
					onDeleteTodo={onDeleteTodo}
				/>
			))}
			{compltedTodoItems.length > 0 && (
				<FlexCard>
					<Text fontWeight="bolder">Completed Todos</Text>
				</FlexCard>
			)}

			{compltedTodoItems?.map((todoItem) => (
				<TodoItem
					key={todoItem.id}
					todoItem={todoItem}
					onTodoItemUpdated={onTodoItemUpdated}
					onDeleteTodo={onDeleteTodo}
				/>
			))}
		</>
	);
};

TodoList.propTypes = {
	todoListItems: PropTypes.array.isRequired,
	onTodoItemUpdated: PropTypes.func.isRequired,
	onDeleteTodo: PropTypes.func.isRequired,
};

TodoList.defaultProps = {
	todoListItems: [],
};

export default TodoList;
