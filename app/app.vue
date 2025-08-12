<script setup lang="ts">
import {ref, computed} from "vue";
import TheAppBar from "./components/TheAppBar.vue";
import TheSideBar from "./components/TheSideBar.vue";
import {useMenuStore} from "./stores/menuStore";
import {useRoute} from "nuxt/app";

const route = useRoute()
const menuStore = useMenuStore()
const drawer = ref<boolean>(true)

const activeRoute = computed(() => menuStore.items.find(i => i.to.name === route.name))

</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator/>
    <NuxtRouteAnnouncer/>
    <NuxtErrorBoundary/>
    <v-app class="bg-grey-lighten-3">
      <v-layout>
        <the-side-bar :items="menuStore.items" v-model="drawer"/>
        <the-app-bar v-model="drawer"/>

        <v-main>
          <v-container>
            <h2>{{ activeRoute?.title }}</h2>

            <div class="my-4">
              <NuxtPage/>
            </div>
          </v-container>
        </v-main>
      </v-layout>
    </v-app>
  </NuxtLayout>
</template>
