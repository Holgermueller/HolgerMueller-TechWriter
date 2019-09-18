<template>
  <div id="Connect">
    <h1 class="section-header">Connect</h1>

    <v-card class="connections-display">
      <v-container>
        <v-row>
          <v-col v-for="(connection, index) in connections" :key="index">
            <div>
              <a v-bind:href="connection.link">
                <h2 class="link">
                  <span v-bind:class="connection.connection_class"></span>
                  {{connection.name}}
                </h2>
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
      connections: [
        { name: "Github", connection_class: "mdi mdi-github-circle", link: "#" },
        { name: "LinkedIn", connection_class: "mdi mdi-linkedin", link: "#" }
      ]
    };
  }
};
</script>

<style scoped>
.section-header {
  text-align: center;
}
.link {
  text-align: center;
}
.connections-display {
  width: 75%;
  margin-left: auto;
  margin-right: auto;
}
a {
  text-decoration: none;
  color: black;
}
a:hover {
  color: red;
}
</style>