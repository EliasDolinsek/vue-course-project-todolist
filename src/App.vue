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

const todoItemsNotDone = computed(() => {
  return todoItems.value.filter((item) => !item.done);
});

const todoItemsDone = computed(() => {
  return todoItems.value.filter((item) => item.done);
});

const todoItemsNotDoneCategoryTitle = computed(
  () => `Upcoming - (${todoItemsNotDone.value.length})`
);

const todoItemsDoneCategoryTitle = computed(
  () => `Done - (${todoItemsDone.value.length})`
);

//TODO: 8. Füge ein neues Todo Item in das todoItems-Array hinzu, sobald eines von TheAddTodoItemCard übermittelt wird
</script>

<template>
  <header class="colored-header"></header>
  <main>
    <h1 id="title">Todolist</h1>
    <TheAddTodoItemCard />
    <TodoItemsCategory
      :todo-items="todoItemsNotDone"
      :title="todoItemsNotDoneCategoryTitle"
    />
    <TodoItemsCategory
      :todo-items="todoItemsDone"
      :title="todoItemsDoneCategoryTitle"
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
