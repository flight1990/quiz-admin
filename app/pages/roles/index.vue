<script setup lang="ts">
import TheTableWrapper from "../../components/TheTableWrapper.vue";
import {ref} from "vue";
import {RoleType} from "../../types/RoleType";

const headers = [
  {title: 'ID', key: 'id', fixed: true},
  {title: 'Название', key: 'name'},
  {title: 'Дата создания', key: 'created_at'},
  {title: 'Дата обновления', key: 'updated_at'},
  {title: 'Операции', key: 'actions', sortable: false},
]

const loading = ref<boolean>(false)
const items = ref<RoleType[]>([])

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
