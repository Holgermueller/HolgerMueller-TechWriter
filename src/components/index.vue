<template>
  <div id="home">
    <Banner />
    <About />
    <Portfolio />
    <Connect />
  </div>
</template>

<script>
import Banner from "./Layout/Banner"
import About from "./Layout/About";
import Portfolio from "./Layout/Portfolio";
import Connect from "./Layout/Connect";

export default {
  name: "Home",
  components: {
    Banner,
    About,
    Portfolio,
    Connect
  }
};
</script>

<style scoped>
</style>
