import { baseUrl } from "./baseUrl";

export const getAllTodos = async () => {
  const res = await fetch(`${baseUrl}/tasks`, { cache: "no-store" });
  const todos = await res.json();
  return todos;
};

export const addTodo = async (todo) => {
  try {
    const res = await fetch(`${baseUrl}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    const newTodo = await res.json();
    return newTodo;
  } catch (error) {
    console.error(error);
  }
};

export const editTodo = async (todo) => {
  try {
    const res = await fetch(`${baseUrl}/tasks/${todo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    const updatedTodo = await res.json();
    return updatedTodo;
  } catch (error) {
    console.error(error);
  }
};

export const deleteTodo = async (id) => {
  try {
    const res = await fetch(`${baseUrl}/tasks/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error(error);
  }
};
