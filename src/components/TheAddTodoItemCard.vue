<script setup>
import { ref } from "vue";
import AppButtonCircledAdd from "./button/AppButtonCircledAdd.vue";
import TodoItemForm from "./TodoItemForm.vue";

const showForm = ref(false);

// TODO: 6. Erstelle ein reactive object "itemData", welches taskName, description und dueDate speichert
const emit = defineEmits(["addItem"]);

// TODO: 10. Ändere die handleAddItem function um mit dem v-model zu funktionieren
// TODO: 11. Setze den Input der TodoItemForm in der handleAddItem function zurück
const handleAddItem = (item) => {
  emit("addItem", item);
};
</script>

<template>
  <div class="card-container">
    <div v-if="showForm">
      <!--TODO: 7. Ersetze @add-item mit v-model-->
      <!--TODO: 8. Erstelle einen Create-Button mithilfe von AppButtonPrimary im actions-slot der TodoItemForm-->
      <!--TODO: 9. Erstelle einen Cancel-Button mit class="button-cancel" im actions-slot der TodoItemForm-->
      <TodoItemForm @add-item="handleAddItem" />
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
