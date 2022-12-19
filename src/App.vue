<script setup>
import { useStore } from "@/store/index.js";
import List from "@/components/model/list.vue";
import Header from "@/components/layout/header.vue";
import About from "@/components/model/about.vue";
import Footer from "@/components/layout/footer.vue";
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
  model.value = models.value[0];
  model_name.value = model.value.name;
});

watch(model_name, async function (newValue, oldValue) {
  model.value = lodash.find(models.value, { name: newValue });
});
</script>

<template lang="pug">
v-app(app)
  Header
  v-main(app)
    v-container(app)
      v-tabs(v-model="model_name") 
        v-tab(v-for="m of models", :value="m.name") {{ m.name }}
      v-tabs(v-if="model", v-model="type") 
        v-tab(value="about") About
        v-tab(value="list") List
      v-window(v-if="model", v-model="type")
        v-window-item(value="about")
          About(:model="model")
        v-window-item(value="list")
          List(:model="model", :key="model_name")
  Footer
</template>


