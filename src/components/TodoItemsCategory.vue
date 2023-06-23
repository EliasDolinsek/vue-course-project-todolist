<script setup>
import TodoItem from "./TodoItem.vue";

const props = defineProps({
  modelValue: {
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
  <TodoItem
    v-for="(item, index) in modelValue"
    :key="index"
    :item="item"
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
