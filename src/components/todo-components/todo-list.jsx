import React, { useMemo } from 'react';
import { FlexCard, Text } from '../../App.style';
import useMyAppContext from '../../hooks/use-app-context';
import TodoItem from './todo-item';

const TodoList = () => {
	const { todoListItems } = useMyAppContext();
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
				<TodoItem key={todoItem.id} todoItem={todoItem} />
			))}
			{compltedTodoItems.length > 0 && (
				<FlexCard>
					<Text fontWeight="bolder">Completed Todos</Text>
				</FlexCard>
			)}

			{compltedTodoItems?.map((todoItem) => (
				<TodoItem key={todoItem.id} todoItem={todoItem} />
			))}
		</>
	);
};

export default TodoList;
