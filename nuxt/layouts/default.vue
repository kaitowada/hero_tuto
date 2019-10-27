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
              mdi-format_list_bulleted
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
export default {
  data: () => ({
    clipped: false,
    drawer: false,
    fixed: false
  }),
  computed: {},
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
