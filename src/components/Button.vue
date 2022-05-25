<template>
  <div class="button" v-on:click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: ['onClick']
}
</script>

<style lang="scss" scoped>

.button {
  background-color: $accent-color;
  padding: 6px 16px;
  border-radius: 24px;

  color: $white-color;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;

  cursor: pointer;

  transition: $transition-time;

  &:hover {
    background-color: $accent-color--light;
  }

  &:active {
    background-color: $accent-color--dark;
  }

  @include scaleMD {
    padding: 8px 24px;

    font-size: 26px;
  }

  @include scaleXS {
    width: 100%;
  }
}

</style>