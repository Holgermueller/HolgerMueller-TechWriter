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
      <div class="subheader">Front-End Developer / Problem-Solver</div>
      <v-card-actions class="links">
        <a href>
          <h1 class="mdi mdi-github-circle link"></h1>
        </a>
        <v-spacer></v-spacer>
        <a href>
          <h1 class="mdi mdi-linkedin link"></h1>
        </a>
        <v-spacer></v-spacer>
        <a href>
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
}
.banner-content {
  text-align: center;
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
.link {
  color: #000;
}
.link:hover,
.resume:hover {
  cursor: pointer;
  color: red;
}
</style>