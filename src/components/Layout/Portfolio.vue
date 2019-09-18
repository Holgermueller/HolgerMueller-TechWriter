<template>
  <div id="Portfolio">
    <h1 class="section-header">Projects</h1>

    <v-container fluid>
      <v-row>
        <v-col>
          <v-hover v-slot:default="{hover}">
            <v-card :elevation="hover ? 12 : 2">project goes here.</v-card>
          </v-hover>
        </v-col>

        <v-col>
          <v-hover v-slot:default="{hover}">
            <v-card :elevation="hover ? 12 : 2">project goes here.</v-card>
          </v-hover>
        </v-col>

        <v-col>
          <v-hover v-slot:default="{hover}">
            <v-card :elevation="hover ? 12 : 2">project goes here.</v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
#Portfolio {
  background-color: aqua;
}
.section-header {
  text-align: center;
}
</style>