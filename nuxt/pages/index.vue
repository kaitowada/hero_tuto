<template>
  <v-layout wrap column align-center>
    <v-flex xs12 sm8 md6 class="button-layout">
      <v-btn @click="goHeroList">hero-list</v-btn>
    </v-flex>
    <v-flex xs12 sm8 md6 class="button-layout">
      <v-btn @click="goNewHero">new-hero</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: {},
  data: () => ({}),
  computed: {},
  watch: {},
  async created() {},
  methods: {
    goHeroList() {
      console.log('HeroList')
      this.$router.push({ path: '/hero/list' })
    },
    goNewHero() {
      console.log('NewHero')
      this.$router.push({ path: '/hero/new' })
    }
  }
}
</script>

<style scoped>
.button-layout {
  margin: 5px 5px 5px 5px;
}
</style>
