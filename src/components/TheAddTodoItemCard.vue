<script setup>
import { ref } from "vue";
import AppButtonCircledAdd from "./button/AppButtonCircledAdd.vue";

const showForm = ref(false);
// TODO: 7. Schicke das von der TodoItemForm-Component übertragene item in die App-Component weiter
</script>

<template>
  <div class="card-container">
    <div v-if="showForm">
      <p style="color: white">Display the form</p>
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
