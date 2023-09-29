import { createContext } from 'react';

const AppContext = createContext({
	todoListItems: [],
	onDeleteTodo: () => {},
	onTodoItemUpdated: () => {},
	name: '',
});

export default AppContext;
