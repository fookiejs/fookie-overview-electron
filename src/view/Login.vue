<template lang="pug">
v-main(app)
    v-container(class="tw-h-screen tw-flex tw-items-center tw-justify-center")
        v-card(width="400")
            v-card-title Connections
            v-divider
            v-card-text
                v-hover(v-for="i in 3" v-slot="{ hover, props }") 
                    v-card(class="tw-mb-4" :color="hover ? 'green' : ''" @click = "login(i)")
                        v-card-title server
                        v-card-subtitle 127.0.0.1
                        v-card-actions
                            v-spacer
                            v-btn(icon)
                                v-icon mdi-delete
            v-card-actions
                v-btn(block color="green") asd
                    v-icon() mdi-plus
</template>

<script setup>
import router from '../router'

async function login(id){
    console.log(id);
    router.push({name:"home"})
}
</script>
