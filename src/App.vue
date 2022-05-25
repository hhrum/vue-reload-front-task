<template>
  <Section title="Информация о балансах">
    <CardsContainer>
      <BalanceCard
          v-for="balance in balances" :key="balance.title"
          :title="balance.title"
          :sum="balance.sum"
          :sum-plan="balance.sum_plan"
      />

      <template v-slot:secondary>
        <BalanceCard
            v-for="balance in moreBalances" :key="balance.title"
            :title="balance.title"
            :sum="balance.sum"
            :sum-plan="balance.sum_plan"
        />
      </template>
    </CardsContainer>
  </Section>
  <Section title="Проекты поддержки">
    <CardsContainer>
      <SupportCard
          v-for="support in supports" :key="support.title"
          :title="support.title"
          :progress="support.progress"
          :is-error="support.is_error"
          :inwork-count="support.inwork_count"
          :burning-count="support.burning_count"
          :time-fakt="support.time_fakt"
      />

      <template v-slot:secondary>
        <SupportCard
            v-for="support in moreSupports" :key="support.title"
            :title="support.title"
            :progress="support.progress"
            :is-error="support.is_error"
            :inwork-count="support.inwork_count"
            :burning-count="support.burning_count"
            :time-fakt="support.time_fakt"
        />
      </template>
    </CardsContainer>
  </Section>
</template>

<script>
import BalanceCard from "@/components/BalanceCard";
import CardsContainer from "@/components/CardsContainer";
import Section from "@/components/Section";
import SupportCard from "@/components/SupportCard";

import data from "@/data";
import shuffle from "@/lib/shuffle"

export default {
  name: 'App',
  components: {
    SupportCard,
    BalanceCard,
    CardsContainer,
    Section,
  },
  data() {
    return {
      balances: [],
      moreBalances: [],
      supports: [],
      moreSupports: [],
    };
  },
  mounted() {
    this.balances = data.balances;
    this.moreBalances = shuffle(data.balances);
    this.supports = data.supports;
    this.moreSupports = shuffle(data.supports);
  }
}
</script>

<style lang="scss">

#app {
  font-family: "Cera Pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
