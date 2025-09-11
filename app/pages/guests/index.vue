<script setup lang="ts">
import {ref} from "vue";
import {GuestUserType} from "../../types/moduls/GuestUserType";
import CustomDataTable from "../../components/CustomDataTable/CustomDataTable.vue";

const headers = [
  {title: 'ID', key: 'id', fixed: true},
  {title: 'UUID', key: 'uuid'},
  {title: 'Имя', key: 'name'},
  {title: 'IP адерс', key: 'ip_address', sortable: false},
  {title: 'Агент', key: 'user_agent', sortable: false},
  {title: 'Создан', key: 'created_at'},
  {title: 'Обновлен', key: 'updated_at'},
  {title: '', key: 'actions', sortable: false},
]

const loading = ref<boolean>(false)
const items = ref<GuestUserType[]>([])

</script>

<template>
  <custom-data-table :headers="headers" :items="items" :loading="loading" />
</template>
