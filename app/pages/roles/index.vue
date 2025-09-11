<script setup lang="ts">
import {ref} from "vue";
import {RoleType} from "../../types/moduls/RoleType";
import CustomDataTable from "../../components/CustomDataTable/CustomDataTable.vue";

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
  <custom-data-table :headers="headers" :items="items" :loading="loading" />
</template>
