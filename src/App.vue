<template lang="pug">
v-app
  router-view
  v-footer
</template>

<script setup>
import router from './router'
router.push({ name: "login" })
</script>
