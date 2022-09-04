<script setup>
</script>

<template>
  <div class="rounded-button">
    <slot />
  </div>
</template>

<style>
.rounded-button {
  background: var(--primary-color);
  min-width: 40px;
  max-width: 40px;
  min-height: 40px;
  max-height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>