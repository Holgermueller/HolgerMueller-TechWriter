<template>
  <div id="footer">
    <v-card class="footer" tile>
      <div class="subtitle-2">
        Copyright &copy; 2019 - {{ new Date().getFullYear() }} Holger Mueller |
        <a class="link" href="https://github.com/Holgermueller/vue-portfolio"
          >Repo</a
        >
      </div>
      <div class="caption">This site built with Vue / Vuetify</div>
      <div class="caption">Deployed on Netlify</div>
    </v-card>
  </div>
</template>

<style scoped>
#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding-top: 2%;
}
.footer {
  background-color: #31708e !important;
  color: white;
}
.link {
  text-decoration: none;
  color: white;
}
</style>
