<script setup lang="ts">
import TheTableWrapper from "../../components/TheTableWrapper.vue";
import {reactive, ref} from "vue";
import type {QuestionType} from "../../types/moduls/QuestionType";
import type {IApiInterface} from "../../types/IApiInterface";
import {useNuxtApp} from "nuxt/app";
import {type IServerApiInterface} from "../../types/IServerApiInterface";

const headers = [
  {title: 'ID', key: 'id', fixed: true},
  {title: 'Вопрос', key: 'text', sortable: false},
  {title: 'Викторина', key: 'quiz.title', sortable: false},
  {title: 'Порядок', key: 'order'},
  {title: 'Время на ответ', key: 'answer_timer', sortable: false},
  {title: 'Операции', key: 'actions', sortable: false},
]

const loading = ref<boolean>(false)
const items = ref<QuestionType[]>([])

const params = reactive({
  with: 'quiz'
})

const {$serverApi}: {$api: IApiInterface, $serverApi: IServerApiInterface} = useNuxtApp()

const getQuestions = async () => {
  try {
    loading.value = true

    const {data} = await $serverApi.question.getQuestions(params)
    items.value = data

  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false
  }
}

getQuestions()
</script>

<template>
  <the-table-wrapper v-slot="{search}" @reload="getQuestions">
    <v-data-table
        :search="search"
        :headers="headers"
        :items="items"
        :loading="loading"
    >

    </v-data-table>
  </the-table-wrapper>
</template>
