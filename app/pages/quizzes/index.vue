<script setup lang="ts">
import TheTableWrapper from "../../components/TheTableWrapper.vue";
import {useQuiz} from "../../composables/useQuiz";
import {definePageMeta} from "../../../.nuxt/imports";

definePageMeta({
  requiresAuth: true,
});


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

const {loading, quizzes, getQuizzes} = useQuiz()

getQuizzes()
</script>

<template>
  <the-table-wrapper v-slot="{search}" @reload="getQuizzes">
    <v-data-table
        :search="search"
        :headers="headers"
        :items="quizzes"
        :loading="loading"
    >

    </v-data-table>
  </the-table-wrapper>
</template>