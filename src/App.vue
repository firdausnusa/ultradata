<template>
  <div>
    <Navbar />
    <SideBar class="sidebar" />
    <MainPromotion />
    <MainNavigation />
    <div class="container custom-bg">
      <main class="main-content">
        <router-view />
      </main>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/NavbarView.vue";
import Footer from "./components/FooterView.vue";
import SideBar from "./components/SideBar.vue";
import MainPromotion from "./views/MainPromotion.vue";
import MainNavigation from "./views/MainNavigation.vue";

export default {
  components: {
    Navbar,
    Footer,
    SideBar,
    MainPromotion,
    MainNavigation,
  },
};
</script>

<style lang="scss">
@import "./styles/main.scss";

.container {
  display: flex;
}

.sidebar {
  width: 60px;
  overflow-y: auto;
}

.main-content {
  margin-left: 60px;
  margin-right: 2vw;
}
</style>
