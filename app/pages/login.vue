<script setup lang="ts">
import TheForm from "../components/TheForm.vue";
import {reactive} from "vue";
import {useToken} from "../composables/useToken";

const {processing, login} = useToken()

const payload = reactive<{
  username: string
  password: string
}>({
  username: '',
  password: ''
})

</script>

<template>
  <the-form button-title="Авторизация" :processing="processing" @submit="login(payload)">
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