<template>
  <div class="card">
    <div class="card-body p-0">
      <div id="bannerCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://picsum.photos/800/400?random=1"
              class="d-block w-100"
              alt="Beautiful landscape"
            />
            <div class="carousel-caption">
              <h5 class="text-shadow">Latest News at Macquarie</h5>
              <p class="text-shadow">Discover around us.</p>
              <button class="btn btn-primary custom-button">Learn more</button>
            </div>
          </div>
          <!-- Additional carousel items should be non-active to function correctly -->
          <div class="carousel-item">
            <img
              src="https://picsum.photos/800/400?random=2"
              class="d-block w-100"
              alt="City night view"
            />
            <div class="carousel-caption">
              <h5 class="text-shadow">Innovation in Technology</h5>
              <p class="text-shadow">Explore our latest tech advancements.</p>
              <button class="btn btn-primary custom-button">Discover</button>
            </div>
          </div>
          <!-- Add more carousel items here -->
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#bannerCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#bannerCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.text-shadow {
  text-shadow: 2px 2px 4px #000;
}

.carousel-caption {
  max-height: -webkit-fill-available;
}
</style>
