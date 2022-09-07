<script setup>
import { v4 as uuidv4 } from "uuid";
import { computed, ref } from "vue";
import TodoItemsCategory from "./components/TodoItemsCategory.vue";
import TheAddTodoItemCard from "./components/TheAddTodoItemCard.vue";

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

const updateTodoItems = (updatedItems) => {
  updatedItems.forEach((updatedItem) => {
    todoItems.value = todoItems.value.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
  });
};

const todoItemsNotDone = computed({
  get() {
    return todoItems.value
      .filter((item) => !item.done)
      .sort((a, b) => {
        const dateToday = new Date();
        return (
          (new Date(a.dueDate) ?? dateToday).getTime() -
          (new Date(b.dueDate) ?? dateToday).getTime()
        );
      });
  },
  set(value) {
    updateTodoItems(value);
  },
});

const todoItemsDone = computed({
  get() {
    return todoItems.value.filter((item) => item.done);
  },
  set(value) {
    updateTodoItems(value);
  },
});

const todoItemsNotDoneCategoryTitle = computed(
  () => `Upcoming - (${todoItemsNotDone.value.length})`
);

const todoItemsDoneCategoryTitle = computed(
  () => `Done - (${todoItemsDone.value.length})`
);

const handleTodoItemAdd = (item) => {
  const newItem = {
    id: uuidv4(),
    done: false,
    ...item,
  };

  todoItems.value.push(newItem);
};

const deleteItemById = (id) => {
  todoItems.value.splice(
    todoItems.value.findIndex((item) => item.id === id),
    1
  );
};
</script>

<template>
  <header class="colored-header"></header>
  <main>
    <h1 id="title">Todolist</h1>
    <TheAddTodoItemCard @add-item="handleTodoItemAdd" />
    <TodoItemsCategory
      v-model="todoItemsNotDone"
      :title="todoItemsNotDoneCategoryTitle"
      @on-item-delete="(id) => deleteItemById(id)"
    />
    <TodoItemsCategory
      v-model="todoItemsDone"
      :title="todoItemsDoneCategoryTitle"
      @on-item-delete="(id) => deleteItemById(id)"
    />
  </main>
</template>

<style scoped>
.colored-header {
  min-height: 5vh;
  min-width: 100vw;
  background: var(--background-light);
}

#title {
  font-size: 2rem;
  font-weight: 600;
  color: #fff;
}

@media (min-width: 600px) {
  main {
    padding: 0 20vw;
  }
}
</style>
