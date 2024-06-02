<template>
  <div>
    <v-tabs v-model="tab" hide-slider selected-class="activeTab" class="mt-10">
      <v-tab value="one">本季新翻</v-tab>
      <v-tab value="two">週期表</v-tab>
    </v-tabs>
    <v-row>
      <v-col class="pa-12">
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
