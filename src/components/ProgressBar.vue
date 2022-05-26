<template>
  <div class="progress-bar">
    <div
         v-bind:class="classes"
         v-bind:style="styles"
      />
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: ["progress", "isError"],
  computed: {
    styles: function () {
      return {
        width: this.progress + '%'
      };
    },
    classes: function () {
      return {
        'progress-bar__progress': true,
        'error': this.isError
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.progress-bar {
  background-color: #EFEFEF;
  width: 100%;
  height: 12px;
  border-radius: 6px;
  overflow: hidden;

  &__progress {
    background-color: $accent-color;
    height: 100%;
    border-radius: 6px;

    &.error {
      background-color: $error-color;
    }

    @include scaleMD {
      border-radius: 8px;
    }
  }

  @include scaleMD {
    height: 16px;
    border-radius: 8px;
  }
}

</style>