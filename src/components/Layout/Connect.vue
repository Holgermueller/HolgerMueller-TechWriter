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

    <div class="form-container">
      <h3 class="form-header">Or just email me. I'm more likely to respond this way.</h3>
      <form class="form" action>
        <v-text-field v-model="Name" placeholder="Name (required)" solo></v-text-field>
        <v-text-field v-model="Email" placeholder="Email (required)" solo></v-text-field>
        <v-text-field v-model="Subject" placeholder="Subject" solo></v-text-field>
        <v-textarea placeholder="Message" solo></v-textarea>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      connections: [
        {
          name: "Github",
          connection_class: "mdi mdi-github-circle",
          link: "#"
        },
        { name: "LinkedIn", connection_class: "mdi mdi-linkedin", link: "#" },
        { name: "Twitter", connection_class: "mdi mdi-twitter", link: "#" }
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
  margin-top: 2rem;
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
.form-container {
  margin-top: 4rem;
}
.form-header {
  text-align: center;
}
.form {
  width: 55%;
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
}
</style>