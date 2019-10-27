<template>
  <v-layout wrap row align-center>
    <v-flex xs12 sm8 md6>
      <v-btn onclick="goHeroList">hero-list</v-btn>
    </v-flex>
    <v-flex xs12 sm8 md6>
      <v-btn onclick="">new-hero</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: {},
  data: () => ({}),
  computed: {},
  watch: {},
  methods: {
    goHeroList() {
      this.$router.push({ path: '/hero-list' })
    }
  }
}
</script>
