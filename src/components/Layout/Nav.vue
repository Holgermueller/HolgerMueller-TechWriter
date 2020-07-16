<template>
  <div id="nav">
    <v-card class="nav-bar" color="#8fc1e3" tile>
      <v-container my-0 mx-auto py-0 px-auto fluid>
        <v-layout no-gutters class="nav-row">
          <v-flex v-for="(section, index) in sections" :key="index">
            <v-btn
              class="section-link"
              :id="index"
              :href="section.link"
              text
              block
            >
              <v-icon :class="section.icon"></v-icon>
              <span class="text"> {{ section.title }}</span>
            </v-btn>
          </v-flex>
        </v-layout>
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
          link: "#About",
        },
        { title: "Portfolio", icon: "mdi mdi-iframe", link: "#Portfolio" },
        // { title: "Gear", icon: "mdi mdi-toolbox", link: "#Gear" },
        { title: "Connect", icon: "mdi mdi-laptop-mac", link: "#Connect" },
      ],
    };
  },
  methods: {
    offsetScroll(e) {
      console.log(e);
    },
  },
};
</script>

<style scoped>
#nav {
  z-index: 2;
  position: fixed;
  width: 100%;
}

.section-link {
  color: #31708e;
}

a:hover {
  color: #687864;
  cursor: pointer;
}

.text {
  font-size: 1rem;
}

@media (min-width: 360px) and (max-width: 450px) {
  .text {
    font-size: 0;
  }
}
</style>
