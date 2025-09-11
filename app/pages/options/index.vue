<script setup lang="ts">
import {ref} from "vue";
import {OptionType} from "../../types/moduls/OptionType";
import CustomDataTable from "../../components/CustomDataTable/CustomDataTable.vue";

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
  <custom-data-table :headers="headers" :items="items" :loading="loading" />
</template>
