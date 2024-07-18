<template>
  <div>
    <div class="centered-container">
      <h6>Banking with Friends (Community Section)</h6>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-lg-8 pb-2">
          <StoriesView />
        </div>
        <div class="col-sm-12 col-lg-4 pb-2">
          <TestimonialsView />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import StoriesView from "./StoriesView.vue";
import TestimonialsView from "./TestimonialsView.vue";
</script>

<style lang="scss" scoped>
.centered-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; /* Adjust the height as needed */
  margin: 10px 0;
}
</style>
