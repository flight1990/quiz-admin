<script setup lang="ts">
import TheTableWrapper from "../../components/TheTableWrapper.vue";
import {useOption} from "../../composables/useOption";

const headers = [
  {title: 'ID', key: 'id', fixed: true},
  {title: 'Ответ', key: 'text'},
  {title: 'Вопрос', key: 'question.text', sortable: false},
  {title: 'Корректный', key: 'is_correct'},
  {title: 'Свой ответ', key: 'is_other'},
  {title: '', key: 'actions', sortable: false},
]

const {loading, options, getOptions} = useOption()

getOptions()
</script>

<template>
  <the-table-wrapper v-slot="{search}" @reload="getOptions">
    <v-data-table
        :search="search"
        :headers="headers"
        :items="options"
        :loading="loading"
    >

    </v-data-table>
  </the-table-wrapper>
</template>
