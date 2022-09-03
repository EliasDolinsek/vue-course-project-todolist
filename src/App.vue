<script setup>
import { computed } from "@vue/reactivity";
import { v4 as uuidv4 } from "uuid";
import { ref } from "vue";

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
</script>

<template>
  <header class="colored-header"></header>
  <main>
    <h1 id="title">Todolist</h1>
    <p style="color: white">Upcoming Todo Items: {{ todoItemsNotDone }}</p>
    <p style="color: white">Done Todo Items: {{ todoItemsDone }}</p>
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
