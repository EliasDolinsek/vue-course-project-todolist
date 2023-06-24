<script setup>
import AppIconText from "./icon-text/AppIconText.vue";
import AppButtonCircledCheck from "./button/AppButtonCircledCheck.vue";
import TodoItemForm from "./TodoItemForm.vue";
import AppButtonPrimary from "./button/AppButtonPrimary.vue";
import { computed, onUpdated, ref, watch } from "vue";
import { useTodoItemsStore } from "../stores/todos";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const todoItemsStore = useTodoItemsStore();

const showEditForm = ref(false);
const item = ref(props.item);

const handleItemUpdate = () => {
  todoItemsStore.updateItemById(item.value.id, item.value);
  showEditForm.value = false;
};

const description = computed(() => {
  return props.item.description == null ||
    props.item.description.trim().length === 0
    ? "No Description"
    : props.item.description;
});

const isDone = computed({
  get() {
    return props.item.done;
  },
  set(value) {
    todoItemsStore.updateItemById(props.item.id, {
      ...props.item,
      done: value,
    });
  },
});

onUpdated(() => {
  item.value = props.item;
});
</script>

<template>
  <div class="todo-item-container">
    <AppButtonCircledCheck v-model="isDone" class="todo-item-check-button" />
    <div v-if="showEditForm" class="todo-item-form-container">
      <TodoItemForm v-model="item" date-clearable>
        <template v-slot:actions>
          <AppButtonPrimary @click="handleItemUpdate">Update</AppButtonPrimary>
        </template>
      </TodoItemForm>
    </div>
    <div v-else>
      <h3 :class="{ 'todo-item-title': true, 'todo-item-title-done': isDone }">
        {{ item.taskName }}
      </h3>
      <p class="todo-item-subtitle">{{ description }}</p>
      <div class="actions-container">
        <AppIconText
          v-if="item.dueDate"
          :text="item.dueDate"
          icon="today"
          color="#9F7443"
        />
        <AppIconText
          v-if="isDone"
          text="Delete"
          icon="delete"
          color="#E66D67"
          @click="todoItemsStore.deleteItemById(item.id)"
          action
        />
        <AppIconText
          v-else
          text="Edit"
          icon="edit"
          color="#7D7D85"
          @click="showEditForm = true"
          action
        />
      </div>
    </div>
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
