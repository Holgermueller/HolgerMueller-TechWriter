<template>
  <div id="Portfolio">
    <h1 class="section-header">Portfolio</h1>

    <v-container class="portfolio-container" fluid>
      <v-layout row wrap>
        <v-flex xs12 sm12 md6 lg4 xl4 v-for="(Project,index) in Projects" :key="index">
          <v-hover v-slot:default="{hover}">
            <v-card class="project-card" tile :elevation="hover ? 12 : 2">
              <v-img class="card-image" :src="Project.image"></v-img>
              <v-card-title>
                <div>{{Project.title}}</div>
              </v-card-title>
              <v-card-text>
                <p>{{Project.description}}</p>
                <p>Built with:  {{Project.tech}}</p>
              </v-card-text>
              <v-card-actions>
                <a href class="demo">
                  <span class="mdi mdi-laptop-mac"></span>See the demo
                </a>
                <v-spacer></v-spacer>
                <a :href="Project.repolink" class="repo">
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
        {
          title: "Bucket List",
          description:
            "Single Page CRUD Application allows users to create the ulimate to-do list, which they can update as they make progress on achieving their goals.",
          image: require("../../images/bucketlistshot.png"),
          repolink: "https://github.com/Holgermueller/bucketlist",
          tech: "MongoDB, React, Express, Node"
        },
        {
          title: "React News App",
          description:
            "Single Page Application built with MongoDB, Express, React, and Node. Leverages NY Times API so users can scan headlines and save links to read articles later.",
          image: require("../../images/nytreact.png"),
          repolink: "https://github.com/Holgermueller/nytreact2",
          tech: "MongoDB, React, Express, Node"
        },
        {
          title: "Time and Temp Weather App",
          description: "Dummy text",
          image: require("../../images/timetempshot.png"),
          repolink: "https://github.com/Holgermueller/TimeandTemp"
        },
        {
          title: "Inspirational-Thought Generator",
          description: "Dummy text",
          image: require("../../images/inspthghtgnrtr.png"),
          repolink:
            "https://github.com/Holgermueller/Inspirational-thought-generator"
        },
        {
          title: "Friend Finder",
          description: "Dummy text",
          image: require("../../images/friendfinder.png"),
          repolink: "https://github.com/Holgermueller/Friend_Finder"
        }
      ]
    };
  }
};
</script>

<style scoped>
#Portfolio {
  background-color: aqua;
  width: 100%;
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
.card-image {
  height: 250px;
  width: 100%;
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