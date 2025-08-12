<script setup lang="ts">
import TheTableWrapper from "../../components/TheTableWrapper.vue";
import {reactive, ref} from "vue";
import type {QuizType} from "../../types/moduls/QuizType";
import type {IApiInterface} from "../../types/IApiInterface";
import {useNuxtApp} from "nuxt/app";

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

const {$api}: {$api: IApiInterface} = useNuxtApp()

const getQuizzes = async () => {
  try {
    loading.value = true

    const {data} = await $api.quiz.getQuizzes()
    items.value = data

  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false
  }
}

getQuizzes()
</script>

<template>
  <the-table-wrapper v-slot="{search}" @reload="getQuizzes">
    <v-data-table
        :search="search"
        :headers="headers"
        :items="items"
        :loading="loading"
    >

    </v-data-table>
  </the-table-wrapper>
</template>