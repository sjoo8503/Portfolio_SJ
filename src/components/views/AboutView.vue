<template>
  <div class="about__page">
    <header>
      <div>
        <h1>About</h1>
        <hr />
      </div>
    </header>
    <div class="about__contents">
      <p>
        Hello, I am Seojeong. I'm a Full-Stack Web Developer in New Zealand. I
        have a great passion for a great passion for building web applications
        and websites from scratch.
      </p>
    </div>
    <div class="about__cards">
      <div class="about__card">
        <ResponsiveIcon></ResponsiveIcon>
        <h2>Web Development</h2>
        <p>
          Responsive and mobile friendly. My layouts will work on any device,
          big or small.
        </p>
      </div>
      <div class="about__card">
        <IntuitiveIcon></IntuitiveIcon>
        <h2>Web Design</h2>
        <p>
          Modern and user-focused. I have a strong preference for easy to use,
          intuitive UX/UI.
        </p>
      </div>
      <div class="about__card">
        <CommunicationIcon></CommunicationIcon>
        <h2>Communication</h2>
        <p>
          I have excellent communication skills that is one of the foundational
          elements of a good website.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ResponsiveIcon from "../icons/ResponsiveIcon.vue";
import IntuitiveIcon from "../icons/IntuitiveIcon.vue";
import CommunicationIcon from "../icons/CommunicationIcon.vue";

export default {
  components: {
    IntuitiveIcon,
    ResponsiveIcon,
    CommunicationIcon,
  },
};
</script>

<style scoped>
.about__page {
  overflow: scroll;
}
.about__contents {
  /* padding: 0 20rem 0 20rem; */
  margin: 0 30rem 7rem 30rem;
  text-align: center;
  font-size: 2rem;
  line-height: 3rem;
}

.about__cards {
  display: flex;
  justify-content: space-around;
  gap: 3rem;
  text-align: center;
  margin: 0rem 20rem;
}

.about__card {
  border: solid 1.5px var(--main-point-color);
  padding: 3rem;
  width: 28%;
}

.about__card h2 {
  margin: 1rem 0 1rem 0;
}

/* Landscape Mobile to Portrait Tablet 404px ~ 847px */
@media only screen and (max-width: 847px) {
  .about__contents {
    margin: 0 10rem 5rem 10rem;
  }

  .about__cards {
    flex-wrap: wrap;
    margin: 0 7rem 15rem 7rem;
  }
  .about__card {
    min-width: 400px;
    padding: 2rem;
  }
}

/* Portrait Mobile 0px ~ 403px */
@media only screen and (max-width: 403px) {
  .about__contents {
    margin: 0 5rem 5rem 5rem;
  }
  .about__card {
    min-width: 300px;
  }
}
</style>
