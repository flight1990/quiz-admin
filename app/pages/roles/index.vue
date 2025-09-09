<script setup lang="ts">
import TheTableWrapper from "../../components/TheTableWrapper.vue";
import {reactive, ref} from "vue";
import type {RoleType} from "../../types/moduls/RoleType";

import {useNuxtApp} from "nuxt/app";
import {type IServerApi} from "../../types/IServerApi";
import {definePageMeta} from "../../../.nuxt/imports";

definePageMeta({
  requiresAuth: true,
});


const headers = [
  {title: 'ID', key: 'id', fixed: true},
  {title: 'Название', key: 'name'},
  {title: 'Права', key: 'permissions'},
  {title: 'Дата создания', key: 'created_at'},
  {title: 'Дата обновления', key: 'updated_at'},
  {title: 'Операции', key: 'actions', sortable: false},
]

const loading = ref<boolean>(false)
const items = ref<RoleType[]>([])

const params = reactive({
  with: 'permissions'
})

const {$serverApi}: { $serverApi: IServerApi} = useNuxtApp()

const getRoles = async () => {
  try {
    loading.value = true

    const {data} = await $serverApi.role.getRoles(params)
    items.value = data

  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false
  }
}

getRoles()
</script>

<template>
  <the-table-wrapper v-slot="{search}" @reload="getRoles">
    <v-data-table
        :search="search"
        :headers="headers"
        :items="items"
        :loading="loading"
    >

    </v-data-table>
  </the-table-wrapper>
</template>
