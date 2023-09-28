import isPropValid from '@emotion/is-prop-valid';
import { useEffect, useRef, useState } from 'react';
import { StyleSheetManager } from 'styled-components';
import {
	Container,
	FlexCard,
	StyledButton,
	StyledInput,
	Title,
} from './App.style';
import TodoList from './components/todo-components/todo-list';
import AppContext from './context/AppContext';

const App = () => {
	const inputRef = useRef();
	const [todoListItems, setTodoListItems] = useState([]);
	useEffect(() => {
		inputRef.current.focus();
	}, []);

	const onClickHandler = () => {
		setTodoListItems([
			...todoListItems,
			{
				id: new Date().getTime(),
				value: inputRef.current.value,
				isCompleted: false,
			},
		]);
		inputRef.current.value = '';
		inputRef.current.focus();
	};

	const onTodoItemUpdated = (todoItem) => {
		const updatedTodoItems = todoListItems.map((todo) => {
			if (todo.id === todoItem.id) {
				return todoItem;
			}
			return todo;
		});
		setTodoListItems([...updatedTodoItems]);
	};

	const onDeleteTodo = (id) => {
		const updatedTodoList = todoListItems.filter((todo) => todo.id !== id);
		setTodoListItems(updatedTodoList);
	};

	return (
		<AppContext.Provider
			value={{
				todoListItems,
				onDeleteTodo,
				onTodoItemUpdated,
				message: 'this is my welcome to all of you 123',
			}}
		>
			<StyleSheetManager shouldForwardProp={isPropValid}>
				<Container>
					<FlexCard>
						<Title>Todo App</Title>
					</FlexCard>
					<FlexCard>
						<StyledInput
							type="text"
							placeholder="Enter here to add todo"
							ref={inputRef}
						/>
						<StyledButton onClick={onClickHandler}>Add Todo</StyledButton>
					</FlexCard>
					<TodoList />
				</Container>
				{/* <AppChildren /> */}
			</StyleSheetManager>
		</AppContext.Provider>
	);
};

// const AppChildren = () => {
// 	const context = useMyAppContext();
// 	console.log('context from = ', context);
// 	return (
// 		<div>
// 			<AppContext.Consumer>
// 				{({ message }) => <p>{message}</p>}
// 			</AppContext.Consumer>
// 		</div>
// 	);
// };

export default App;
