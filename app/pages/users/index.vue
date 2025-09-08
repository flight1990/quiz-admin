<script setup lang="ts">
import TheTableWrapper from "../../components/TheTableWrapper.vue";
import {useUser} from "../../composables/useUser";

const headers = [
  {title: 'ID', key: 'id', fixed: true},
  {title: 'Имя', key: 'name'},
  {title: 'Email', key: 'email'},
  {title: 'Роли', key: 'roles', sortable: false},
  {title: 'Дата создания', key: 'created_at'},
  {title: 'Дата обновления', key: 'updated_at'},
  {title: 'Операции', key: 'actions', sortable: false},
]

const {loading, users, getUsers} = useUser()

getUsers()
</script>

<template>
  <the-table-wrapper v-slot="{search}" @reload="getUsers">
    <v-data-table
        :search="search"
        :headers="headers"
        :items="users"
        :loading="loading"
    >

    </v-data-table>
  </the-table-wrapper>
</template>