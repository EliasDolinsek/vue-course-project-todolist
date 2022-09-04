<script setup>
import { ref } from "vue";

// TODO: 2. Erstelle eine ref "showForm" 
</script>

<template>
  <!--TODO: 1. Erstelle einen div mit der class "card-container"-->
  <!--TODO: 3. Erstelle im "card-container"-div einen neuen div, welcher angezeigt wird, wenn showForm === true ist-->
  <!--TODO: 4. Erstelle im "card-container"-div einen neuen div, welcher angezeigt wird, wenn showForm !== true ist-->
  <!--TODO: 8. Verwende die AppButtonCircledAdd-Component in der Component, welche angezeigt wird, wenn showForm !== true-->
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
