<script setup lang="ts">
import {ref} from "vue"

defineProps<{
  title?: string
  subtitle?: string
}>()

const search = ref<string | undefined>(undefined)

const emits = defineEmits<{
  (e: 'reload'): void
}>()
const onSearchClear = () => search.value = undefined
</script>

<template>
  <v-card rounded="lg">
    <v-card-title v-if="title" class="font-weight-bold text-subtitle-1">{{ title }}</v-card-title>
    <v-card-subtitle v-if="subtitle" class="mb-3 text-caption text-grey">{{ subtitle }}</v-card-subtitle>

    <v-card-text>
      <div class="d-flex align-center justify-space-between ga-4">
        <v-btn color="grey" variant="text" size="small" icon="mdi-reload" @click="emits('reload')"/>

        <div class="w-100 w-md-25">
          <v-text-field
              rounded="lg"
              variant="outlined"
              density="compact"
              hide-details
              single-line
              prepend-inner-icon="mdi-magnify"
              label="Поиск..."
              v-model="search"
              clearable
              @click:clear="onSearchClear"
          />
        </div>
      </div>

      <slot :search="search"/>
    </v-card-text>
  </v-card>
</template>