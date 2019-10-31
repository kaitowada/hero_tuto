<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" temporary fixed>
      <v-list>
        <v-list-item-content>
          <v-list-item-title class="title" style="padding-left: 10px;"
            >Hero Tuto</v-list-item-title
          >
        </v-list-item-content>
        <v-divider></v-divider>
        <template v-if="true">
          <v-list-item class="item-style" to="/login">
            <v-list-item-action>
              <v-icon>
                mdi-account
              </v-icon>
            </v-list-item-action>
            <v-list-item-title>ログイン</v-list-item-title>
          </v-list-item>
        </template>
        <template v-else>
          <v-list-item class="item-style" to="/logout">
            <v-list-item-action>
              <v-icon>
                mdi-logout-variant
              </v-icon>
            </v-list-item-action>
            <v-list-item-title>ログアウト</v-list-item-title>
          </v-list-item>
        </template>
        <v-divider></v-divider>
        <v-list-item class="item-style" to="/">
          <v-list-item-action>
            <v-icon>
              mdi-home
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>ホーム</v-list-item-title>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item class="item-style" to="/hero/list">
          <v-list-item-action>
            <v-icon>
              mdi-format-list-bulleted
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>ヒーローリスト</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-btn icon @click.stop="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-toolbar-title @click="goRoot">Hero Tutorial</v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    clipped: false,
    drawer: false,
    fixed: false,
    login: false
  }),
  computed: {
    ...mapGetters('auth', ['getLoginState'])
  },
  watch: {},
  async created() {},
  methods: {
    goRoot() {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style scoped>
.drawer-title {
  margin: 15px 15px 15px 15px;
}
.item-style {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
