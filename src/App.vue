<script setup>
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
    done: false,
  },
]);

// TODO: 2. Erstelle computed properties, welche nach upcoming und done todo items filtern
</script>

<template>
  <header class="colored-header"></header>
  <main>
    <h1 id="title">Todolist</h1>
    <p style="color: white">Todo Items: {{ todoItems }}</p>
    <!--TODO: 1. Erstelle zwei paragraphs, welche einmal upcoming todo items und einmal done todo items anzeigen-->
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
