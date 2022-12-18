<script setup>
import { useStore } from "@/store/index.js";
import List from "@/components/model/list.vue";
import About from "@/components/model/about.vue";
import { onMounted, ref, watch } from "vue";
import lodash from "lodash";
const store = useStore();
const models = ref([]);
const model = ref();
const model_name = ref();
const type = ref("about");

onMounted(async () => {
  const res = await store.run({
    model: "model",
    method: "read",
  });
  models.value = res.data;
});

watch(model_name, async function (newValue, oldValue) {
  model.value = lodash.find(models.value, { name: newValue });
});
</script>

<template lang="pug">
v-app(app)
  v-main(app)
    v-container(app)
      v-tabs(v-model="model_name")   
        v-tab(v-for='m of models' :value="m.name") {{m.name }}
      v-tabs(v-if="model" v-model="type")   
        v-tab(value="about") About
        v-tab(value="list") List
      v-window(v-if="model" v-model="type" continuous)
        v-window-item(value="about")
          About(:model="model")
        v-window-item(value="list")
          List(:model="model")
  v-footer()
    div(class="px-4 py-2 text-center w-100")
      span {{ new Date().getFullYear() }} 
        strong FookieJS Overview
</template>


