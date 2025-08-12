<script setup lang="ts">
import TheTableWrapper from "../../components/TheTableWrapper.vue";
import {ref} from "vue";
import {QuizUserType} from "../../types/moduls/QuizUserType";

const headers = [
  {title: 'ID', key: 'id', fixed: true},
  {title: 'Викторина', key: 'quiz', sortable: false},
  {title: 'Пользователь', key: 'guest_user', sortable: false},
  {title: 'Дата завершения', key: 'completed_at'},
  {title: 'Дата создания', key: 'created_at'},
  {title: 'Дата обновления', key: 'updated_at'},
  {title: 'Операции', key: 'actions', sortable: false},
]

const loading = ref<boolean>(false)
const items = ref<QuizUserType[]>([])

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
