<script setup>
import { reactive, ref } from "vue";
import AppButtonCircledAdd from "./button/AppButtonCircledAdd.vue";
import TodoItemForm from "./TodoItemForm.vue";
import AppButtonPrimary from "./button/AppButtonPrimary.vue";

const showForm = ref(false);

const emit = defineEmits(["addItem"]);

const itemData = reactive({
  taskName: "",
  description: "",
  dueDate: null,
});

const clearItemData = () => {
  itemData.taskName = "";
  itemData.description = "";
  itemData.dueDate = "";
};

const handleAddItem = () => {
  const item = {
    taskName: itemData.taskName,
    description: itemData.description,
    dueDate: itemData.dueDate,
  };

  emit("addItem", item);

  showForm.value = false;
  clearItemData();
};
</script>

<template>
  <div class="card-container">
    <div v-if="showForm">
      <TodoItemForm v-model="itemData">
        <template #actions>
          <AppButtonPrimary @click="handleAddItem">Create</AppButtonPrimary>
          <button class="button-cancel" @click="showForm = false">
            Cancel
          </button>
        </template>
      </TodoItemForm>
    </div>
    <div v-else class="add-item-texts-container" @click="showForm = true">
      <AppButtonCircledAdd />
      <h4 class="add-item-text">Add a new Todo Item</h4>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  border: 2px solid var(--background-light);
  padding: 8px 16px;
  border-radius: 10px;
}

.add-item-texts-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
}

.add-item-text {
  font-weight: 800;
  color: var(--text-color-dark);
  margin-left: 16px;
}

.button-cancel {
  background: transparent;
  border: none;
  color: var(--info-color);
  cursor: pointer;
}
</style>
