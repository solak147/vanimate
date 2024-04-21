<template>
  <div>
    <v-btn @click="toggleTheme">toggle theme</v-btn>
  </div>
</template>

<script lang="ts" setup>
import { useRootStore } from '@/stores/root'

const rootStroe = useRootStore()

function toggleTheme() {
  if (rootStroe.theme === 'dark') {
    rootStroe.theme = 'light'
  } else {
    rootStroe.theme = 'dark'
  }
}
</script>
