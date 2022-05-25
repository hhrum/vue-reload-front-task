<template>
  <div class="section">
    <div class="section__title">
      {{ title }}
    </div>
    <div class="section__wrapper">
      <slot>Содержимое секции</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Section",
  props: ['title']
}
</script>

<style lang="scss" scoped>

.section {
  max-width: 1300px;
  margin: 0 auto;

  &__title {
    margin: 64px 0;

    color: $font-color;
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 32px;
  }
}

</style>