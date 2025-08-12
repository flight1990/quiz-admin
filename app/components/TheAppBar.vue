<script setup lang="ts">
import {defineModel} from "vue";

const drawer = defineModel()
</script>

<template>
  <v-app-bar border="b" class="ps-4" flat>
    <v-app-bar-nav-icon @click="drawer = !drawer" />
    <v-app-bar-title>Application</v-app-bar-title>
  </v-app-bar>
</template>
