<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-width">
        <div class="row">
          <div class="col-md-8">
            <div class="social-icons pb-2">
              <span class="m-1">
                <a href="https://facebook.com" target="_blank">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </span>
              <span class="m-1">
                <a href="https://instagram.com" target="_blank">
                  <i class="fab fa-instagram"></i>
                </a>
              </span>
              <span class="m-1">
                <a href="tel:+1234567890">
                  <i class="fas fa-phone"></i>
                </a>
              </span>
            </div>
            <div class="footer-links pb-2">
              <a href="#" class="m-1">Privacy</a> |
              <a href="#" class="m-1">Security</a> |
              <a href="#" class="m-1">Disclosure Documents</a> |
              <a href="#" class="m-1">Contact Us</a>
            </div>
            <div style="font-size: 0.7rem" class="pb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
              perspiciatis debitis vero nostrum eum. Cum quod explicabo
              aspernatur veniam dolores, dolore animi non, eius consequuntur
              repellat, aut rem laborum at.
            </div>
            <div><img :src="logoSvg" alt="Logo" /></div>
          </div>
          <div class="col-md-4">
            <p>Get in touch</p>
            <form @submit.prevent="handleSubmit">
              <div class="form-group pb-1">
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  class="form-control"
                  required
                />
              </div>
              <div class="form-group pb-1">
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  class="form-control"
                  required
                />
              </div>
              <div class="form-group pb-1">
                <textarea
                  id="message"
                  v-model="form.message"
                  class="form-control"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn custom-button">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import logoSvg from "@/assets/logowhite.svg";

export default {
  name: "FooterView",
  data() {
    return {
      logoSvg,
      form: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      // Implement submission logic here
      console.log(this.form);
      // Reset form after submission
      this.form = { name: "", email: "", message: "" };
    },
  },
};
</script>

<style scoped lang="scss">
.footer {
  margin-top: auto;
  background-color: #333; /* Dark background for contrast */
  color: #fff; /* White text for readability */
  padding: 1rem 0;
}

.footer-width {
  margin-left: 60px;
  margin-right: 2vw;
}

.container {
  display: flex;
  justify-content: center; /* Center content horizontally */
}

.footer-links a {
  font-size: 10px;
  color: #fff; /* Adjust as needed */
  text-decoration: none; /* Adjust as needed */
  margin: 0 5px; /* Adjust spacing around links */
}

.footer-links a:hover {
  text-decoration: underline; /* Style for hover state */
}

.social-icons i {
  color: grey; /* Default icon color */
  transition: color 0.3s; /* Smooth transition for color change */
}

.social-icons a:hover i {
  color: white; /* Icon color on hover */
}
</style>
