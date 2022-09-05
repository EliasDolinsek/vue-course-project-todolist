<script setup>
    // TODO: 3. Definiere emits mit einem "addItem" Event
    // TODO: 2. Erstelle ein reactive object "formData", welches title, description und dueDate speichert

    // TODO: 4. Erstelle eine handleSubmit function, welche das neue Todo Item im addItem-Event emittet
    // TODO: 6. Erstelle eine Function, welche die Eingabe der Form zurücksetzt
</script>

<template>
  <form class="form-container">
    <!--TODO: 5. Reagiere auf Änderungen in den inputs mithilfe dem input-Event-->
    <input
      type="text"
      placeholder="Title"
      class="input-title item-input"
      required
    />
    <div class="icon-form-input-container">
      <span class="material-symbols-outlined icon">text_snippet</span>
      <input
        type="text"
        placeholder="Description"
        class="item-input item-input-expanded"
      />
    </div>
    <div class="icon-form-input-container">
      <span class="material-symbols-outlined icon">today</span>
      <input type="date" class="item-input" />
    </div>
    <div class="form-actions-container">
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
