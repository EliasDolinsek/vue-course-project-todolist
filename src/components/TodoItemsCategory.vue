<script setup>
defineProps(["title", "todoItems"]);
</script>

<template>
  <h3 class="category-title">{{ title }}</h3>
  <!--TODO: 2. Ersetze den paragraph durch eine Liste von TodoItem-Components, mit class="todo-item"-->
  <p style="color: white">{{ todoItems }}</p>
</template>

<style scoped>
.category-title {
  color: var(--text-color-light);
  font-weight: 600;
}

.todo-item {
  margin-bottom: 16px;
}
</style>
