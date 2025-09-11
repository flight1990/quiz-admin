<script setup lang="ts">
import {ref} from "vue";
import {AnswerType} from "../../types/moduls/AnswerType";
import CustomDataTable from "../../components/CustomDataTable/CustomDataTable.vue";

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
  <custom-data-table :headers="headers" :items="items" :loading="loading" />
</template>
