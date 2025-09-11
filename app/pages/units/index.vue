<script setup lang="ts">
import {ref} from "vue";
import type {UnitType} from "../../types/moduls/UnitType";
import {useNuxtApp} from "nuxt/app";
import CustomDataTable from "../../components/CustomDataTable/CustomDataTable.vue";

const headers = [
  {title: 'ID', key: 'id'},
  {title: 'Название', key: 'name'},
]

const loading = ref<boolean>(false)
const items = ref<UnitType[]>([])

const {$api} = useNuxtApp();

const getUnits = async () => {
  try {
    loading.value = true

    const {data} = await $api.unit.getUnits()
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
  <custom-data-table
      :headers="headers"
      :items="items"
      :loading="loading"
      @reload="getUnits"
  >

  </custom-data-table>
</template>
