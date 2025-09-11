<script setup lang="ts">
import {ref} from "vue";
import {QuizType} from "../../types/moduls/QuizType";
import CustomDataTable from "../../components/CustomDataTable/CustomDataTable.vue";

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
  <custom-data-table :headers="headers" :items="items" :loading="loading" />
</template>