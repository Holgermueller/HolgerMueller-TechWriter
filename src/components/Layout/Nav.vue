<template>
  <div id="nav">
    <v-card class="nav-bar" tile>
      <v-container>
        <v-row no-gutters class="nav-row">
          <v-col v-for="(section, index) in sections" :key="index" class="pa-2" cols="3">
            <div class="link" :id="index">
              <a class="section-link" v-bind:href="section.link">
                <span v-bind:class="section.icon"></span>
                {{section.title}}
              </a>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sections: [
        {
          title: "About",
          icon: "mdi mdi-book-open-page-variant",
          link: "#About"
        },
        { title: "Portfolio", icon: "mdi mdi-iframe", link: "#Portfolio" },
        { title: "Gear", icon: "mdi mdi-toolbox", link: "#Gear" },
        { title: "Connect", icon: "mdi mdi-laptop-mac", link: "#Connect" }
      ]
    };
  },
  props: {}
};
</script>

<style scoped>
#nav {
  z-index: 2;
  position: fixed;
  width: 100%;
}
.nav-bar {
  background-color: #8fc1e3;
}
.nav-row {
  justify-content: center;
}
.link {
  text-align: center;
  font-size: 1.5rem;
}
a {
  text-decoration: none;
}
.section-link {
  color: #31708e;
}
a:hover {
  color: #687864;
  cursor: pointer;
}
</style>