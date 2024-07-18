<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <!-- Use the row class to create a flex container -->
        <ul class="navbar-nav mx-auto row">
          <!-- Adjusted to use col-sm-4 for better control on small devices -->
          <li class="nav-item col-sm-4 col-md-auto">
            <a
              class="nav-link icon-text-wrapper"
              :class="{ active: $route.path === '/' }"
              aria-current="page"
              @click.prevent="$router.push('/')"
            >
              <i class="fas fa-home fa-2x"></i> Home Loans
            </a>
          </li>
          <!-- Repeat for each item, ensuring col-sm-4 and col-md-auto are used -->
          <li class="nav-item col-sm-4 col-md-auto">
            <a
              class="nav-link icon-text-wrapper"
              @click.prevent="$router.push('/others')"
              :class="{ active: $route.path !== '/' }"
            >
              <i class="fas fa-calculator fa-2x"></i> Calculator
            </a>
          </li>
          <li class="nav-item col-sm-4 col-md-auto">
            <a
              class="nav-link icon-text-wrapper"
              :class="{ active: $route.path !== '/' }"
              @click.prevent="$router.push('/others')"
            >
              <i class="fas fa-chart-bar fa-2x"></i> Rates & Fees
            </a>
          </li>
          <li class="nav-item col-sm-4 col-md-auto">
            <a
              class="nav-link icon-text-wrapper"
              :class="{ active: $route.path !== '/' }"
              @click.prevent="$router.push('/others')"
            >
              <i class="fas fa-piggy-bank fa-2x"></i> Savings
            </a>
          </li>
          <li class="nav-item col-sm-4 col-md-auto">
            <a
              class="nav-link icon-text-wrapper"
              :class="{ active: $route.path !== '/' }"
              @click.prevent="$router.push('/others')"
            >
              <i class="fas fa-life-ring fa-2x"></i> Insurance
            </a>
          </li>
          <li class="nav-item col-sm-4 col-md-auto">
            <a
              class="nav-link icon-text-wrapper"
              :class="{ active: $route.path !== '/' }"
              @click.prevent="$router.push('/others')"
            >
              <i class="fas fa-phone fa-2x"></i> Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.navbar-nav {
  justify-content: center;
}

.icon-text-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
