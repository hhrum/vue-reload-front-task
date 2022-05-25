<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Card"
}
</script>

<style lang="scss" scoped>

.card {
  width: 100%;
  min-width: $breakpoint-md / 6;
  max-width: 1300px / 6;
  margin: 0 6px;
  padding: 24px 6px 24px 12px;
  border-radius: 14px;

  flex: 1 1 0;

  box-shadow: 0 4px 12px rgba(130, 150, 180, 0.32);

  cursor: pointer;
  transition: box-shadow $transition-time, transform $transition-time;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 24px rgba(130, 150, 180, 0.32);
  }

  @include scaleMD {
    min-width: calc(100% / 3 - 64px);
    max-width: $breakpoint-xl / 3;

    margin: 0 9px 18px;
  }

  @include scaleSM {
    min-width: calc(100% / 2 - 64px);
    max-width: $breakpoint-md / 2;
  }

  @include scaleXS {
    min-width: calc(100% - 64px);
    max-width: 100%;

    margin-bottom: 24px;
  }
}

</style>