import { defineStore } from "pinia/dist/pinia";
import { v4 as uuidv4 } from "uuid";

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
  // TODO: 10. Erstelle die Getter "todoItemsDone" und "todoItemsNotDone"
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
    // TODO: 1. Erstelle eine Action "deleteItemById(id)"
    // TODO: 2. Erstelle eine Action "updateItemById(id, itemData)"
  },
});