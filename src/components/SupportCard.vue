<template>
  <Card>
    <div class="support-card">
      <div class="support-card__status-bar">
        <StatusBar v-bind:is-error="isError"/>
      </div>

      <div class="support-card__title">
        {{ title }}
      </div>

      <div class="support-card__content">
        <div class="support-card__inwork">
          {{ inworkCount }}
        </div>

        <div class="support-card__burning">
          {{ burningCount }}
          <br>
          <svg-icon class="support-card__fire" type="mdi" :path="path" />
        </div>

        <div class="support-card__progress-bar">
          <ProgressBar
              v-bind:is-error="isError"
              v-bind:progress="progress"
          />
        </div>

        <div class="support-card__time">
          {{ timeFakt }}
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
import Card from "@/components/Card"
import ProgressBar from "@/components/ProgressBar";
import StatusBar from "@/components/StatusBar";

import SvgIcon from '@jamescoyle/vue-icon'
import { mdiFire } from '@mdi/js'

export default {
  name: "SupportCard",
  components: {
    StatusBar,
    ProgressBar,
    Card,
    SvgIcon,
  },
  props: ["title", "progress", "isError", "burningCount", "inworkCount", "timeFakt"],
  data() {
    return {
      path: mdiFire
    }
  }
}
</script>

<style lang="scss" scoped>

.support-card {
  display: grid;
  grid-template-columns: fit-content(12px) auto;
  grid-template-rows: fit-content(1fr) 2fr;

  padding-right: 6px;

  &__status-bar {
    grid-area: 1 / 1 / 3 / 2;
    margin-right: 8px;
  }

  &__title {
    grid-area: 1 / 2 / 2 / 3;
    margin-bottom: 8px;

    color: $font-color--light;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;

    @include scaleMD {
      font-size: 24px;
    }
  }

  &__content {
    grid-area: 2 / 2 / 3 / 3;

    display: grid;
    grid-template-columns: fit-content(30%) fit-content(30%) auto;
    grid-template-rows: repeat(2, 1fr);
  }

  &__inwork {
    grid-area: 1 / 1 / 3 / 2;

    margin-right: 8px;

    color: $card-black-color;
    font-style: normal;
    font-weight: 500;
    font-size: 42px;
    line-height: 42px;

    @include scaleMD {
      margin-right: 10px;
      font-size: 62px;
      line-height: 62px;
    }
  }

  &__burning {
    grid-area: 1 / 2 / 3 / 3;

    margin-right: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;

    color: $error-color;
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 26px;

    @include scaleMD {
      margin-right: 12px;
      font-size: 38px;
      line-height: 38px;
    }
  }

  &__fire {
    width: 16px;
    height: 16px;

    @include scaleMD {
      width: 20px;
      height: 20px;
    }
  }

  &__progress-bar {
    grid-area: 1 / 3 / 2 / 4;
    padding-top: 2px;
  }

  &__time {
    grid-area: 2 / 3 / 3 / 4;

    color: $card-gray-color;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;

    @include scaleMD {
      font-size: 26px;
      line-height: 26px;
    }
  }
}


</style>