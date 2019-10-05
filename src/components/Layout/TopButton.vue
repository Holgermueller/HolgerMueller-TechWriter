<template>
  <div id="topButton">
    <Button id="button" @click="scrollToTop" @scroll="displayButton">Top</Button>
  </div>
</template>

<script>
export default {

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    displayButton() {
      let button = document.getElementById("#button");
      if (window.scrollY > 20) {
        console.log("scrolling")
        button.style.display = "block";
      } else {
        console.log("start")
        button.style.display = "none";
      }
    }
  },
    directives: {
      scroll: {
        
      }
    }
};
</script>

<style scoped>
#button {
  display: none;
  z-index: 99;
  border-radius: 4px;
  border: none;
  outline: none;
  right: 4%;
  bottom: 10%;
  font-size: 20px;
  cursor: pointer;
  padding: 15px;
  background-color: red;
  color: white;
  width: fit-content;
  position: fixed;
}
</style>>
    