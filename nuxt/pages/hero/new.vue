<template>
  <v-content>
    <v-container grid-list-md fluid align-center>
      <v-card>
        <v-card-title>
          New Hero Name
        </v-card-title>
        <v-layout row wrap>
          <v-flex sm10 xs12>
            <v-layout row wrap>
              <v-flex xs6 class="card-layout">
                <v-text-field v-model="hero.name" label="HeroName">
                </v-text-field>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
        <v-layout row wrap mt3>
          <v-flex>
            <v-btn class="card-layout" @click="addNewHero">
              追加
            </v-btn>
          </v-flex>
        </v-layout>
      </v-card>
    </v-container>
  </v-content>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  components: {},
  data: () => ({
    hero: { id: '', name: '' }
  }),
  computed: {},
  watch: {},
  async created() {},
  methods: {
    ...mapActions('hero', ['newHero']),
    async addNewHero() {
      const data = {
        name: this.hero.name
      }
      console.log('hero.name', this.hero.name)
      await this.newHero({ data })
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style scoped>
.card-layout {
  margin-left: 10px;
}
</style>
