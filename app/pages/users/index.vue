<script setup lang="ts">
import TheTableWrapper from "../../components/TheTableWrapper.vue";
import {reactive, ref} from "vue";
import type {UserType} from "../../types/moduls/UserType";
import {useNuxtApp} from "nuxt/app";
import {type IServerApiInterface} from "../../types/IServerApiInterface";

const headers = [
  {title: 'ID', key: 'id', fixed: true},
  {title: 'Имя', key: 'name'},
  {title: 'Email', key: 'email'},
  {title: 'Роли', key: 'roles', sortable: false},
  {title: 'Дата создания', key: 'created_at'},
  {title: 'Дата обновления', key: 'updated_at'},
  {title: 'Операции', key: 'actions', sortable: false},
]

const loading = ref<boolean>(false)
const items = ref<UserType[]>([])

const params = reactive({
  with: 'roles'
})

const {$serverApi}: {$serverApi: IServerApiInterface} = useNuxtApp()

const getUsers = async () => {
  try {
    loading.value = true

    const {data} = await $serverApi.user.getUsers(params)
    items.value = data

  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false
  }
}

getUsers()
</script>

<template>
  <the-table-wrapper v-slot="{search}" @reload="getUsers">
    <v-data-table
        :search="search"
        :headers="headers"
        :items="items"
        :loading="loading"
    >

    </v-data-table>
  </the-table-wrapper>
</template>