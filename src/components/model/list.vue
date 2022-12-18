<script setup>
import { useStore } from "@/store/index.js";
import { onMounted, onUpdated, ref, toRef, watch } from "vue";
import lodash from "lodash";
const store = useStore();

const entities = ref([]);
const loading = ref(true);

const props = defineProps(["model"]);
const model = toRef(props, "model");

watch(model, async (n, o) => {
  loading.value = true;
  const res = await store.run({
    model: n.name,
    method: "read",
  });
  entities.value = res.data;
  loading.value = false;
});
</script>

<template lang="pug">
v-progress-linear(v-if="loading" indeterminate)
v-table(v-else)
  thead 
    tr
      th(v-for="field of lodash.keys(model.schema)") {{field}}     
  tbody
    tr(v-for="entity of entities") 
      td(v-for="field of lodash.keys(model.schema)") 
        div(v-if="model.schema[field].type === 'function'")
          strong [Function]
        div(v-else-if="model.schema[field].type === 'object'")
          div() {{entity[field]}}    
        div(v-else-if="model.schema[field].type === 'boolean'")
          v-chip(:color="entity[field] ? 'green' : 'red'") {{ entity[field] ? true : false }}    
        div(v-else)  {{entity[field]}}     
</template>

<style scoped>
</style>


