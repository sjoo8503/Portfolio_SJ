<template>
  <div class="nav">
    <div class="nav__logo">
      <p @click="changeView('home-view')">SJ.DEV</p>
    </div>
    <div class="nav__menu" v-if="isMobileNav">
      <p @click="changeView('about-view')">About</p>
      <p @click="changeView('projects-view')">Projects</p>
      <p @click="changeView('contact-view')">Contact</p>
      <a href="./cv.pdf" target="_black">Resume</a>
      <DaytimeIcon
        id="theme-mode-btn"
        v-if="isDarkMode"
        @click="toggleThemeMode()"
      ></DaytimeIcon>
      <NighttimeIcon
        id="theme-mode-btn"
        v-else
        @click="toggleThemeMode()"
      ></NighttimeIcon>
    </div>
    <div class="nav__mobile">
      <DaytimeIcon v-if="isDarkMode" @click="toggleThemeMode()"></DaytimeIcon>
      <NighttimeIcon v-else @click="toggleThemeMode()"></NighttimeIcon>
      <BarIcon class="nav__toggleBtn" @click="toggleNavBar()"></BarIcon>
    </div>
  </div>
</template>

<script>
import DaytimeIcon from "../icons/DaytimeIcon.vue";
import NighttimeIcon from "../icons/NighttimeIcon.vue";
import BarIcon from "../icons/BarIcon.vue";

export default {
  components: {
    DaytimeIcon,
    NighttimeIcon,
    BarIcon,
  },

  data() {
    return {
      isDarkMode: false,
      isMobileNav: false,
      screenSize: window.innerWidth,
    };
  },
  methods: {
    isDesktopMode() {
      if (this.screenSize >= 847) {
        this.isMobileNav = true;
      }
    },
    watchScreenSize() {
      window.addEventListener("resize", () => {
        this.screenSize = window.innerWidth;
        if (this.screenSize >= 847) {
          this.isMobileNav = true;
        } else if (this.screenSize <= 847) {
          this.isMobileNav = false;
        }
      });
    },
    changeView(currentView) {
      this.$store.commit("changeView", currentView);
    },
    toggleNavBar() {
      this.isMobileNav = !this.isMobileNav;
    },

    toggleThemeMode() {
      document.querySelector("body").classList.toggle("dark-mode");
      this.isDarkMode = !this.isDarkMode;
    },
  },
  computed: {},
  // computed runs itself when any depending variable changes
  created() {
    this.watchScreenSize();
    // when app is created, run any functions in created() area

    this.isDesktopMode();
  },
};
</script>
<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px var(--nav-hover-effect-color);
  padding: 0 5rem;
  position: relative;
}

.nav::before {
  position: fixed;
}

.nav__logo {
  font: 3rem "Abril Fatface", cursive;
  background-color: var(--logo-bg-color);
  color: var(--logo-txt-color);
  padding: 2rem;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
}
.nav__menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav__menu p {
  margin-right: 2.5rem;
  padding: 0.5rem;
  cursor: pointer;
  border-bottom: solid 2px transparent;
  transition: 0.3s linear;
}

.nav__menu p:hover {
  border-bottom-color: var(--nav-hover-effect-color);
}

.nav__menu a {
  margin-right: 3rem;
  text-decoration: none;
  color: var(--main-txt-color);
  border: solid 1px var(--main-txt-color);
  border-radius: 5px;
  padding: 0.8rem 1.5rem;
  transition: 0.15s linear;
}

.nav__menu a:hover {
  color: var(--nav-hover-txt-color);
  background-color: var(--nav-hover-effect-color);
}

.nav__mobile {
  display: none;
  position: absolute;
  right: 0;
}

/* Landscape Mobile to Portrait Tablet 404px ~ 847px */
@media only screen and (max-width: 847px) {
  .nav {
    padding: 0;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    border-bottom-color: transparent;
  }

  .nav__mobile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
    position: fixed;
    top: 0.7rem;
  }

  .nav__menu {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .nav__menu p {
    font-size: 1.8rem;
    text-align: center;
    margin: 2rem 0 0 0;
    padding: 1.5rem;
    width: 80%;
  }

  .nav__menu p:hover {
    border-radius: 5px;
    border-bottom-color: transparent;
    background-color: var(--nav-hover-effect-color);
    color: var(--nav-hover-txt-color);
  }
  .nav__menu a {
    font-size: 1.8rem;
    margin: 2rem 0 0 0;
    padding: 1rem 5rem;
  }

  .nav__menu a:hover {
    color: var(--nav-hover-txt-color);
    background-color: var(--nav-hover-effect-color);
  }

  #theme-mode-btn {
    display: none;
  }
}
</style>
