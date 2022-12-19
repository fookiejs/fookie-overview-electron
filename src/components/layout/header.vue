<script setup>
import { useStore } from "@/store/index.js";
import { onMounted, onUpdated, ref, toRef, watch } from "vue";
import lodash from "lodash";
const store = useStore();
</script>

<template lang="pug">
v-toolbar(density="comfortable", title="Overview")
</template>


