<template>
  <div id="Connect">
    <h1 class="section-header">Connect</h1>

    <v-card class="connections-display">
      <v-container>
        <v-row>
          <v-col v-for="(connection, index) in connections" :key="index">
            <div>
              <a :href="connection.link" target="_blank">
                <h2 class="link">
                  <span :class="connection.connection_class"></span>
                  {{ connection.name }}
                </h2>
              </a>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <div class="form-container">
      <h3 class="form-header">
        Or just email me. I'm more likely to respond this way.
      </h3>
      <form class="form" action="#">
        <v-text-field
          v-model="Name"
          placeholder="Name (required)"
          solo
        ></v-text-field>
        <v-text-field
          v-model="Email"
          placeholder="Email (required)"
          solo
        ></v-text-field>
        <v-text-field
          v-model="Subject"
          placeholder="Subject"
          solo
        ></v-text-field>
        <v-textarea v-model="Message" placeholder="Message" solo></v-textarea>

        <v-btn :disabled="!isComplete" class="button" @click="sendMessage">
          <h1>
            <span class="mdi mdi-email"></span>
          </h1>
        </v-btn>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Name: null,
      Email: null,
      Subject: null,
      Message: null,
      connections: [
        {
          name: "Github",
          connection_class: "mdi mdi-github-circle",
          link: "https://github.com/Holgermueller",
        },
        {
          name: "LinkedIn",
          connection_class: "mdi mdi-linkedin",
          link: "https://www.linkedin.com/in/holger-mueller-75855114a/",
        },
        {
          name: "Twitter",
          connection_class: "mdi mdi-twitter",
          link: "https://twitter.com/thatHMMueller",
        },
      ],
    };
  },
  computed: {
    isComplete() {
      return this.Name && this.Email && this.Subject && this.Message;
    },
  },
  methods: {
    sendMessage() {
      const Name = this.Name;
      const Email = this.Email;
      const Subject = this.Subject;
      const Message = this.Message;
      window.location.href =
        "mailto:9jholger@gmail.com?subject=" +
        Subject +
        "&name=" +
        Name +
        "&email=" +
        Email +
        "&body=" +
        Message;
    },
  },
};
</script>

<style scoped>
/* #Connect {
background-color: #8fc1e3;
} */
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
  color: #31708e;
}
a:hover {
  color: #687864;
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
.button {
  margin-bottom: 10px;
}
</style>
