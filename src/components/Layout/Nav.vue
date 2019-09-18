<template>
  <div id="nav">
    <v-card>
      <v-container>
        <v-row no-gutters class="nav-row">
          <v-col v-for="(section, index) in sections" :key="index" class="pa-2" cols="3">
            <div class="link" :id="index"  link>{{section.title}}</div>
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
        { title: "About" },
        { title: "Portfolio" },
        { title: "Connect" }
      ]
    };
  },
  props: {}
};
</script>

<style scoped>
#nav {
  z-index: 2;
}
.nav-row {
  justify-content: center;
}
.link {
  text-align: center;
}
.link:hover {
  color: red;
  cursor: pointer;
}
</style>