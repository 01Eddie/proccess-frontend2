import { proxy } from "valtio";
import { Todo } from "../types";

export const store = proxy<{ todos: Todo[] }>({
  todos: []
});

export const addTodo = (name: string, description: string) => {
  store.todos.push({
    name, description,
    id: Date.now()
  });
  console.log("addTodo", store.todos);
};

export const setTypeContact = () => {
    store.todos.push({
        name: "",
        description: "",
        id: Date.now()
    });
}
export const editTodo = (index: number, name: string, description: string) => {
    store.todos[index] = {
        name, description,
        id: store.todos[index].id
    };
};

export const removeTodo = (index: number) => {
  store.todos.splice(index, 1);
};
