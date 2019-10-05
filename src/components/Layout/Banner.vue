<template>
  <div id="banner">
    <v-card tile class="banner-content">
      <v-row align="center" justify="center">
        <v-img class="pic" src="../../images/profile.png" alt="Pic_of_Me" max-height="300"
        max-width="300"></v-img>
      </v-row>

      <div class="name display-3">Holger Mueller</div>
      <div class="subheader">Front-End Developer / Problem-Solver</div>
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
</style>