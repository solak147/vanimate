<template>
  <div v-if="rootStroe.theme">
    <NuxtLayout>
      <v-app :theme="rootStroe.theme">
        <Header></Header>
        <p>被 NuxtLayout 包裹的元件將會放置到 Layout 的 slot 中</p>
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
