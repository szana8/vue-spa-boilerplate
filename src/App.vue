<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Navigation from "@/components/Navigation";

export default {
  name: "app",
  components: {
    Navigation
  },
  computed: mapGetters({})
};
</script>
