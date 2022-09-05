<script setup>
defineProps({
  icon: {
    icon: String,
    required: true,
  },
  text: {
    text: String,
    required: true,
  },
  color: {
    type: String,
    default() {
      return "#FFF";
    },
  },
  action: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div :class="{ 'icon-text-container': true, 'is-action': action }">
    <span class="material-symbols-outlined icon" :style="{ color: color }">{{
      icon
    }}</span>
    <span :style="{ color: color }">{{ text }}</span>
  </div>
</template>

<style scoped>
.icon-text-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 0.8rem;
}

.is-action {
  cursor: pointer;
}

.icon {
  margin-right: 6px;
  font-size: 0.8rem;
}
</style>
