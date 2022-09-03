<script setup>
defineProps({
  todoItems: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <h3 class="category-title">{{ title }}</h3>
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
