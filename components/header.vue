<template>
  <div class="" style="height: 35vh">
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

        <v-btn class="my-button" @click="toggleTheme">toggle theme</v-btn>
      </template>
    </v-app-bar>

    <v-app-bar :elevation="0">
      <v-app-bar-title class="ml-0">
        <v-tabs v-model="tab" bg-color="primary">
          <v-tab value="one">首頁</v-tab>
          <v-tab value="two">所有動畫</v-tab>
          <v-tab value="three">觀看紀錄</v-tab>
        </v-tabs>
      </v-app-bar-title>
    </v-app-bar>

    <v-carousel show-arrows="hover" hide-delimiters class="h-100 mt-16">
      <v-carousel-item
        src="https://truth.bahamut.com.tw/s01/202404/f7d1489cbffe281049ce1c2014b50d87.JPG"
        contain
      ></v-carousel-item>

      <v-carousel-item
        src="https://truth.bahamut.com.tw/s01/202404/67dc4a269e640db0a792a777f7897d3a.JPG"
        contain
      ></v-carousel-item>

      <v-carousel-item
        src="https://truth.bahamut.com.tw/s01/202404/97e9c38d2f5eae6d8e624516f2e63ae6.JPG"
        contain
      ></v-carousel-item>
    </v-carousel>
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
const tab = ref(null)

function toggleTheme() {
  if (rootStroe.theme === 'dark') {
    rootStroe.theme = 'light'
  } else {
    rootStroe.theme = 'dark'
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/settings';

.my-button {
  height: settings.$font-size-root;
}

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
