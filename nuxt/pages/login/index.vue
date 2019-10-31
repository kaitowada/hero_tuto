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
import { mapActions } from 'vuex'
export default {
  components: {},
  data: () => ({
    email: '',
    password: '',
    loginState: false
  }),
  computed: {},
  watch: {},
  created() {
    this.loginState = this.getLogin
    console.log(this.loginState)
  },
  methods: {
    ...mapActions('auth', { authLogin: 'login' }),
    goHeroList() {
      console.log('HeroList')
      this.$router.push({ path: '/hero/list' })
    },
    goNewHero() {
      console.log('NewHero')
      this.$router.push({ path: '/hero/new' })
    },
    async login() {
      const data = {
        email: this.email,
        password: this.password
      }
      await this.authLogin({ data, saveLoginState: this.saveLoginState })
    }
  }
}
</script>

<style scoped></style>
