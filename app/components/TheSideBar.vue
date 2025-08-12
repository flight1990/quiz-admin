<script setup lang="ts">
import {defineModel} from "vue"
import {MenuType} from "../types/moduls/MenuType";

defineProps<{
  items: MenuType[]
}>()

const drawer = defineModel()
</script>

<template>
  <v-navigation-drawer expand-on-hover rail v-model="drawer">
    <v-list slim density="compact" color="primary" item-props :items="items" nav />
  </v-navigation-drawer>
</template>
