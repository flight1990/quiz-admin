<script setup lang="ts">
import {definePageMeta} from "../../.nuxt/imports";
import type {IServerApi} from "../types/IServerApi";
import {useNuxtApp} from "nuxt/app";

definePageMeta({
  requiresAuth: true,
});

const {$serverApi}: { $serverApi: IServerApi } = useNuxtApp();

const getExternalObjects = async () => {
  try {
    const response = await $serverApi.externalObject.getObjects()
    console.log(response)
  } catch (e) {
    console.log(e)
  }
}

getExternalObjects()
</script>

<template>
  <div>

  </div>
</template>
