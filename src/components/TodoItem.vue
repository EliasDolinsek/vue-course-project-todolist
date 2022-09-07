<script setup>
defineProps({
  modelValue: {
    type: Object,
    required: true,
  },
});

// TODO: 1. Definiere folgende emits: "update:modelValue", "onItemDelete"
// TODO: 3. Erstelle eine ref "showEditForm", um zu speichern, ob das Todo-Item oder die TodoItemForm angezeigt werden sollte
</script>

<template>
  <div class="todo-item-container">
    <!--TODO: 2. Verwende den AppButtonCircledCheck um den done-Status bei Klick zu ändern, setze class="todo-item-check-button"-->
    <!--TODO: 4. Erstelle einen div, welcher angezeigt wird, wenn showEditForm==true, setze class="todo-item-form-container"-->
    <!--TODO: 6. Wenn showEditForm==true, zeige die TodoItemFrom an. Inklusive Update-Button-->

    <!--TODO: 5. Erstelle einen div, welcher angezeigt wird, wenn showEditForm==false-->
    <!--TODO: 7. Erstelle folgende Elemente, welche angezeigt werden, wenn showEditForm==false:
        - h3 um den taskName anzuzeigen, mit folgenden classes: "todo-item-title"=immer und "todo-item-title-done"=wenn done==true
        - p um die description anzuzeigen, mit class="todo-item-subtitle"
        - div mit class="actions-container"
            - AppIconText um das dueDate anzuzeigen (text=dueDate, icon="today", color="#9F7443")
            - AppIconText um das Todo-Item bei einem Klick zu löschen, wenn done==true (text="Delete", icon="delete", color="#E66D67")
            - AppIconText um den Bearbeitungsmodus zu aktivieren, wenn done==false (text="Edit", icon="edit", color="#7D7D85")
    -->
    <p style="color: white">{{ modelValue }}</p>
  </div>
</template>

<style scoped>
.todo-item-container {
  background: var(--background-light);
  display: flex;
  flex-direction: row;
  border-radius: 10px;
}

.todo-item-title {
  color: var(--text-color-light);
  font-weight: 600;
  margin-bottom: 0;
}

.todo-item-title-done {
  text-decoration: line-through;
}

.todo-item-subtitle {
  color: var(--text-color-dark);
  font-weight: 600;
  font-size: 0.8rem;
  margin-top: 4px;
  margin-bottom: 0;
}

.actions-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  padding-top: 12px;
  padding-bottom: 16px;
}

.todo-item-check-button {
  margin-top: 18px;
  margin-left: 16px;
  margin-right: 16px;
}

.todo-item-form-container {
  margin-top: 8px;
  margin-bottom: 8px;
  width: 100%;
}
</style>
