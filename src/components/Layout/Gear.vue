<template>
  <div id="Gear">
    <div class="headers">
      <h1 class="section-header">Gear</h1>
      <h3 class="section-subheader">The tools I use:</h3>
    </div>

    <div class="gear-display" v-for="(Gear, index) in Gears" :key="index">
      <h3><span :class="Gear.icon"></span>
        {{Gear.name}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Gears: [
        { name: "VS Code", icon:"mdi mdi-visual-studio" },
        { name: "Postman", icon:"mdi" },
        { name: "Git", icon:"mdi mdi-git" },
        { name: "Google Analytics", icon: "mdi mdi-google-analytics"  }
      ]
    };
  }
};
</script>

<style scoped>
.headers {
  text-align: center;
}
.gear-display {
  margin: 1rem auto;
  font-size: 30px;
  text-align: center;
  display: inline;
}
</style>