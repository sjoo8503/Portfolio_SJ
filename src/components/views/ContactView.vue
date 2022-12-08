<template>
  <div class="contact__page">
    <header>
      <div>
        <h1>Contact</h1>
        <hr />
      </div>
      <div class="contact__contents">
        <p>Have a question or want to work together?</p>
      </div>
      <form
        @submit.prevent
        @keypress.enter="submitForm"
        class="contact__form"
        action="#"
      >
        <div>
          <input v-model="name" type="text" name="Name" placeholder="Name" />
        </div>
        <div>
          <input
            v-model="email"
            type="email"
            name="Email"
            placeholder="Email"
          />
        </div>
        <div>
          <textarea v-model="message" placeholder="Message"></textarea>
        </div>
        <button @click="submitForm" class="contact__submit-btn" ref="submit">
          submit
        </button>
      </form>
    </header>
  </div>
</template>

<script>
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/index";
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    submitForm() {
      if (this.name !== "" || this.email !== "" || this.message !== "") {
        addDoc(collection(db, "contacts"), {
          name: this.name,
          email: this.email,
          message: this.message,
        });
        this.$refs.submit.textContent = "Submitted Successfully";
        this.name = "";
        this.email = "";
        this.message = "";
        setTimeout(() => {
          this.$refs.submit.textContent = "Submit";
        }, 3000);
      } else {
        this.$refs.submit.textContent = "Please fill all inputs!";
      }
    },
  },
  components: {},
};
</script>

<style scoped>
.contact__page {
  overflow: scroll;
}
.contact__contents {
  margin: 0 30rem 5rem 30rem;
  text-align: center;
  font-size: 2rem;
  line-height: 3rem;
}
form {
  text-align: center;
}

input {
  font-family: "Lato", sans-serif;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
  width: 50rem;
  height: 4rem;
  outline: none;
  border: solid 1.5px var(--input-border-color);
}
input:focus,
textarea:focus {
  background-color: var(--focus-effect-bg-color);
}

textarea {
  font-family: "Lato", sans-serif;
  padding: 1rem 0 0 1.5rem;
  margin-bottom: 1rem;
  width: 50rem;
  height: 15rem;
  outline: none;
  border: solid 1.5px var(--input-border-color);
}

input:focus:invalid,
textarea:focus:invalid {
  border-color: var(--focus-effect-border-color);
}

.contact__submit-btn {
  width: 50rem;
  height: 4rem;
  outline: none;
  border: solid 1.5px var(--button-bg-color);
  color: var(--button-txt-color);
  background-color: var(--button-bg-color);
  letter-spacing: 0.1rem;
  text-transform: uppercase;
}
.contact__submit-btn:active {
  background-color: var(--button-active-bg-color);
}

/* Landscape Mobile to Portrait Tablet 404px ~ 847px */
@media only screen and (max-width: 847px) {
  .contact__contents {
    margin: 0 10rem 5rem 10rem;
  }

  input {
    padding-left: 1.2rem;
    width: 38rem;
  }

  textarea {
    padding-left: 1.2rem;
    width: 38rem;
  }

  .contact__submit-btn {
    width: 38rem;
  }
}
/* Portrait Mobile 0px ~ 403px */
@media only screen and (max-width: 403px) {
  input,
  textarea,
  .contact__submit-btn {
    width: 30rem;
  }
}
</style>
