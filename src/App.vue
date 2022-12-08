<template>
  <div class="view">
    <nav-bar v-if="currentView !== 'home-view'"></nav-bar>
    <keep-alive>
      <component :is="currentView" :key="currentView" class="page"></component>
    </keep-alive>
    <!-- :key is like id to remember -->
    <footer-bar v-if="currentView !== 'home-view'"></footer-bar>
  </div>
</template>

<script>
import NavBar from "./components/layouts/NavBar.vue";
import HomeView from "./components/views/HomeView.vue";
import AboutView from "./components/views/AboutView.vue";
import ProjectsView from "./components/views/ProjectsView.vue";
import ContactView from "./components/views/ContactView.vue";
import FooterBar from "./components/layouts/FooterBar.vue";
export default {
  components: {
    NavBar,
    HomeView,
    AboutView,
    ProjectsView,
    ContactView,
    FooterBar,
  },
  data() {
    return {
      // isDarkMode: true,
    };
  },
  computed: {
    currentView() {
      return this.$store.getters.currentView;
    },
    // darkMode() {
    //   return { "dark-mode": this.isDarkMode };
    // },
  },
  // created() {
  //   this.toggleThemeMode();
  // },
  // provide() {
  //   return { darkMode: this.darkMode };
  // },
};
</script>

<style scoped>
.view {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.page {
  height: 100%;
  /* height: calc(100vh - 200px); */
}
</style>
