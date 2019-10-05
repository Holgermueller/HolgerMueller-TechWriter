<template>
  <div id="Gear">
    <div class="headers">
      <h1 class="section-header">Gear</h1>
      <h3 class="section-subheader">The tools I use:</h3>
    </div>

    <div class="gear-display" v-for="(Gear, index) in Gears" :key="index">
      {{Gear.name}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Gears: [{ name: "VS Code" }, { name: "Postman" }, { name: "" }]
    };
  }
};
</script>

<style scoped>
.headers {
  text-align: center;
}
.gear-display {
  margin-left: auto;
  margin-right: auto;
  font-size: 30px;
}
</style>