<script setup lang="ts">
import {defineModel} from "vue"
import type {MenuType} from "../types/moduls/MenuType";
import {useToken} from "../composables/useToken";

defineProps<{
  items: MenuType[]
}>()

const drawer = defineModel<boolean>()
const {logout} = useToken()

</script>

<template>
  <v-navigation-drawer expand-on-hover rail v-model="drawer">
    <v-list slim density="compact" color="primary" item-props :items="items" nav/>

    <template #append>
      <v-list slim density="compact" color="primary">
        <v-list-item prepend-icon="mdi-logout" title="Выход" @click.prevent="logout"/>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>
