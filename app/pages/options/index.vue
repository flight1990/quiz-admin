<script setup lang="ts">
import TheTableWrapper from "../../components/TheTableWrapper.vue";
import {ref} from "vue";
import {OptionType} from "../../types/OptionType";

const headers = [
  {title: 'ID', key: 'id', fixed: true},
  {title: 'Ответ', key: 'text'},
  {title: 'Корректный', key: 'is_correct'},
  {title: 'Свой ответ', key: 'is_other'},
  {title: '', key: 'actions', sortable: false},
]

const loading = ref<boolean>(false)
const items = ref<OptionType[]>([])

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
