import { createContext } from "react";
const AppContext = createContext({
	todoListItems: [],
	onDeleteTodo: () => {},
	onTodoItemUpdated: () => {},
});

export default AppContext;