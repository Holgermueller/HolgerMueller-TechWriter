<template>
  <div id="Connect">
    <h1 class="section-header">Connect</h1>

    <v-card>
      <v-container>
        <v-row>
          <v-col v-for="(connection, index) in connections" :key="index">
            <div>
              <h2>{{connection.name}}</h2>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      connections: [{ name: "Github" }, { name: "LinkedIn" }]
    };
  }
};
</script>

<style scoped>
.section-header {
  text-align: center;
}
</style>