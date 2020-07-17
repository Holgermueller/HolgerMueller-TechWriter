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
                  <v-icon :class="connection.connection_class"> </v-icon>
                  <span class="connection-name">{{ connection.name }}</span>
                </h2>
              </a>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>

    <div class="form-container">
      <h3 class="form-header">
        Or drop me a message. I'm more likely to respond this way.
      </h3>

      <form
        class="form"
        ref="form"
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />

        <input
          type="text"
          v-model="Name"
          class="form-field"
          placeholder="Name (required)"
          value="name"
          name="name"
        />

        <input
          type="email"
          v-model="Email"
          class="form-field"
          placeholder="Email (required)"
          value="email"
          name="email"
        />

        <input
          type="text"
          v-model="Subject"
          class="form-field"
          placeholder="Subject"
          value="subject"
          name="subject"
        />

        <textarea
          class="text-field"
          v-model="Message"
          placeholder="Message"
          value="message"
          name="message"
        />

        <button
          type="submit"
          name="submit"
          class="submit"
          value="Submit"
          ref="submit"
          x-large
          :disabled="!isComplete"
          block
        >
          Send
          <span class="mdi mdi-email-send"></span>
        </button>
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
          connection_class: "mdi mdi-github",
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
  margin-top: 7%;
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
.hidden {
  display: none;
}
.form-field {
  width: 100%;
  height: 50px;
  border: 1px solid darkgray;
  border-radius: 15px;
  margin: 8px auto;
  padding-left: 8px;
  z-index: 1;
}
.text-field {
  margin: 8px auto;
  border-radius: 15px;
  border: 1px solid darkgray;
  width: 100%;
  height: 250px;
  padding-left: 8px;
  padding-top: 8px;
}
.submit {
  width: 100%;
  height: 50px;
  margin: 10px auto;
  background-color: #31708e;
  color: #f7f9fb;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 15px;
}
.submit:disabled {
  background-color: lightgrey;
}

@media (min-width: 360px) and (max-width: 450px) {
  .connection-name {
    font-size: 0;
  }

  .form-header {
    width: 85%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
