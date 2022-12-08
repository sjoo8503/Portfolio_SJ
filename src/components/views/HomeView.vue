<template>
  <div class="home__container" id="homepage">
    <div class="home__title">
      <p class="home__primary-title">Full-stack Web Developer.</p>
      <p class="home__sub-title">
        Producing high quality responsive applications and exceptional user
        experience
      </p>
      <button class="home__btn" @click="changeView('projects-view')">
        View My Work
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeView(currentView) {
      this.$store.commit("changeView", currentView);
    },
  },
};
</script>

<style scoped>
#homepage {
  height: 100vh;
}
.home__container {
  width: 100%;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),
    url("https://res.cloudinary.com/do8r4a3sn/image/upload/v1669862022/bg_img_01_cpieb2.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
}

.home__title {
  color: var(--home-main-txt-color);
  position: absolute;
  top: 300px;
  left: 150px;
}
.home__primary-title {
  text-transform: uppercase;
  font-size: 6rem;
}

.home__sub-title {
  color: var(--home-sub-txt-color);
  margin-bottom: 3rem;
}

.home__btn {
  font-size: 1.7rem;
  padding: 1.5rem 4rem;
  background-color: transparent;
  color: var(--home-main-txt-color);
  letter-spacing: 0.15rem;
  border: solid 1px var(--home-sub-txt-color);
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s linear;
}

.home__btn:hover {
  color: var(--home-main-txt-color);
  background-color: var(--home-button-hover-bg-color);
}

/* Landscape Mobile to Portrait Tablet 404px ~ 847px */
@media only screen and (max-width: 847px) {
  .home__title {
    top: 230px;
    left: 35px;
  }
}
/* Portrait Mobile 0px ~ 403px */
@media only screen and (max-width: 403px) {
  .home__title {
    left: 10px;
  }
}
</style>
