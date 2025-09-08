<script setup lang="ts">
import TheTableWrapper from "../../components/TheTableWrapper.vue";
import {useUnit} from "../../composables/useUnit";

const headers = [
  {title: 'ID', key: 'id', fixed: true},
  {title: 'Название', key: 'name'},
  {title: 'Операции', key: 'actions', sortable: false},
]

const {loading, units, getUnits} = useUnit()

getUnits()
</script>

<template>
  <the-table-wrapper v-slot="{search}" @reload="getUnits">
    <v-data-table
        :search="search"
        :headers="headers"
        :items="units"
        :loading="loading"
    >

    </v-data-table>
  </the-table-wrapper>
</template>
