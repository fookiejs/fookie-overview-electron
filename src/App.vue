<template lang="pug">
v-app(app)
  v-system-bar(app )
    span Fookie Overview
    v-spacer
    v-icon(icon="mdi-theme-light-dark")
  router-view
  v-footer
</template>

<script setup>
import router from './router'
router.push({ name: "login" })
</script>
