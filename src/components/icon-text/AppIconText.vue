<script setup>
/* TODO: 1. Definiere folgend props:
    - icon (type: String, required)
    - text (type: String, required)
    - color (type: String, default: #FFF)
    - action (type: Boolean, default: false)
*/
</script>

<template>
    <!--TODO: 5. Erstellen einen div, welcher mit einer class "icon-text-container", und wenn action===ture, zusätzlich mit der class "is-action"-->
    <!--TODO: 6. Erstelle einen span, mit "icon" als Inhalt und class="material-symbols-outlined icon" sowie mit dem "color"-prop als Textfarbe-->
    <!--TODO: 7. Erstelle einen span, mit dem "color"-prop als Textfarbe und dem "text"-prop als Inhalt-->
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
