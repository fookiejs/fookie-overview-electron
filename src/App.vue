<script setup>
import { useStore } from "./store";
import { onMounted, ref } from "vue";
import lodash from "lodash";
const store = useStore();
const models = ref([]);
onMounted(async () => {
  const res = await store.run({
    model: "model",
    method: "read",
  });
  models.value = res.data;
});
</script>

<template>
  <v-app>
    <v-main>
      <v-text-field v-model="store.$state.url" />
      <v-text-field v-model="store.$state.token" />
      <div v-for="m of models">{{ m.name }}</div>
    </v-main>
  </v-app>
</template>


