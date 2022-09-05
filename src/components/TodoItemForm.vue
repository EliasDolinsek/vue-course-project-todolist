<script setup>
import { reactive } from "vue";
import AppButtonPrimary from "./button/AppButtonPrimary.vue";

const props = defineProps({
  dateClearable: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["addItem"]);

const formData = reactive({
  title: "",
  description: "",
  dueDate: null,
});

const clearFormData = () => {
  formData.title = "";
  formData.description = "";
  dueDate = null;
};

const handleSubmit = () => {
  const newItem = {
    title: formData.title,
    description: formData.description,
    dueDate: formData.dueDate,
  };

  emit("addItem", newItem);
  clearFormData();
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="form-container">
    <input
      type="text"
      :value="formData.title"
      @input="(event) => (formData.title = event.target.value)"
      placeholder="Title"
      class="input-title item-input"
      required
    />
    <div class="icon-form-input-container">
      <span class="material-symbols-outlined icon">text_snippet</span>
      <input
        type="text"
        :value="formData.description"
        @input="(event) => (formData.description = event.target.value)"
        placeholder="Description"
        class="item-input item-input-expanded"
      />
    </div>
    <div class="icon-form-input-container">
      <span class="material-symbols-outlined icon">today</span>
      <input
        type="date"
        :value="formData.dueDate"
        @input="(event) => (formData.dueDate = event.target.value)"
        class="item-input"
      />
      <span
        v-if="dateClearable"
        class="material-symbols-outlined icon button-remove-date"
        @click="dueDate = null"
        >close</span
      >
    </div>
    <div class="form-actions-container">
      <AppButtonPrimary>Create</AppButtonPrimary>
    </div>
  </form>
</template>

<style scoped>
.item-input {
  border: none;
  background: transparent;
  outline: none;
  color: var(--text-color-light);
}

.item-input-expanded {
  width: 100%;
}

.item-input[type="date"]::-webkit-inner-spin-button,
.item-input[type="date"]::-webkit-calendar-picker-indicator {
  display: none;
  -webkit-appearance: none;
}

.input-title {
  font-size: 1.1rem;
}

.icon-form-input-container {
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: 8px;
}

.form-actions-container {
  display: flex;
  flex-direction: row;
  align-content: center;
  gap: 8px;

  margin-top: 16px;
}

.icon-form-input-container > span {
  margin-right: 8px;
  font-size: 100%;
}

.form-container {
  color: white;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 100%;
}

.button-remove-date {
  margin-top: 1px;
  color: var(--danger-color);
}
</style>
