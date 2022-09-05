<script setup></script>

<template>
  <button class="button-primary">
    <slot />
  </button>
</template>

<style scoped>
.button-primary {
  background: var(--primary-color);
  border-radius: 6px;
  padding: 6px 10px;
  color: var(--primary-color-dark);
  border: none;
  cursor: pointer;
}
</style>
