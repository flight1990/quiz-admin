<script setup lang="ts">
import TheTableWrapper from "../../components/TheTableWrapper.vue";
import {useQuestion} from "../../composables/useQestion";
import {definePageMeta} from "../../../.nuxt/imports";

definePageMeta({
  requiresAuth: true,
});


const headers = [
  {title: 'ID', key: 'id', fixed: true},
  {title: 'Вопрос', key: 'text', sortable: false},
  {title: 'Викторина', key: 'quiz.title', sortable: false},
  {title: 'Порядок', key: 'order'},
  {title: 'Время на ответ', key: 'answer_timer', sortable: false},
  {title: 'Операции', key: 'actions', sortable: false},
]

const {loading, questions, getQuestions} = useQuestion()

getQuestions()
</script>

<template>
  <the-table-wrapper v-slot="{search}" @reload="getQuestions">
    <v-data-table
        :search="search"
        :headers="headers"
        :items="questions"
        :loading="loading"
    >

    </v-data-table>
  </the-table-wrapper>
</template>
