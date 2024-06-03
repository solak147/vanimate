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

        <v-row class="px-12">
          <v-col>
            <v-card
              style="
                height: 200px;
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                background-image: url('https://p2.bahamut.com.tw/B/2KU/53/df229f51a820b7a21c2a2f63591q6md5.JPG');
              "
            >
              <div class="d-flex justify-space-between">
                <div class="bg-grey-darken-3 ma-1 pa-1 rounded-lg">
                  <v-icon icon="mdi-clock"></v-icon>17:30
                </div>
                <div class="ma-1">
                  <v-icon icon="mdi-heart-outline" size="x-large"></v-icon>
                </div>
              </div>
            </v-card>
          </v-col>
          <v-col>
            <v-card> 1 </v-card>
          </v-col>
          <v-col>
            <v-card> 1 </v-card>
          </v-col>
          <v-col>
            <v-card> 1 </v-card>
          </v-col>
          <v-col>
            <v-card> 1 </v-card>
          </v-col>
        </v-row>
      </v-window-item>
    </v-window>
  </div>
</template>

<script lang="ts" setup>
const tab = ref(null)

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
</style>
