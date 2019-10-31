<template>
  <v-layout wrap column align-center>
    <v-flex
      v-for="hero in heroList"
      :key="hero.id"
      class="card-layout"
      xs12
      sm8
      md6
    >
      <v-card width="300px" height="100px" @click="goEdit(hero.id)">
        <v-card-title>No.{{ hero.id }}</v-card-title>
        <v-card-text>name: {{ hero.name }} </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  components: {},
  data: () => ({
    heroes: []
  }),
  computed: {
    ...mapGetters('hero', ['heroList'])
  },
  watch: {},
  async created() {},
  methods: {
    goEdit(id) {
      this.$router.push({ name: 'hero-heroId-edit', params: { heroId: id } })
    }
  }
}
</script>

<style scoped>
.card-layout {
  margin: 5px 5px 5px 5px;
}
</style>
