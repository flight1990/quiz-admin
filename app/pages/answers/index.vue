<script setup lang="ts">
import TheTableWrapper from "../../components/TheTableWrapper.vue";
import {reactive, ref} from "vue";
import type {AnswerType} from "../../types/moduls/AnswerType";
import type {IApiInterface} from "../../types/IApiInterface";
import {useNuxtApp} from "nuxt/app";

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

const loading = ref<boolean>(false)
const items = ref<AnswerType[]>([])

const params = reactive({
  with: 'guestUser,options,question'
})

const {$api}: {$api: IApiInterface} = useNuxtApp()

const getAnswers = async () => {
  try {
    loading.value = true

    const {data} = await $api.answer.getAnswers(params)
    items.value = data

  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false
  }
}

getAnswers()
</script>

<template>
  <the-table-wrapper v-slot="{search}" @reload="getAnswers">
    <v-data-table
        :search="search"
        :headers="headers"
        :items="items"
        :loading="loading"
    >

    </v-data-table>
  </the-table-wrapper>
</template>
