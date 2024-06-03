<template>
  <div>
    <v-tabs v-model="tab" hide-slider selected-class="activeTab" class="mt-10">
      <v-tab value="one">本季新翻</v-tab>
      <v-tab value="two">週期表</v-tab>
    </v-tabs>

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

                  <div class="pl-16">{{ i.title }}</div>
                </div>
              </div>
              <div><v-icon icon="mdi-eye" class="mr-1"></v-icon>89萬</div>
            </div>
          </v-col>
        </v-row>
      </v-window-item>
    </v-window>
  </div>
</template>

<script lang="ts" setup>
const tab = ref(null)
const animateImg = ref([
  [
    {
      img: 'https://p2.bahamut.com.tw/B/2KU/53/df229f51a820b7a21c2a2f63591q6md5.JPG',
      title: '隊長小翼 Season2 青少年篇'
    },
    {
      img: 'https://p2.bahamut.com.tw/B/2KU/61/b20651176cc7b3451be922675d1q6s55.JPG',
      title: '隊長小翼 Season2 青少年篇'
    },
    {
      img: 'https://p2.bahamut.com.tw/B/2KU/89/4bbbf6144ca2ec7f41d5a218ae1q79l5.JPG',
      title: '隊長小翼 Season2 青少年篇'
    },
    {
      img: 'https://p2.bahamut.com.tw/B/2KU/94/2bac2fe57904effeb6792cd9841q7ci5.JPG',
      title: '隊長小翼 Season2 青少年篇'
    },
    {
      img: 'https://p2.bahamut.com.tw/B/2KU/95/df4292e2870356ce102261f7591q7cj5.JPG',
      title: '隊長小翼 Season2 青少年篇'
    },
    {
      img: 'https://p2.bahamut.com.tw/B/2KU/03/da9f53a5c2d30d4d53c98ee07d1q7775.JPG',
      title: '隊長小翼 Season2 青少年篇'
    }
  ],
  [
    {
      img: 'https://p2.bahamut.com.tw/B/2KU/54/26a6decd1c0a7c2a33900784801q6me5.JPG',
      title: '隊長小翼 Season2 青少年篇'
    },
    {
      img: 'https://p2.bahamut.com.tw/B/2KU/73/d33c1038bad72d42a9b5da56481q7bx5.JPG',
      title: '隊長小翼 Season2 青少年篇'
    },
    {
      img: 'https://p2.bahamut.com.tw/B/2KU/03/da9f53a5c2d30d4d53c98ee07d1q7775.JPG',
      title: '隊長小翼 Season2 青少年篇'
    },
    {
      img: 'https://p2.bahamut.com.tw/B/2KU/72/ac7fa56096c5129fa35f54e9bc1q7bw5.JPG',
      title: '隊長小翼 Season2 青少年篇'
    },
    {
      img: 'https://p2.bahamut.com.tw/B/2KU/71/ea1f6c749c39278e78195623331q7bv5.JPG',
      title: '隊長小翼 Season2 青少年篇'
    },
    {
      img: 'https://p2.bahamut.com.tw/B/2KU/70/8b85c3f311b5442d7a219833d21q7bu5.JPG',
      title: '隊長小翼 Season2 青少年篇'
    }
  ],
  [
    {
      img: 'https://p2.bahamut.com.tw/B/2KU/32/f497571a0ae490a860daa22cef1q6zo5.JPG',
      title: '隊長小翼 Season2 青少年篇'
    },
    {
      img: 'https://p2.bahamut.com.tw/B/2KU/69/a233c711c67a102a21a17b4ffc1q7bt5.JPG',
      title: '隊長小翼 Season2 青少年篇'
    },
    {
      img: 'https://p2.bahamut.com.tw/B/2KU/79/33bad5b28f53ed0eaa19f02a931q6vf5.JPG',
      title: '隊長小翼 Season2 青少年篇'
    },
    {
      img: 'https://p2.bahamut.com.tw/B/2KU/91/642cc2ec84dc9339e0c2e19d131q71b5.JPG',
      title: '隊長小翼 Season2 青少年篇'
    },
    {
      img: 'https://p2.bahamut.com.tw/B/2KU/29/a65fdac15052166ecb537078b91q6u15.JPG',
      title: '隊長小翼 Season2 青少年篇'
    },
    {
      img: 'https://p2.bahamut.com.tw/B/2KU/24/8d404b2cb13b22f67b64e4c05a1q6r45.JPG',
      title: '隊長小翼 Season2 青少年篇'
    }
  ]
])

const seasons = ref({
  0: 'Winter',
  1: 'Spring',
  2: 'Summer',
  3: 'Fall'
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
  animation: marquee 3s linear infinite normal forwards;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
