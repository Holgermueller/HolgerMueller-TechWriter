<template>
  <div id="Portfolio">
    <h1 class="section-header">Projects</h1>

    <v-container class="portfolio-container" fluid>
      <v-layout row wrap>
        <v-flex xs12 sm12 md4 lg4 xl4 v-for="(Project,index) in Projects" :key="index">
          <v-hover v-slot:default="{hover}">
            <v-card class="project-card" tile :elevation="hover ? 12 : 2">
              <v-img>Pic goes here</v-img>
              <v-card-title>
                <div>{{Project.title}}</div>
              </v-card-title>
              <v-card-text>
                <p>{{Project.description}}</p>
                <p>Built with:</p>
              </v-card-text>
              <v-card-actions>
                <a href class="demo">
                  <span class="mdi mdi-laptop-mac"></span>See the demo
                </a>
                <v-spacer></v-spacer>
                <a href class="repo">
                  <span class="mdi mdi-github-circle"></span>See the repo
                </a>
              </v-card-actions>
            </v-card>
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
        { title: "Project1", description: "Dummy text" },
        { title: "Project2", description: "Dummy text" },
        { title: "Project3", description: "Dummy text" },
        { title: "Project4", description: "Dummy text" }
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
a {
  text-decoration: none;
}
a:hover {
  cursor: pointer;
  color: blue;
}
.demo,
.repo {
  color: black;
}
</style>