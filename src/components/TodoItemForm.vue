<script setup>
import { computed, onMounted, ref } from "vue";

// TODO: 1. Schreibe diese Component so um, dass sie setup() verwendet
const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
  },
  dateClearable: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const localModelValue = computed({
  get() {
    const modelValue = props.modelValue;

    modelValue.taskName = taskName.value;
    modelValue.description = description.value;
    modelValue.dueDate = dueDate.value;

    return modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

const taskName = computed({
  get() {
    return props.modelValue.taskName;
  },
  set(value) {
    const item = localModelValue.value;
    item.taskName = value;
    localModelValue.value = item;
  },
});

const description = computed({
  get() {
    return props.modelValue.description;
  },
  set(value) {
    const item = localModelValue.value;
    item.description = value;
    localModelValue.value = item;
  },
});

const dueDate = computed({
  get() {
    return props.modelValue.dueDate;
  },
  set(value) {
    const item = localModelValue.value;
    item.dueDate = value;
    localModelValue.value = item;
  },
});

const handleSubmit = (e) => {
  e.preventDefault();
};

const taskNameInput = ref(null);

onMounted(() => {
  taskNameInput.value.focus();
});
</script>

<template>
  <form @submit="handleSubmit" class="form-container">
    <input
      ref="taskNameInput"
      type="text"
      v-model="taskName"
      placeholder="Title"
      class="input-title item-input"
      required
    />
    <div class="icon-form-input-container">
      <span class="material-symbols-outlined icon">text_snippet</span>
      <input
        type="text"
        v-model="description"
        placeholder="Description"
        class="item-input item-input-expanded"
      />
    </div>
    <div class="icon-form-input-container">
      <span class="material-symbols-outlined icon">today</span>
      <input type="date" v-model="dueDate" class="item-input" />
      <span
        v-if="dateClearable"
        class="material-symbols-outlined icon button-remove-date"
        @click="dueDate = null"
        >close</span
      >
    </div>
    <div class="form-actions-container">
      <slot name="actions" />
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
