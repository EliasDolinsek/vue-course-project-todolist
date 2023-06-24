<script setup>
import AppIconText from "./icon-text/AppIconText.vue";
import AppButtonCircledCheck from "./button/AppButtonCircledCheck.vue";
import TodoItemForm from "./TodoItemForm.vue";
import AppButtonPrimary from "./button/AppButtonPrimary.vue";
import { computed, ref } from "vue";

// TODO: 3. Ändere "modelValue" zu "item"
const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
  },
});

//TODO: 5. Ersetzte alle Events durch Actions
//TODO: 6. Nutze watch um das zwischengespeicherte Item zu updaten
const emit = defineEmits(["update:modelValue", "onItemDelete"]);

// TODO: 4. Erstelle eine Instanz vom todoItemsStore

const showEditForm = ref(false);
const item = ref(props.modelValue);

const handleItemUpdate = () => {
  emit("update:modelValue", item);
  showEditForm.value = false;
};

const description = computed(() => {
  return props.modelValue.description == null ||
    props.modelValue.description.trim().length === 0
    ? "No Description"
    : props.modelValue.description;
});

const isDone = computed({
  get() {
    return props.modelValue.done;
  },
  set(value) {
    emit("update:modelValue", { ...props.modelValue, done: value });
  },
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
        {{ modelValue.taskName }}
      </h3>
      <p class="todo-item-subtitle">{{ description }}</p>
      <div class="actions-container">
        <AppIconText
          v-if="modelValue.dueDate"
          :text="modelValue.dueDate"
          icon="today"
          color="#9F7443"
        />
        <AppIconText
          v-if="isDone"
          text="Delete"
          icon="delete"
          color="#E66D67"
          @click="$emit('onItemDelete')"
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
