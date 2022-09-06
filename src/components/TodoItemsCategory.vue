<script setup>
import TodoItem from "./TodoItem.vue";
defineProps(["title", "todoItems"]);
</script>

<template>
  <h3 class="category-title">{{ title }}</h3>
  <TodoItem
    v-for="(item, index) in todoItems"
    :key="index"
    :model-value="item"
    class="todo-item"
  />
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
