<template>
  <div class="cards-container" ref="mainContainer">
    <slot></slot>
  </div>
  <div
      :class="{
        'cards-container': true,
        'cards-container-secondary': true,
        'cards-container-secondary--hidden': this.secondaryIsHidden
        }"
      :style="{ 'max-height': this.containerHeight && this.containerHeight + 'px' }"
  >

    <slot name="secondary"></slot>
  </div>
  <div
      :class="{
        'button-container': true,
        'button-container--hidden': !this.secondaryIsHidden
      }"
  >

    <Button :on-click="onClickButtonOpen">
      Показать все
    </Button>
  </div>
</template>

<script>
import Button from "@/components/Button";

export default  {
  name: "CardsContainer",
  components: {Button},
  data() {
    return {
      containerHeight: null,
      secondaryIsHidden: true
    }
  },
  created() {
    window.addEventListener("resize", this.saveHeight)
  },
  unmounted() {
    window.removeEventListener('resize', this.saveHeight)
  },
  mounted() {
    this.saveHeight()
  },
  updated() {
    this.saveHeight()
  },
  methods: {
    onClickButtonOpen: function () {
      this.secondaryIsHidden = !this.secondaryIsHidden
    },
    saveHeight: function () {
      if (this.$refs.mainContainer)
        this.containerHeight = this.$refs.mainContainer.clientHeight
    }
  }
}
</script>

<style lang="scss" scoped>

.cards-container {
  margin: 0 -6px;

  display: flex;

  @include scaleMD {
    flex-wrap: wrap;
    margin: 0 -9px -18px;
  }
}

.cards-container-secondary {
  margin-top: 12px;
  opacity: 1;

  transition: opacity $transition-time * 2, max-height $transition-time;

  &--hidden {
    max-height: 0 !important;
    opacity: 0;
    pointer-events: none;
  }

  @include scaleMD {
    margin-top: 18px;
  }

  @include scaleXS {
    margin-top: 24px;
  }
}

.button-container {
  max-height: 100px;
  margin-top: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 1;

  transition: $transition-time;

  &--hidden {
    margin-top: 0;
    max-height: 0;
    opacity: 0;
    pointer-events: none;
  }
}

</style>