<script setup>
import TodoItem from "./TodoItem.vue";

// TODO: 9. Ändere "modelValue" zu "items"
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

// TODO: 8. Entferne alle events
const emit = defineEmits(["update:modelValue", "onItemDelete"]);

const handleUpdateModelValue = (value, index) => {
  const itemsCopy = JSON.parse(JSON.stringify(props.modelValue));
  itemsCopy[index] = value;
  emit("update:modelValue", itemsCopy);
};

const handleDeleteTodoItem = (index) => {
  emit("onItemDelete", props.modelValue[index].id);
};
</script>

<template>
  <h3 class="category-title">{{ title }}</h3>
  <!--TODO: 7. Entferne alte props / events -->
  <TodoItem
    v-for="(item, index) in modelValue"
    :key="index"
    :model-value="item"
    @update:modelValue="(value) => handleUpdateModelValue(value, index)"
    @on-item-delete="() => handleDeleteTodoItem(index)"
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
