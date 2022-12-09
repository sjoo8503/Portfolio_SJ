<template>
  <div class="footer">
    <hr />
    <ul class="footer__icons">
      <li>
        <LinkedinIcon></LinkedinIcon>
      </li>
      <li>
        <GithubIcon></GithubIcon>
      </li>
      <li>
        <MailIcon class="mail-icon"></MailIcon>
      </li>
    </ul>
    <p>Handcrafted By Seojeong Joo © 2022. All Rights Reserved.</p>
  </div>
</template>

<script>
import LinkedinIcon from "../icons/LinkedinIcon.vue";
import GithubIcon from "../icons/GithubIcon.vue";
import MailIcon from "../icons/MailIcon.vue";
export default {
  components: {
    LinkedinIcon,
    GithubIcon,
    MailIcon,
  },
};
</script>

<style scoped>
.footer {
  background-color: var(--footer-bg-color);
  text-align: center;
  padding: 3.5rem 0;
  /* position: fixed; */
  bottom: 0;
  width: 100%;
}

.footer hr {
  margin-bottom: 3rem;
}
.footer__icons {
  display: flex;
  justify-content: center;
  gap: 3.5rem;
  margin-bottom: 1.5rem;
}

.footer__icons li {
  list-style: none;
  cursor: pointer;
}
</style>
