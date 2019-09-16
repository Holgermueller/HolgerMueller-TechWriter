<template>
  <v-app>
    <Nav />
    <Index />
  </v-app>
</template>

<script>
import Index from './components/index';
import Nav from "./components/Layout/Nav"

export default {
  name: 'App',
  components: {
    Nav,
    Index
  },
  data: () => ({
    //
  }),
};
</script>
