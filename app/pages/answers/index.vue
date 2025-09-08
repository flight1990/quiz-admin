<script setup lang="ts">
import TheTableWrapper from "../../components/TheTableWrapper.vue";
import {useAnswer} from "../../composables/useAnswer";

const headers = [
  {title: 'ID', key: 'id', fixed: true},
  {title: 'Вопрос', key: 'question.text', sortable: false},
  {title: 'Пользователь', key: 'guest_user.uuid', sortable: false},
  {title: 'Свой ответ', key: 'other',  sortable: false},
  {title: 'Ответы', key: 'options', sortable: false},
  {title: 'Дата создания', key: 'created_at'},
  {title: 'Дата обновления', key: 'updated_at'},
  {title: 'Операции', key: 'actions', sortable: false},
]

const {loading, answers, getAnswers} = useAnswer()

getAnswers()
</script>

<template>
  <the-table-wrapper v-slot="{search}" @reload="getAnswers">
    <v-data-table
        :search="search"
        :headers="headers"
        :items="answers"
        :loading="loading"
    >

    </v-data-table>
  </the-table-wrapper>
</template>
