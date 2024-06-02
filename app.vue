<template>
  <div v-if="rootStroe.theme">
    <NuxtLayout>
      <v-app :theme="rootStroe.theme">
        <Header></Header>
        <NuxtPage />
      </v-app>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import { useRootStore } from '@/stores/root'

const rootStroe = useRootStore()

if (process.client) {
  const root = JSON.parse(localStorage.getItem('root') || '{}')
  rootStroe.theme = root.theme
}
</script>
