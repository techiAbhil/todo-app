import isPropValid from '@emotion/is-prop-valid';
import { Component, useEffect, useRef, useState } from 'react';
import { StyleSheetManager } from 'styled-components';
import {
	Container,
	FlexCard,
	StyledButton,
	StyledInput,
	Title,
} from './App.style';
import TodoList from './components/todo-components/todo-list';
import AppContext from './context/app-context';
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
				name: 'Vaibhav',
			}}
		>
			<StyleSheetManager shouldForwardProp={isPropValid}>
				<Container>
					<AppChild />
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
			</StyleSheetManager>
		</AppContext.Provider>
	);
};

class AppChild extends Component {
	render() {
		return (
			<AppContext.Consumer>{({ name }) => <h1>{name}</h1>}</AppContext.Consumer>
		);
	}
}

export default App;
