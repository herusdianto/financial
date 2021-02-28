<style>
  .margin-20 {
    margin: 20px;
  }
</style>

<template>
  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        app
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

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ $vuetify.lang.t('$vuetify.title') }}</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import router from "./router";

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    drawer: null,
    items: [
      { title: 'income.title', icon: 'mdi-cash-multiple', routeName: 'income' },
      { title: 'outcome.title', icon: 'mdi-cart', routeName: 'outcome' },
    ],
  }),

  methods: {
    goTo(routeName) {
      let currentRouteName = router.currentRoute.name

      if (routeName !== currentRouteName)
        router.push({name: routeName})
    }
  },
};
</script>
