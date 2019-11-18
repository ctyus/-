<template>
  <div>
    <my-header></my-header>

    <router-view></router-view>

    <my-footer></my-footer>
  </div>
</template>

<script>
import Header from "../components/herder";
import Footer from "../components/footer";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    "my-header": Header,
    "my-footer": Footer
  }
};
</script>

<style scoped>
</style>
