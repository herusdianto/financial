<template>
  <v-card class="overflow-hidden margin-20">
    <v-toolbar dense
               elevate-on-scroll
               scroll-target="#scrolling-techniques-7"
    >
      <v-toolbar-title>Income</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-refresh</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-delete-outline</v-icon>
      </v-btn>
    </v-toolbar>
    <v-sheet class="overflow-y-auto"
             max-height="600"
    >
      <v-container class="content-container">
        <p>This is income page</p>
      </v-container>
    </v-sheet>
  </v-card>
</template>
