<script setup lang="ts">
import TheTableWrapper from "../../components/TheTableWrapper.vue";
import {ref} from "vue";
import type {UnitType} from "../../types/moduls/UnitType";
import {useNuxtApp} from "nuxt/app";
import type {IApiInterface} from "../../types/IApiInterface";
import {type IServerApiInterface} from "../../types/IServerApiInterface";

const headers = [
  {title: 'ID', key: 'id', fixed: true},
  {title: 'Название', key: 'name'},
  {title: 'Операции', key: 'actions', sortable: false},
]

const loading = ref<boolean>(false)
const items = ref<UnitType[]>([])

const {$serverApi}: {$serverApi: IServerApiInterface} = useNuxtApp();

const getUnits = async () => {
  try {
    loading.value = true

    const {data} = await $serverApi.unit.getUnits()
    items.value = data

  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false
  }
}
getUnits()
</script>

<template>
  <the-table-wrapper v-slot="{search}" @reload="getUnits">
    <v-data-table
        :search="search"
        :headers="headers"
        :items="items"
        :loading="loading"
    >

    </v-data-table>
  </the-table-wrapper>
</template>
