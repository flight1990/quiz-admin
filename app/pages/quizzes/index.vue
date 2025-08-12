<script setup lang="ts">
import TheTableWrapper from "../../components/TheTableWrapper.vue";
import {ref} from "vue";
import {QuizType} from "../../types/moduls/QuizType";

const headers = [
  {title: 'ID', key: 'id', fixed: true},
  {title: 'Название', key: 'title'},
  {title: 'Описание', key: 'description'},
  {title: 'Анонимный', key: 'is_anonymous'},
  {title: 'Активный', key: 'is_active'},
  {title: 'Дата создания', key: 'created_at'},
  {title: 'Дата обновления', key: 'updated_at'},
  {title: 'Операции', key: 'actions', sortable: false},
]

const loading = ref<boolean>(false)
const items = ref<QuizType[]>([])
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