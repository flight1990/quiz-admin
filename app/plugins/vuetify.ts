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
                mobileBreakpoint: 'sm',
                striped: 'odd',
                hover: true,
            }
        }
    })
    app.vueApp.use(vuetify)
})
