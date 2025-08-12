<script setup lang="ts">
import TheForm from "../components/TheForm.vue";
import {reactive, ref} from "vue";
import type {IApiInterface} from "../types/IApiInterface";
import {useNuxtApp} from "nuxt/app";
import type {TokenType} from "../types/moduls/TokenType";
import {useAuthStore} from "../stores/authStore";

const authStore = useAuthStore()
const processing = ref(false)
const {$api}: {$api: IApiInterface} = useNuxtApp();

const payload = reactive<{
  username: string
  password: string
}>({
  username: '',
  password: ''
})

const getToken = async () => {
  try {
    processing.value = true
    const {access_token, refresh_token}: TokenType = await $api.token.token(payload)
    authStore.login(access_token, refresh_token)
  } catch (e) {
    console.error(e)
  } finally {
    processing.value = false
  }
}

</script>

<template>
  <the-form button-title="Авторизация" :processing="processing" @submit="getToken">
    <v-text-field
      label="Email"
      v-model="payload.username"
    />

    <v-text-field
        type="password"
        label="Пароль"
        v-model="payload.password"
    />
  </the-form>
</template>