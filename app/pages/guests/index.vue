<script setup lang="ts">
import {reactive, ref} from "vue";
import type {GuestUserType} from "../../types/moduls/GuestUserType";
import TheTableWrapper from "../../components/TheTableWrapper.vue";
import type {IApiInterface} from "../../types/IApiInterface";
import {useNuxtApp} from "nuxt/app";

const headers = [
  {title: 'ID', key: 'id', fixed: true},
  {title: 'UUID', key: 'uuid'},
  {title: 'Имя', key: 'name'},
  {title: 'Филиал', key: 'unit.name'},
  {title: 'IP адерс', key: 'ip_address', sortable: false},
  {title: 'Агент', key: 'user_agent', sortable: false},
  {title: 'Создан', key: 'created_at'},
  {title: 'Обновлен', key: 'updated_at'},
  {title: '', key: 'actions', sortable: false},
]

const loading = ref<boolean>(false)
const items = ref<GuestUserType[]>([])

const params = reactive({
  with: 'unit'
})

const {$api}: {$api: IApiInterface} = useNuxtApp()

const getGuests = async () => {
  try {
    loading.value = true

    const {data} = await $api.guestUser.getGuestUsers(params)
    items.value = data

  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false
  }
}

getGuests()
</script>

<template>
  <the-table-wrapper v-slot="{search}" @reload="getGuests">
    <v-data-table
        :search="search"
        :headers="headers"
        :items="items"
        :loading="loading"
    >

    </v-data-table>
  </the-table-wrapper>
</template>
