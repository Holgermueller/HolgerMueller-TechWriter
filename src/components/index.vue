<template>
  <div id="home">
    <Banner />
    <About class="page-section" />
    <Portfolio class="page-section" />
    <Gear class="page-section" />
    <Connect class="page-section" />
  </div>
</template>

<script>
import Banner from "./Layout/Banner";
import About from "./Layout/About";
import Portfolio from "./Layout/Portfolio";
import Connect from "./Layout/Connect";
import Gear from "./Layout/Gear";

export default {
  name: "Home",
  components: {
    Banner,
    About,
    Portfolio,
    Connect,
    Gear
  }
};
</script>

<style scoped>
.page-section {
  margin-top: 5rem;
  margin-bottom: 5rem;
}
</style>
