<script setup lang="ts">
import TheTableWrapper from "../../components/TheTableWrapper.vue";
import {reactive, ref} from "vue";
import type {OptionType} from "../../types/moduls/OptionType";
import type {IApiInterface} from "../../types/IApiInterface";
import {useNuxtApp} from "nuxt/app";
import {type IServerApiInterface} from "../../types/IServerApiInterface";

const headers = [
  {title: 'ID', key: 'id', fixed: true},
  {title: 'Ответ', key: 'text'},
  {title: 'Вопрос', key: 'question.text', sortable: false},
  {title: 'Корректный', key: 'is_correct'},
  {title: 'Свой ответ', key: 'is_other'},
  {title: '', key: 'actions', sortable: false},
]

const loading = ref<boolean>(false)
const items = ref<OptionType[]>([])

const params = reactive({
  with: 'question'
})

const {$serverApi}: {$serverApi: IServerApiInterface} = useNuxtApp()

const getOptions = async () => {
  try {
    loading.value = true

    const {data} = await $serverApi.option.getOptions(params)
    items.value = data

  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false
  }
}

getOptions()
</script>

<template>
  <the-table-wrapper v-slot="{search}" @reload="getOptions">
    <v-data-table
        :search="search"
        :headers="headers"
        :items="items"
        :loading="loading"
    >

    </v-data-table>
  </the-table-wrapper>
</template>
