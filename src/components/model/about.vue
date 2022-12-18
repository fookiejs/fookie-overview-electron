<script setup>
import { useStore } from "@/store/index.js";
import { onMounted, onUpdated, ref, toRef, watch } from "vue";
import lodash from "lodash";
const store = useStore();

const props = defineProps(["model"]);
const model = toRef(props, "model");
</script>

<template lang="pug">
v-card
  v-card-title Schema
  v-card-text
    v-row
      v-col(v-for="field,i of model.schema", cols="12", md="2", sm="4")
        v-card
          v-card-title {{ i }}
          v-divider
          v-table
            tbody
              tr(v-for="key of lodash.keys(field)")
                td {{ key }}
                td {{ field[key] }}
  v-card-title Lifecycle
  v-card-text(v-for="field,i of model.lifecycle", cols="12", md="2", sm="4")
    v-card-title {{ i }}
      v-divider
      v-table
        tbody
          tr(
            v-for="key of lodash.keys(lodash.omit(field,['accept','reject']))"
          )
            td {{ key }}
            td
              v-chip(v-for="a of field[key]") {{ a }}
    v-divider
</template>


