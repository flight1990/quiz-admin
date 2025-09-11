<script setup lang="ts">
import {defineEmits, defineModel, defineProps} from 'vue'

defineProps<{
  hideSearch?: boolean
  hideToolbar?: boolean
}>()

const search = defineModel<string | undefined>('search', {default: undefined})

const emits = defineEmits<{
  (e: 'reload'): void
}>()

</script>

<template>
  <div class="pa-2 d-flex align-center justify-space-between ga-2">
    <v-btn-group v-if="!hideToolbar" density="compact" divided rounded="xl" >
      <v-btn  @click="emits('reload')">Reload</v-btn>
    </v-btn-group>

    <v-text-field
        v-if="!hideSearch"
        variant="outlined"
        density="compact"
        rounded="xl"
        hide-details
        single-line
        label="Поиск"
        v-model="search"
        clearable
        @click:clear="search = undefined"
    />
  </div>
</template>
