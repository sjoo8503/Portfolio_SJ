<template>
  <div @click.self="$emit('closeProjectModal', {})" class="dark-bg">
    <div class="project-card__modal">
      <div class="modal__header">
        <ArrowLeftIcon @click="$emit('closeProjectModal', {})"></ArrowLeftIcon>
        <a @click="$emit('closeProjectModal', {})">Back To Projects</a>
      </div>
      <div class="modal__content">
        <h2 class="content__title">
          {{ data.title }}
        </h2>
        <p class="content__description">
          {{ data.description }}
        </p>
        <!-- <img
          v-for="image in data.imageUrl"
          :src="`https://res.cloudinary.com/do8r4a3sn/image/upload/${image}`"
          class="projects__img"
        /> -->
        <div class="slide-box">
          <input type="radio" name="slide" id="slide-01" checked />
          <input type="radio" name="slide" id="slide-02" />
          <input type="radio" name="slide" id="slide-03" />
          <ul class="slide-list">
            <li class="slide-item">
              <div>
                <label for="slide-03" class="left"
                  ><SlideLeftIcon></SlideLeftIcon
                ></label>
                <label for="slide-02" class="right"
                  ><SlideRightIcon></SlideRightIcon
                ></label>
                <img
                  :src="`https://res.cloudinary.com/do8r4a3sn/image/upload/${data.imageUrl[0]}`"
                  class="projects__img"
                />
              </div>
            </li>
            <li class="slide-item">
              <div>
                <label for="slide-01" class="left"
                  ><SlideLeftIcon></SlideLeftIcon
                ></label>
                <label for="slide-03" class="right"
                  ><SlideRightIcon></SlideRightIcon
                ></label>
                <img
                  :src="`https://res.cloudinary.com/do8r4a3sn/image/upload/${data.imageUrl[1]}`"
                  class="projects__img"
                />
              </div>
            </li>
            <li class="slide-item">
              <div>
                <label for="slide-02" class="left"
                  ><SlideLeftIcon></SlideLeftIcon
                ></label>
                <label for="slide-01" class="right"
                  ><SlideRightIcon></SlideRightIcon
                ></label>
                <img
                  :src="`https://res.cloudinary.com/do8r4a3sn/image/upload/${data.imageUrl[2]}`"
                  class="projects__img"
                />
              </div>
            </li>
          </ul>
        </div>
        <div class="content__about">
          <h3>About</h3>
          <p>{{ data.about }}</p>
        </div>
        <div class="content__technologies">
          <h3>Technologies</h3>
          <p>
            <span v-for="technology in data.technologies">{{
              technology
            }}</span>
          </p>
        </div>
        <div class="content__github">
          <h3>Github</h3>
          <p>{{ data.link }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowLeftIcon from "../icons/ArrowLeftIcon.vue";
import SlideLeftIcon from "../icons/SlideLeftIcon.vue";
import SlideRightIcon from "../icons/SlideRightIcon.vue";
export default {
  props: ["data"],
  components: {
    ArrowLeftIcon,
    SlideLeftIcon,
    SlideRightIcon,
  },
};
</script>

<style scoped>
.dark-bg {
  /* border: solid 2px red; */
  position: fixed;
  width: 100vw;
  top: 0;
  right: 0;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.684);
}

.project-card__modal {
  padding: 1rem 3rem;
  position: fixed;
  right: 0;
  top: 0;
  width: 30%;
  /* border: solid 2px blue; */
  height: 100%;
  background-color: white;
  overflow-y: scroll;
}

.modal__header {
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 2px #eaeaea;
}

.modal__header a {
  font-weight: 700;
  cursor: pointer;
}

.modal__content {
  padding: 2.5rem 0;
  letter-spacing: 0.05rem;
}

.modal__content h3 {
  font-size: 1.6rem;
  margin: 5rem 0 1.5rem 0;
}

.modal__content h2,
.modal__content h3,
.modal__header a {
  color: #000;
}
.modal__content p {
  color: #808080;
}

[name="slide"] {
  display: none;
}

.slide-box {
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
}

.slide-box ul,
.slide-box li {
  list-style: none;
}

.slide-box img {
  max-width: 100%;
}

.slide-box .slide-list {
  white-space: nowrap;
  font-size: 0;
  overflow: hidden;
}

.slide-box .slide-item {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  transition: all 0.35s;
}

.slide-box .slide-item label {
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
  padding: 20px;
  border-radius: 50%;
  cursor: pointer;
}

label.left {
  left: 0;
}

label.right {
  right: 0;
}

label.left,
label.right {
  background-position: center center;
  background-size: 50%;
  background-repeat: no-repeat;
}

#slide-01:checked ~ .slide-list .slide-item {
  transform: translateX(0);
}

#slide-02:checked ~ .slide-list .slide-item {
  transform: translateX(-100%);
}

#slide-03:checked ~ .slide-list .slide-item {
  transform: translateX(-200%);
}
.content__title {
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.content__description {
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #929191;
  margin-bottom: 3rem;
}

.content__github p {
  cursor: pointer;
}

.content__technologies span {
  background-color: #efe9e4;
  color: #000;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 700;
  margin-right: 0.5rem;
}
</style>
