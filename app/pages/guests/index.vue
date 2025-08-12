<script setup lang="ts">
import {ref} from "vue";
import {GuestUserType} from "../../types/moduls/GuestUserType";
import TheTableWrapper from "../../components/TheTableWrapper.vue";

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
