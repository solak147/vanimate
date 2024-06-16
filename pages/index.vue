<template>
  <div>
    <div class="d-flex justify-space-between mt-10 ml-5 mr-5">
      <v-tabs v-model="tab" hide-slider selected-class="activeTab">
        <v-tab value="one">本季新翻</v-tab>
        <v-tab value="two">週期表</v-tab>
      </v-tabs>

      <v-menu>
        <template #activator="{ props }">
          <v-btn v-bind="props" append-icon="mdi-filter-variant" variant="text">
            依更新日排列
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in order" :key="index" :value="index">
            <v-list-item-title>
              <v-icon icon="mdi-check" color="primary" class="mr-1"></v-icon
              >{{ item.title }}</v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <v-window v-model="tab">
      <v-window-item value="one">
        <v-row>
          <v-col class="px-12 pt-12">
            <v-range-slider
              :model-value="timeBar"
              :step="1"
              :ticks="seasons"
              max="3"
              min="0"
              show-ticks="always"
              thumb-label="always"
              tick-size="4"
              color="orange"
              @end="test"
            >
              <template #thumb-label="{ modelValue }">
                <v-icon :icon="season(modelValue)" theme="dark"></v-icon>
              </template>
            </v-range-slider>
          </v-col>
        </v-row>

        <v-row v-for="(item, key) in animateImg" :key="key" class="px-12">
          <v-col v-for="(i, k) in item" :key="k">
            <v-card class="animateCard" :style="{ backgroundImage: `url(${i.img})` }">
              <div class="d-flex justify-space-between">
                <div class="bg-grey-darken-3 ma-1 pa-1 rounded-lg">
                  <v-icon icon="mdi-clock"></v-icon>17:30
                </div>
                <div class="ma-1">
                  <v-icon icon="mdi-heart-outline" size="x-large"></v-icon>
                </div>
              </div>
            </v-card>
            <div class="d-flex justify-space-between bg-grey-darken-3 pa-1">
              <div
                class="d-flex position-relative"
                style="width: 200px; overflow: hidden"
                @mouseover="i.animateTxt = true"
                @mouseleave="i.animateTxt = false"
              >
                <div
                  style="white-space: nowrap"
                  class="d-flex"
                  :class="{ animateTxt: i.animateTxt }"
                >
                  <div>{{ i.title }}</div>

                  <div style="margin-left: 150px">{{ i.title }}</div>
                </div>
              </div>
              <div class="text-right" style="width: 90px">
                <v-icon icon="mdi-eye" class="mr-1"></v-icon>89萬
              </div>
            </div>
          </v-col>
        </v-row>

        <div class="d-flex justify-center">
          <v-btn class="mt-5 text-h5" color="primary" variant="elevated" width="300" height="60"
            >展開更多</v-btn
          >
        </div>

        <h1 class="mt-10 ml-5">近期熱播</h1>

        <v-row v-for="(item, key) in recentCfg" :key="key" class="px-12 mt-1">
          <v-col v-for="(i, k) in item" :key="k">
            <v-card
              class="recentCard text-end"
              :style="{
                backgroundImage: `url(${i.img})`
              }"
            >
              <v-icon icon="mdi-heart-outline" size="x-large"></v-icon>
              <div class="position-absolute mr-1" style="right: 0; bottom: 0">
                <v-icon icon="mdi-eye" class="mr-1"></v-icon>{{ i.see }}萬
              </div>
            </v-card>

            <div class="bg-grey-darken-3 pa-1">
              <div
                style="width: 150px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis"
              >
                {{ i.title }}
              </div>
              <div class="d-flex justify-space-between align-center">
                <div>年份：{{ i.year }}</div>
                <div>
                  <v-chip size="small" label> 共{{ i.episode }}集 </v-chip>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-window-item>
    </v-window>
  </div>
</template>

<script lang="ts" setup>
import { animateCfg, recentCfg } from './config'

const tab = ref(null)
const animateImg = toRef(animateCfg)
const order = ref([{ title: '依更新日排列' }, { title: '依平均人氣排列' }])

const seasons = ref({
  0: '06/04 (二)',
  1: '06/05 (三)',
  2: '06/06 (四)',
  3: '06/07 (五)'
})

const icons = ref(['mdi-snowflake', 'mdi-leaf', 'mdi-fire', 'mdi-water'])

const season = (val) => {
  return icons.value[val]
}

let timeBar = [0, 1]
const test = (val: Array<number>) => {
  if (val[1] > timeBar[1]) {
    val[0] = val[1] - 1
  } else {
    val[1] = val[0] + 1
  }
  timeBar = val
}
</script>

<style lang="scss" scoped>
.activeTab {
  background-color: grey;
  border-radius: 8px !important;
}

.animateCard {
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.animateTxt {
  animation: 4s marquee linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(60%);
  }

  100% {
    transform: translateX(-100%);
  }
}

.recentCard {
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
