<script setup>
import TodoItem from "./TodoItem.vue";

/* TODO: 9. Änder die Props zu:
  - modelValue (type: Array, required: true)
  - title (type: String, required: true)
*/
defineProps(["title", "todoItems"]);

// TODO: 10. Definiere folgende emits: "update:modelValue", "onItemDelete"

// TODO: 11. Ändere die handleUpdateModelValue function so ab, dass sie ein item und dessen index akzeptiert, und mit einem aktualisierten Todo-Item-Array "update:modelValue" emittet
const handleUpdateModelValue = () => {
  console.log("Update model value called")
}

// TODO: 12. Erstelle die function handleDeleteTodoItem, welche "index" akzeptiert und onItemDelete emittet, sobald der User auf "Delete" im Todo-Item klickt
</script>

<template>
  <h3 class="category-title">{{ title }}</h3>
  <TodoItem
    v-for="(item, index) in todoItems"
    :key="index"
    :model-value="item"
    @update:modelValue="handleUpdateModelValue"
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
