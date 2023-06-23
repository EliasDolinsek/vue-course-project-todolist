<script setup>
import { computed, ref } from "vue";
import TodoItemsCategory from "./components/TodoItemsCategory.vue";
import TheAddTodoItemCard from "./components/TheAddTodoItemCard.vue";
import { useTodoItemsStore } from "./stores/todos";

const todoItemsStore = useTodoItemsStore();

const todoItemsNotDoneCategoryTitle = computed(
  () => `Upcoming - (${todoItemsStore.todoItemsNotDone.length})`
);

const todoItemsDoneCategoryTitle = computed(
  () => `Done - (${todoItemsStore.todoItemsDone.length})`
);
</script>

<template>
  <header class="colored-header"></header>
  <main>
    <h1 id="title">Todolist</h1>
    <TheAddTodoItemCard />
    <TodoItemsCategory
      v-model="todoItemsStore.todoItemsNotDone"
      :title="todoItemsNotDoneCategoryTitle"
    />
    <TodoItemsCategory
      v-model="todoItemsStore.todoItemsDone"
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
