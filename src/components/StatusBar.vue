<template>
  <div v-bind:class="classes"/>
</template>

<script>
export default {
  name: "StatusBar",
  props: ["isError"],
  computed: {
    classes: function () {
      return {
        'status-bar': true,
        'error': this.isError
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.status-bar {
  width: 3px;
  height: 100%;
  border-radius: 4px;
  background-color: $accent-color;

  &.error {
    background-color: $error-color;
  }
}

</style>