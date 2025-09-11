<script setup lang="ts">
import {ref, useSlots} from 'vue'
import type {DataTableHeader} from 'vuetify'
import CustomDataTableToolbar from './CustomDataTableToolbar.vue'

const props = defineProps<{
  headers?: DataTableHeader[]
  items?: Record<string, any>[]
  loading?: boolean
  page?: number
  itemsPerPage?: number
  hideSearch?: boolean
  hideToolbar?: boolean
  showSelect?: boolean
  showExpand?: boolean
  showCurrentPage?: boolean
}>()

const slots = useSlots();
const selected = defineModel<number | object[]>({default: []})
const search = ref<string | undefined>(undefined)

const emits = defineEmits<{ (e: 'reload'): void }>()
</script>

<template>
  <v-card rounded="xl">
    <v-card-text>
      <custom-data-table-toolbar
          :hide-search="hideSearch"
          :hide-toolbar="hideToolbar"
          v-model:search="search"
          @reload="emits('reload')"
      />

      <v-data-table
          v-bind="props"
          :search="search"
          v-model="selected"
      >
        <template v-for="(_, slot) of slots" v-slot:[slot]="scope">
          <slot :name="slot" v-bind="scope" />
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>
