<script setup lang="ts">

withDefaults(defineProps<{
  buttonTitle?: string
  processing?: boolean
}>(), {
  buttonTitle: 'Ok'
})

const emits = defineEmits<{
  (e: 'submit'): void
}>()

</script>

<template>
  <v-form :disabled="processing" @submit.prevent="emits('submit')">
    <slot/>

    <div class="d-flex align-center justify-end">
      <v-btn type="submit" color="primary" :loading="processing">{{ buttonTitle }}</v-btn>
    </div>
  </v-form>
</template>
