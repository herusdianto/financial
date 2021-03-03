<template>
  <v-card class="overflow-hidden margin-20">
    <v-toolbar dense
               elevate-on-scroll
    >
      <v-toolbar-title>{{ $vuetify.lang.t('$vuetify.transactions.title') }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon
                 v-bind="attrs"
                 v-on="on">
            <v-icon>mdi-refresh</v-icon>
          </v-btn>
        </template>
        <span>
          {{ $vuetify.lang.t('$vuetify.actions.refresh') }}
        </span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon
                 v-bind="attrs"
                 v-on="on">
            <v-icon>mdi-plus-outline</v-icon>
          </v-btn>
        </template>
        <span>
          {{ $vuetify.lang.t('$vuetify.actions.create') }}
        </span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon
                 v-bind="attrs"
                 v-on="on">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </template>
        <span>
          {{ $vuetify.lang.t('$vuetify.actions.search') }}
        </span>
      </v-tooltip>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon
                 v-bind="attrs"
                 v-on="on">
            <v-icon>mdi-delete-outline</v-icon>
          </v-btn>
        </template>
        <span>
          {{ $vuetify.lang.t('$vuetify.actions.delete') }}
        </span>
      </v-tooltip>
    </v-toolbar>

    <v-sheet class="overflow-y-auto"
             max-height="600"
    >
      <v-container class="content-container">
        <p>This is transactions page</p>
      </v-container>
    </v-sheet>
  </v-card>
</template>
