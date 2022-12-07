import { defineStore } from "pinia";
import axios from 'axios'
export const useStore = defineStore("counter", {
    state: () => {
        return {
            entites: {
                model: ["a", "b", "c"],
                database: [],
                lifecycle: [],
                setting: [],
                mixin: [],
            },
            url: "http://localhost:2626",
            token: "admin",
        };
    },
    actions: {
        list(model) { return this.$state.entites[model] },
        async run(payload) {
            const { url } = this.$state
            const res = await axios.post(url, {
                ...payload, token
            })
            return await res.data
        },
        sync(payload) { return this.$state.entites[model] },
    },
});