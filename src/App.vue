<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import Feature from "./components/Feature.vue";
import Gallery from "./components/Gallery.vue";
import FAQ from "./components/FAQ.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Navbar,
    Home,
    Feature,
    Gallery,
    FAQ,
    Footer,
  },
};
</script>

<template>
  <header class="navbar"><Navbar></Navbar></header>
  <main>
    <Home id="home"></Home>
    <Feature id="feature"></Feature>
    <Gallery id="gallery"></Gallery>
    <FAQ id="faq"></FAQ>
  </main>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
