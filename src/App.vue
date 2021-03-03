<style>
  .margin-20 {
    margin: 20px;
  }
  .content-container {
    height: 500px;
  }
</style>

<template>
  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        app
        color="primary"
        dark
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            {{ $vuetify.lang.t('$vuetify.menu.title') }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ $vuetify.lang.t('$vuetify.menu.list') }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
          dense
          nav
      >
        <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            @click="goTo(item.routeName)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ $vuetify.lang.t(`$vuetify.${item.title}`) }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app
               color="primary"
               dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ $vuetify.lang.t('$vuetify.title') }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="redirectToGithub()">
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import router from "./router";
import Database from "./services/database";

export default {
  name: 'App',

  mounted() {
    let db = new Database().getDb()
    console.log({db})
  },

  components: {
  },

  data: () => ({
    drawer: null,
    items: [
      { title: 'transactions.index', icon: 'mdi-cash-multiple', routeName: 'transactions.index' },
    ],
  }),

  methods: {
    goTo(routeName) {
      let currentRouteName = router.currentRoute.name

      if (routeName !== currentRouteName)
        router.push({name: routeName})
    },
    redirectToGithub() {
        let githubUrl = 'https://github.com/herusdianto/financial'
        window.open(githubUrl, '_blank')
    }
  },
};
</script>
