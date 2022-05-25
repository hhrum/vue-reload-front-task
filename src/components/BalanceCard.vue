<template>
  <Card>
    <div class="balance-card">
      <div class="balance-card__title">
        {{ title }}
      </div>
      <div class="balance-card__balance" v-if="sumPlan">
        <span v-bind:class="sumClasses">{{ correctSum }} ₽</span>
        <span class="balance-card__balance-plan">/{{ sumPlan }} ₽</span>
      </div>
      <div class="balance-card__balance" v-else>
        <span class="balance-card__balance-sum">{{ correctSum }} ₽</span>
      </div>
    </div>
  </Card>
</template>

<script>
import Card from "@/components/Card";
import priceFormat from "@/lib/priceFormat";

export default {
  name: "BalanceCard",
  components: {Card},
  props: ["title", "sum", "sumPlan"],
  computed: {
    correctSum: function () {
      return this.sum && priceFormat(this.sum)
    },
    sumClasses: function () {
      return {
        'balance-card__balance-sum': true,
        'error': (this.sum / this.sumPlan) * 100 < 45
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.balance-card {

  &__title {
    margin-bottom: 8px;

    color: $font-color--light;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;

    @include scaleMD {
      font-size: 24px;
      line-height: 24px;
    }
  }

  &__balance {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;

    font-style: normal;
    font-weight: 500;

    &-sum {
      color: $accent-color;
      font-size: 26px;
      line-height: 27px;

      @include scaleMD {
        font-size: 38px;
        line-height: 38px;
      }

      &.error {
        color: $error-color;
      }
    }

    &-plan {
      color: $font-color--light;

      @include scaleMD {
        font-size: 24px;
        line-height: 24px;
      }
    }
  }
}

</style>