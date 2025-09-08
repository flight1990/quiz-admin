<script setup lang="ts">
import TheTableWrapper from "../../components/TheTableWrapper.vue";
import {useGuest} from "../../composables/useGuest";

const headers = [
  {title: 'ID', key: 'id', fixed: true},
  {title: 'UUID', key: 'uuid'},
  {title: 'Имя', key: 'name'},
  {title: 'Филиал', key: 'unit.name'},
  {title: 'IP адерс', key: 'ip_address', sortable: false},
  {title: 'Агент', key: 'user_agent', sortable: false},
  {title: 'Создан', key: 'created_at'},
  {title: 'Обновлен', key: 'updated_at'},
  {title: '', key: 'actions', sortable: false},
]

const  {loading, guestUsers, getGuestUsers} = useGuest()

getGuestUsers()
</script>

<template>
  <the-table-wrapper v-slot="{search}" @reload="getGuestUsers">
    <v-data-table
        :search="search"
        :headers="headers"
        :items="guestUsers"
        :loading="loading"
    >

    </v-data-table>
  </the-table-wrapper>
</template>
