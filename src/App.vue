<template>
  <v-app>
    <Nav />
    <Index />
    <Footer />
  </v-app>
</template>

<script>
import Index from "./components/index";
import Nav from "./components/Layout/Nav";
import Footer from "./components/Layout/Footer";

export default {
  name: "App",
  components: {
    Nav,
    Index,
    Footer
  },
  data: () => ({
    //
  })
};
</script>
