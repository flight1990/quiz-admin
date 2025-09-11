<script setup lang="ts">
import {ref} from "vue";
import {QuestionType} from "../../types/moduls/QuestionType";
import CustomDataTable from "../../components/CustomDataTable/CustomDataTable.vue";

const headers = [
  {title: 'ID', key: 'id', fixed: true},
  {title: 'Вопрос', key: 'text', sortable: false},
  {title: 'Порядок', key: 'order'},
  {title: 'Время на ответ', key: 'answer_timer', sortable: false},
  {title: 'Операции', key: 'actions', sortable: false},
]

const loading = ref<boolean>(false)
const items = ref<QuestionType[]>([])
</script>

<template>
  <custom-data-table :headers="headers" :items="items" :loading="loading"/>
</template>
