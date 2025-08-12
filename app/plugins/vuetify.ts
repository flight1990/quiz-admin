import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import {ru} from "vuetify/locale"

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        ssr: false,
        locale: {
            locale: 'ru',
            messages: { ru },
        },
        defaults: {
            VDataTable: {
                mustSort: true,
                sortBy: [{key: 'id', order: 'desc'}],
                striped: 'odd',
                hover: true,
                headerProps: {class: 'text-caption text-uppercase text-grey-darken-2'}
            }
        }
    })
    app.vueApp.use(vuetify)
})
