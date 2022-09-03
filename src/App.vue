<script setup>
// TODO: 1. Füge uuid mit dem command "npm install uuid" hinzu.
// TODO: 2. Erstelle eine todoItems-ref, welche zwei Todo Items in einem Array beinhaltet (id: uuid, taskName: String, description: String, dueDate: String, done: Boolean)
</script>

<template>
  <!--TODO: 3. Füge einen header mit der class "colored-header" hinzu-->
  <!--TODO: 4. Erstelle im main-Element eine h1-Element mit der class "title" und "Todolist" als Inhalt-->
</template>

<style scoped>
.colored-header {
  min-height: 5vh;
  min-width: 100vw;
  background: var(--background-light);
}
.title {
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
