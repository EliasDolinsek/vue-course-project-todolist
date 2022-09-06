<script setup>
defineProps({
  modelValue: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="todo-item-container">
    <p style="color: white">{{ modelValue }}</p>
  </div>
</template>

<style scoped>
.todo-item-container {
  background: var(--background-light);
  display: flex;
  flex-direction: row;
  border-radius: 10px;
}

.todo-item-title {
  color: var(--text-color-light);
  font-weight: 600;
  margin-bottom: 0;
}

.todo-item-title-done {
  text-decoration: line-through;
}

.todo-item-subtitle {
  color: var(--text-color-dark);
  font-weight: 600;
  font-size: 0.8rem;
  margin-top: 4px;
  margin-bottom: 0;
}

.actions-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  padding-top: 12px;
  padding-bottom: 16px;
}

.todo-item-check-button {
  margin-top: 18px;
  margin-left: 16px;
  margin-right: 16px;
}

.todo-item-form-container {
  margin-top: 8px;
  margin-bottom: 8px;
  width: 100%;
}
</style>
