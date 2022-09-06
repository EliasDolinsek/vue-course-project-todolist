<script setup>
import AppButtonCircled from "./AppButtonCircled.vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const handleButtonClick = () => {
  emit("update:modelValue", !props.modelValue);
};
</script>

<template>
  <AppButtonCircled @click="handleButtonClick">
    <span v-if="modelValue" class="material-symbols-outlined icon">check</span>
    <div v-else class="check-card" />
  </AppButtonCircled>
</template>

<style scoped>
.check-card {
  min-width: 30px;
  min-height: 30px;
  background: var(--background-light);
  border-radius: 50%;
}
</style>
