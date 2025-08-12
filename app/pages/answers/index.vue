<script setup lang="ts">
import TheTableWrapper from "../../components/TheTableWrapper.vue";
import {ref} from "vue";
import {AnswerType} from "../../types/AnswerType";

const headers = [
  {title: 'ID', key: 'id', fixed: true},
  {title: 'Вопрос', key: 'question.text', sortable: false},
  {title: 'Пользователь', key: 'guest_user.uuid'},
  {title: 'Свой ответ', key: 'other',  sortable: false},
  {title: 'Ответы', key: 'options', sortable: false},
  {title: 'Дата создания', key: 'created_at'},
  {title: 'Дата обновления', key: 'updated_at'},
  {title: 'Операции', key: 'actions', sortable: false},
]

const loading = ref<boolean>(false)
const items = ref<AnswerType[]>([])

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
