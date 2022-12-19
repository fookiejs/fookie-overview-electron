<script setup>
import { useStore } from "@/store/index.js";
import { onMounted, onUpdated, ref, toRef, watch } from "vue";
import lodash from "lodash";
const store = useStore();
</script>

<template lang="pug">
v-footer
.px-4.py-2.text-center.w-100
  span {{ new Date().getFullYear() }}
  strong FookieJS Overview
</template>


