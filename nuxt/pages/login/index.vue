<template>
  <v-content>
    <v-container>
      <v-layout row wrap align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card elevation12>
            <v-toolbar>
              <v-toolbar-title>
                ログイン
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="email"
                  label="メール"
                  type="text"
                ></v-text-field>
                <v-text-field
                  v-model="password"
                  label="パスワード"
                  type="password"
                >
                </v-text-field>
                <div>
                  <v-btn type="button" color="accent" @click="login"
                    >ログイン</v-btn
                  >
                </div>
              </v-form>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  components: {},
  data: () => ({
    email: '',
    password: ''
  }),
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
    },
    login() {
      console.log('login')
    }
  }
}
</script>

<style scoped></style>
