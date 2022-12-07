<script setup>
import { useStore } from "./store";
import lodash from "lodash";
const store = useStore();
</script>

<template>
  <v-app>
    <v-main>
      <v-text-field v-model="store.$state.url" />
      <div v-for="m of store.list('model')">{{ m }}</div>
    </v-main>
  </v-app>
</template>


