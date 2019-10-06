<template>
  <div id="topButton">
    <Button id="button" class="button hidden" @click="scrollToTop">
      <span class="mdi mdi-arrow-up-bold"></span>
      Top
    </Button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //showButton: false,
      //lastScrollPosition: 0
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    onScrollShowButton() {
      const button = document.getElementById("button")
      button.classList.remove("hidden");
    },
    atTopHideButton() {
      let y = document.scrollTop;
      console.log(y)
    }
  }
};
</script>

<style scoped>
.button {
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
.hidden {
  display: none;
}
</style>>
    