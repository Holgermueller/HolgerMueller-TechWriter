<template>
  <div id="banner">
    <v-card tile class="banner-content">
      <v-row align="center" justify="center">
        <v-img
          class="pic"
          src="../../images/profile.png"
          alt="Pic_of_Me"
          max-height="300"
          max-width="300"
        ></v-img>
      </v-row>

      <div class="name display-3">Holger Mueller</div>
      <div class="description subheader">
        Front-End Developer / Problem-Solver
      </div>
      <v-card-actions class="links">
        <a href="https://github.com/Holgermueller" target="_blank">
          <h1 class="mdi mdi-github link"></h1>
        </a>
        <v-spacer></v-spacer>
        <a
          href="https://www.linkedin.com/in/holger-mueller-75855114a/"
          target="_blank"
        >
          <h1 class="mdi mdi-linkedin link"></h1>
        </a>
        <v-spacer></v-spacer>
        <a
          href="https://docs.google.com/document/d/1ECnxm-wbN3Wsn2j235rghJSNboBEsaZba_TSgauNVQ0/edit"
        >
          <h1 class="mdi mdi-file-download-outline resume link"></h1>
        </a>
      </v-card-actions>
    </v-card>
  </div>
</template>

<style scoped>
#banner {
  z-index: 1;
  margin-top: 3rem;
  width: 100%;
}
.banner-content {
  background-color: #f7f9fb !important;
  text-align: center;
  width: 100%;
}
.pic {
  margin-top: 2rem;
  object-fit: cover;
}
.name {
  padding: 2%;
}
.subheader {
  padding: 1%;
}
.links {
  width: 25%;
  margin-left: auto;
  margin-right: auto;
}

.link:hover,
.resume:hover {
  cursor: pointer;
  color: #687864;
}
.name,
.description,
.link {
  color: #31708e;
}

@media (min-width: 360px) and (max-width: 450px) {
  .links {
    width: 50%;
  }
}
</style>
