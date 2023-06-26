import { defineStore } from "pinia/dist/pinia";
import { v4 as uuidv4 } from "uuid";

// TODO: 1. Definiere den Store mithilfe der Setup-Syntax
export const useTodoItemsStore = defineStore("todos", {
  state: () => ({
    todoItems: [
      {
        id: uuidv4(),
        taskName: "First Todo Item",
        description: "The description for the first Todo Item",
        dueDate: "2023-01-01",
        done: false,
      },
      {
        id: uuidv4(),
        taskName: "Second Todo Item",
        description: "The description for the second Todo Item",
        dueDate: "2023-02-01",
        done: true,
      },
    ],
  }),
  getters: {
    todoItemsNotDone(state) {
      return state.todoItems
        .filter((item) => !item.done)
        .sort((a, b) => {
          const dateToday = new Date();
          return (
            (new Date(a.dueDate) ?? dateToday).getTime() -
            (new Date(b.dueDate) ?? dateToday).getTime()
          );
        });
    },
    todoItemsDone(state) {
      return state.todoItems.filter((item) => item.done);
    },
    todoItemsNotDoneCount() {
      return this.todoItemsNotDone.length;
    },
    todoItemsDoneCount() {
      return this.todoItemsDone.length;
    },
    findTodoItemsByDueDate(state) {
      return (dueDate) =>
        state.todoItems.filter((item) => item.dueDate === dueDate);
    },
  },
  actions: {
    addTodoItem(taskName, description, dueDate) {
      const newTodoItem = {
        id: uuidv4(),
        taskName,
        description,
        dueDate,
        done: false,
      };

      this.todoItems.push(newTodoItem);
    },
    deleteItemById(id) {
      this.todoItems.splice(
        this.todoItems.findIndex((item) => item.id === id),
        1
      );
    },
    updateItemById(id, itemData) {
      const itemIndex = this.todoItems.findIndex((item) => item.id === id);
      this.todoItems[itemIndex] = itemData;
    },
  },
});
