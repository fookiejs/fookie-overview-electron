import { defineStore } from "pinia";
import axios from 'axios'
export const useStore = defineStore("counter", {
    state: () => {
        return {
            entites: {
                model: [],
                database: [],
                lifecycle: [],
                setting: [],
                mixin: [],
            },
            url: "https://b58j60bwy8.execute-api.eu-central-1.amazonaws.com/dev/",
            token: "umudik",
        };
    },
    actions: {
        list(model) { return this.$state.entites[model] },
        async run(payload) {
            const { url, token } = this.$state
            const res = await axios.post(url, {
                ...payload, token
            })
            return await res.data
        },
        sync(payload) { return this.$state.entites[model] },
    },
});