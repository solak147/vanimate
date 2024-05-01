<template>
  <div class="">
    <v-app-bar :elevation="0" rounded>
      <template #prepend>
        <img src="~/assets/logo.png" class="logo" />
      </template>

      <v-app-bar-title>
        <div class="text-center">
          <v-menu v-model="menu" :close-on-content-click="false" location="end">
            <template #activator="{ props }">
              <!-- <v-btn color="indigo" v-bind="props"> Menu as Popover </v-btn> -->
              <v-text-field v-bind="props" placeholder="請輸入動畫名稱" class="w-25 mt-5">
                <template #append>
                  <v-icon color="info" icon="mdi-magnify"> </v-icon>
                </template>
                <template #prepend> </template>
              </v-text-field>
            </template>

            <v-card
              min-width="300"
              max-width="400"
              class="bg-grey-darken-3"
              style="font-size: 12px"
            >
              <div class="d-flex justify-space-between pa-2">
                <div>
                  <v-icon icon="mdi-clock"></v-icon>
                  <span class="ml-2">最近瀏覽</span>
                </div>
                <v-icon icon="mdi-delete"></v-icon>
              </div>

              <v-list class="pa-2" style="background: #424242 !important">
                <v-btn
                  v-for="(v, k) in recently"
                  :key="k"
                  variant="elevated"
                  class="bg-grey-darken-2 mr-1 mt-1"
                  style="font-size: 12px"
                  @click="menu = false"
                >
                  {{ v }}
                </v-btn>
              </v-list>

              <v-divider></v-divider>

              <div class="d-flex justify-space-between pa-2">
                <div>
                  <v-icon icon="mdi-fire"></v-icon>
                  <span class="ml-2">熱門搜尋</span>
                </div>
              </div>

              <v-list class="pa-2 ml-1" style="background: #424242 !important">
                <v-btn
                  v-for="(v, k) in hot"
                  :key="k"
                  variant="elevated"
                  class="bg-grey-darken-2 mr-1 mb-1"
                  style="font-size: 12px"
                  @click="menu = false"
                >
                  {{ v }}
                </v-btn>
              </v-list>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                  prepend-icon="mdi-animation"
                  color="primary"
                  variant="elevated"
                  class="w-100"
                  @click="menu = false"
                >
                  分類篩選
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </div>
      </v-app-bar-title>

      <template #append>
        <v-btn icon="mdi-heart"></v-btn>

        <v-btn icon="mdi-magnify"></v-btn>

        <v-btn icon="mdi-dots-vertical"></v-btn>

        <v-btn @click="toggleTheme">toggle theme</v-btn>
      </template>
    </v-app-bar>
  </div>
</template>

<script lang="ts" setup>
import { useRootStore } from '@/stores/root'

const rootStroe = useRootStore()
const rules = [
  (value: string) => !!value || 'Required.',
  (value: string) => (value && value.length >= 3) || 'Min 3 characters'
]

const recently = ref(['紫羅蘭', '刀劍', '鬼滅'])
const hot = ref(['排球少年', '排球', '史萊姆', '無職', '葬送', '為美好'])
const menu = ref(false)

function toggleTheme() {
  if (rootStroe.theme === 'dark') {
    rootStroe.theme = 'light'
  } else {
    rootStroe.theme = 'dark'
  }
}
</script>

<style scoped>
.logo {
  width: 80px;
  height: 40px;
}

:deep(.v-field__input) {
  padding-top: 10px;
  padding-bottom: 10px;
  min-height: 20px;
}
</style>
