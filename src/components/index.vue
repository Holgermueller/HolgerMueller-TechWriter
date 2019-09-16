<template>
  <div class="home">
    <About />
    <Portfolio />
    <Contact />
  </div>
</template>

<script>
import About from "./Layout/About";
import Portfolio from "./Layout/Portfolio";
import Contact from "./Layout/Contact";

export default {
  name: "Home",
  components: {
    About,
    Portfolio,
    Contact
  }
};
</script>

<style scoped>
</style>
