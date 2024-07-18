<template>
  <aside class="sidebar mt-4" style="z-index: 15">
    <nav>
      <ul>
        <li>
          <router-link to="/">
            <i class="fas fa-mouse"></i>
            <div class="custom-small">Apply Online</div>
          </router-link>
        </li>
        <li>
          <router-link to="/others">
            <i class="fas fa-map-marker-alt"></i>
            <div class="custom-small">Locate Us</div>
          </router-link>
        </li>
        <li>
          <router-link to="/others">
            <i class="fas fa-calculator"></i>
            <div class="custom-small">Calculator</div>
          </router-link>
        </li>
        <li>
          <router-link to="/others">
            <i class="fas fa-chart-bar"></i>
            <div class="custom-small">Rates & Fees</div>
          </router-link>
        </li>
        <li>
          <router-link to="/others">
            <i class="fas fa-life-ring"></i>
            <div class="custom-small">Insurance</div>
          </router-link>
        </li>
        <li>
          <router-link to="/others">
            <i class="fas fa-phone"></i>
            <div class="custom-small">Contact Us</div>
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: "SideBar",
  // Add any component logic here
};
</script>

<style scoped scss>
.sidebar {
  background: linear-gradient(135deg, #ececec, #fff); /* Subtle gradient */
  color: #333; /* Dark text for readability */
  width: 60px; /* Match the width in App.vue */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  left: 0;
  top: 50px; /* Adjust based on Navbar height */
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 20px;
}

.sidebar a {
  padding: 10px 15px;
  text-decoration: none;
  font-size: 18px;
  color: #333;
  display: block;
}

.sidebar a:hover {
  color: #fff;
  background-color: #6c757d; /* Add a hover effect */
}

ul {
  list-style-type: none; /* Removes bullet points */
  padding-left: 0; /* Optionally removes padding */
}

a {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.custom-small {
  font-size: 0.55rem; /* Adjust the size as needed */
}
</style>
