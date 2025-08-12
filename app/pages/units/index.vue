<script setup lang="ts">
import TheTableWrapper from "../../components/TheTableWrapper.vue";
import {ref} from "vue";
import {UnitType} from "../../types/UnitType";

const headers = [
  {title: 'ID', key: 'id', fixed: true},
  {title: 'Название', key: 'name'},
  {title: 'Операции', key: 'actions', sortable: false},
]

const loading = ref<boolean>(false)
const items = ref<UnitType[]>([])

</script>

<template>
  <the-table-wrapper v-slot="{search}">
    <v-data-table
        :search="search"
        :headers="headers"
        :items="items"
        :loading="loading"
    >

    </v-data-table>
  </the-table-wrapper>
</template>
