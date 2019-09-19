<template>
  <div id="Portfolio">
    <h1 class="section-header">Projects</h1>

    <v-container class="portfolio-container" fluid>
      <v-layout row wrap>
        <v-flex xs12 sm12 md4 lg4 xl4 v-for="(Project,index) in Projects" :key="index">
          <v-hover v-slot:default="{hover}">
            <v-card class="project-card" tile :elevation="hover ? 12 : 2">{{Project.title}}</v-card>
          </v-hover>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Projects: [
        { title: "Project1" },
        { title: "Project2" },
        { title: "Project3" },
        { title: "Project4" }
      ]
    };
  }
};
</script>

<style scoped>
#Portfolio {
  background-color: aqua;
}
.section-header {
  text-align: center;
}
.portfolio-container {
  width: 75%;
}
.project-card {
  margin: 8px;
}
</style>