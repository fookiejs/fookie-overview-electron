
import { reactive } from 'vue'
import axios from 'axios'
import lodash from 'lodash'

export default {
    install: (app, options) => {
        const fookie = {
            token: "",
            url: "",
            store: reactive({}),
            run: async function (payload) {
                payload.token = fookie.token
                const response = await axios.post(fookie.url, payload)
                if (!!fookie.store[payload.model]) {
                    fookie.store[payload.model] = []
                }
                return response.data
            },
            local: {
                read: function (model, query) {
                    return lodash.filter(fookie.store[model],query)
                },
                random: function (model) {
                    return ctx.lodash.sample(ctx.store[model])
                },
            }
        }
        app.provide("fookie", fookie)

    }
}