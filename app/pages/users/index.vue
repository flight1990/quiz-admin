<script setup lang="ts">
import {ref} from "vue";
import {UserType} from "../../types/moduls/UserType";
import CustomDataTable from "../../components/CustomDataTable/CustomDataTable.vue";

const headers = [
  {title: 'ID', key: 'id', fixed: true},
  {title: 'Имя', key: 'name'},
  {title: 'Email', key: 'email'},
  {title: 'Дата создания', key: 'created_at'},
  {title: 'Дата обновления', key: 'updated_at'},
  {title: 'Операции', key: 'actions', sortable: false},
]

const loading = ref<boolean>(false)
const items = ref<UserType[]>([])

</script>

<template>
  <custom-data-table :headers="headers" :items="items" :loading="loading"/>
</template>