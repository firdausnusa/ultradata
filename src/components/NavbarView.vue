<template>
  <nav class="navbar navbar-expand-lg navbar-light navbar-custom">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img :src="logoSvg" alt="Logo" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="container justify-content-end custom-font">
          <div class="row">
            <div class="col-6 col-lg-12 d-flex justify-content-end">
              <div>
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="#"> BSB 802 126</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"
                      ><i class="fas fa-lock" style="font-size: 0.75em"></i>
                      eStatement</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"
                      ><i class="fas fa-lock" style="font-size: 0.75em"></i>
                      Internet Banking</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-6 col-lg-12 d-flex justify-content-end">
              <div>
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="#">Loans</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Banking</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Why Macquarie?</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Support</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <i class="fas fa-search"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import logoSvg from "@/assets/logowhite.svg";

export default {
  name: "NavbarView",
  data() {
    return {
      logoSvg,
    };
  },
};
</script>

<style scoped lang="scss">
.navbar-custom {
  position: fixed; /* Keep navbar at the top */
  top: 0; /* Align to the top of the viewport */
  left: 0; /* Align to the left of the viewport */
  width: 100%; /* Ensure it spans the full width */
  background-color: #333; /* Dark background for contrast */
  color: #fff;
  z-index: 20; /* Ensure navbar is above other content */
}

.custom-font {
  font-size: 0.75em;
}

a.nav-link {
  color: #fff;
}

.navbar-toggler-icon {
  filter: brightness(0) invert(1);
}
</style>
