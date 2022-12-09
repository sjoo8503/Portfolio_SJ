<template>
  <!-- @closeModal="openModal = false" -->
  <ProjectCard
    v-if="isModal"
    :data="currentProjectData"
    @closeProjectModal="openProjectModal"
  />
  <div class="project__page">
    <header>
      <div>
        <h1>Projects</h1>
        <hr />
      </div>
    </header>
    <div class="projects__type">
      <div @click="filterProjects" data-btn="all" class="selected__btn">
        All
      </div>
      <div @click="filterProjects" data-btn="react">React-JS</div>
      <div @click="filterProjects" data-btn="vue">Vue</div>
      <div @click="filterProjects" data-btn="js">JavaScript</div>
    </div>
    <div class="projects__cards">
      <div
        v-for="project in filteredProjects"
        class="projects__card"
        @click="openProjectModal(project)"
      >
        <img
          :src="`https://res.cloudinary.com/do8r4a3sn/image/upload/${project.imageUrl[0]}`"
          class="projects__img"
          alt="text"
        />

        <div class="content__slate">
          <h3 class="content__title">
            {{ project.title }}
          </h3>
          <p class="content__description">
            {{ project.description }}
          </p>
          <p class="content__technologies">
            <span v-for="technology in project.technologies">{{
              technology
            }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from "../designs/ProjectCard.vue";
export default {
  components: { ProjectCard },
  data() {
    return {
      projectData: [
        {
          id: 0,
          imageUrl: [
            "v1669861982/RPS_01_ifga8l.png",
            "v1669861984/RPS_02_udcwh7.png",
            "v1669861982/RPS_03_xdcv27.png",
          ],
          title: "Rock Paper Scissors Game",
          description: "Rock paper and scissors game in JavaScript",
          about:
            "Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.",
          technologies: ["HTML & CSS", "JavaScript"],
          link: "https://sjoo8503.github.io/rock-paper-scissors-game/",
          category: ["js", "all"],
        },
        {
          id: 1,
          imageUrl: [
            "v1670055107/momentum_01_vud70i.png",
            "v1670055020/momentum_02.png_zizpke.png",
            "v1670055107/momentum_03_zdd1br.png",
          ],
          title: "Momentum",
          description: "Momentum in JavaScript with LocalStorage",
          about:
            "Momentum is a personal dashboard designed to eliminate distraction and provide inspiration, focus, and productivity. (To do list tracks your tasks / See the weather for your area / Set a goal to focus your day / Clean design showcases inspirational photography and a motivating quote / “Apps” button takes you to the following when needed)",
          technologies: ["HTML & CSS", "JavaScript"],
          link: "https://sjoo8503.github.io/momentum/",
          category: ["js", "all"],
        },
        {
          id: 2,
          imageUrl: [
            "v1670543038/pokemon-card-list_00_wvdo6c.png",
            "v1670473727/pokemon-card-list-02_wyscs3.png",
            "v1670474712/Screen_Recording_2022-12-08_at_5.26.43_PM_iag684.mov",
          ],
          title: "Pokemon Card Generator",
          description:
            "Pokemon Card Generator, displays the different pokemons and their details based on user's selection",
          about:
            "Pokemon Card Generator is a project that uses the pokemon API to display different pokemon cards and their details enough fun and engaging way. Using modern CSS, the card is displayed in a 3D way which is also interactive.",
          technologies: ["HTML & CSS", "JavaScript"],
          link: "",
          category: ["js", "all"],
        },
        {
          id: 3,
          imageUrl: [
            "v1669943191/BA_01_tmguei.png",
            "v1669943192/BA_02_zpxdwd.png",
            "v1669943191/BA_03_pc4pop.png",
          ],
          title: "Accommodation.com",
          description: "Accommodation booking website in JavaScript",
          about:
            "Accommodation.com is a accommodation booking website for New Zealand. It contains information that is relevant to travellers who are thinking about and actively planning a visit to New Zealand.",
          technologies: ["HTML & CSS", "JavaScript"],
          link: "",
          category: ["js", "all"],
        },
      ],
      filteredProjects: [],
      currentProjectData: {},
      isModal: false,
    };
  },
  methods: {
    buttonColor(event) {
      const buttons = document.querySelectorAll(".projects__type div");
      buttons.forEach((eachButton) =>
        eachButton.classList.remove("selected__btn")
      );
      event.currentTarget.classList.add("selected__btn");
    },

    filterProjects(event) {
      this.filteredProjects = [];
      const filter = event.currentTarget.dataset.btn;
      for (let project of this.projectData) {
        for (let category of project.category) {
          if (category === filter) {
            this.filteredProjects.push(project);
          }
        }
      }
      this.buttonColor(event);
    },

    openProjectModal(project) {
      this.isModal = !this.isModal;
      this.currentProjectData = project;
    },
  },
  created() {
    this.filteredProjects = this.projectData;
  },
};
</script>

<style scoped>
.project__page {
  overflow: scroll;
  /* padding-bottom: 300px; */
  /* min-height: 100%; */
}

.projects__type {
  font-size: 1.8rem;
  width: 40%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  margin-bottom: 6rem;
}

.projects__type div {
  padding: 0.9rem 2.3rem;
  border-radius: 10px;
  text-transform: uppercase;
  cursor: pointer;
}

.projects__type div:hover {
  color: var(--hover-txt-color);
  background-color: var(--main-point-bg-color);
}

.selected__btn {
  color: var(--hover-txt-color);
  background-color: var(--main-point-bg-color);
}

.projects__cards {
  background-color: var(--project-card-bg-color);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  object-fit: cover;
  overflow: hidden;
  gap: 3rem;
  width: 70vw;
  margin: auto;
  place-items: center;
  /* border: solid 1px red; */
}
.projects__card {
  background-color: var(--project-card-bg-color);
  min-width: 100%;
  max-width: 400px;
  height: 280px;
  position: relative;
  cursor: pointer;
  /* border: solid 1px green; */
}

.projects__card:hover .content__slate {
  display: flex;
}
.projects__img {
  /* position: absolute; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1;
  transition: 0.3s;
  border: solid 1.5px #fff;
  border-radius: 20px;
}

.content__slate {
  content: "";
  border-radius: 20px;
  color: #fff;
  max-width: 400px;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  min-width: 100%;
  /* opacity: 0.4; */
  /* backdrop-filter: blur(5px); */
  flex-direction: column;
  justify-content: end;
  gap: 2rem;
  padding: 2rem;
  display: none;
  /* background-color: #0000005f; */
  background-image: linear-gradient(#23232300 0%, #191919 100%);
}

.content__title {
  font-size: 2.5rem;
}

.content__description {
  font-size: 1.5rem;
}

/* .content__slate::before {
  content: "";
  pointer-events: none;

  position: absolute;
  inset: 0px;
  z-index: -1;
  background: linear-gradient(0deg, #000000 0%, #868686 100%);
}
.content__slate::after {
  content: "";
  pointer-events: none;
  position: absolute;
  z-index: 1;
  inset: 0px;
  opacity: 0.3;
  background: linear-gradient(0deg, #000000 0%, #868686 100%);
} */

/* .projects__img:hover {
  opacity: 0.15;
  cursor: pointer;
  background-image: linear-gradient(#fff, #000);
} */

.content__technologies {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.content__technologies span {
  background-color: #9e9e9c;
  border-radius: 15px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
}

video {
  width: 100px;
  height: 100px;
}
/* Large Laptop to Desktop 1404px ~ 1728px */
@media only screen and (max-width: 1728px) {
  .projects__type {
    width: 50%;
    font-size: 1.7rem;
  }

  .projects__cards {
    grid-template-columns: 1fr 1fr;
    width: 70vw;
  }
}
/* Landscape Mobile to Portrait Tablet 404px ~ 847px */
@media only screen and (max-width: 847px) {
  .projects__type {
    width: 80%;
    font-size: 1rem;
  }

  .projects__cards {
    grid-template-columns: 1fr;
  }
}
/* Portrait Mobile 0px ~ 403px */
@media only screen and (max-width: 403px) {
  .projects__type {
    width: 95%;
  }
}
</style>
