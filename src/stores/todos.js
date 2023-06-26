import { defineStore } from "pinia/dist/pinia";
import { v4 as uuidv4 } from "uuid";
import { computed, ref } from "vue";

export const useTodoItemsStore = defineStore("todos", () => {
  const todoItems = ref([
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
  ]);

  const todoItemsNotDone = computed(() => {
    return todoItems.value
      .filter((item) => !item.done)
      .sort((a, b) => {
        const dateToday = new Date();
        return (
          (new Date(a.dueDate) ?? dateToday).getTime() -
          (new Date(b.dueDate) ?? dateToday).getTime()
        );
      });
  });

  const todoItemsDone = computed(() => {
    return todoItems.value.filter((item) => item.done);
  });

  const todoItemsNotDoneCount = computed(() => {
    return todoItemsNotDone.value.length;
  });

  const todoItemsDoneCount = computed(() => {
    return todoItemsDone.value.length;
  });

  const addTodoItem = (taskName, description, dueDate) => {
    const newTodoItem = {
      id: uuidv4(),
      taskName,
      description,
      dueDate,
      done: false,
    };

    todoItems.value.push(newTodoItem);
  };

  const deleteItemById = (id) => {
    todoItems.value.splice(
      todoItems.value.findIndex((item) => item.id === id),
      1
    );
  };

  const updateItemById = (id, itemData) => {
    const itemIndex = todoItems.value.findIndex((item) => item.id === id);
    todoItems.value[itemIndex] = itemData;
  };

  return {
    todoItems,
    todoItemsNotDone,
    todoItemsDone,
    todoItemsNotDoneCount,
    todoItemsDoneCount,
    addTodoItem,
    deleteItemById,
    updateItemById,
  };
});
