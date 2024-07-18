<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 pb-2">
          <div class="card text-center">
            <div
              class="card-body d-flex flex-column justify-content-center align-items-center"
            >
              <h6 class="card-title">Featured Sponsorship Story</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus laudantium labore maxime, quibusdam accusantium quis
                ad id porro eligendi tempore numquam esse exercitationem et quas
                atque temporibus inventore nisi omnis!
              </p>
              <button
                class="btn custom-button"
                aria-label="Learn more about the promotional campaign"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
        <div class="col-12 pb-2">
          <div class="row">
            <div class="col-12 col-lg-6">
              <div class="card text-center">
                <div
                  class="card-body d-flex flex-column justify-content-center align-items-center"
                >
                  <h6 class="card-title">Social Feed</h6>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-6">
              <div class="card text-center">
                <div
                  class="card-body d-flex flex-column justify-content-center align-items-center"
                >
                  <h6 class="card-title">
                    Need a sponsor for your community project?
                  </h6>

                  <button
                    class="btn custom-button"
                    aria-label="Learn more about the promotional campaign"
                  >
                    Apply for Community Support
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.card {
  margin: auto auto;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Enhanced shadow for depth */
  border: none; /* Remove border for a cleaner look */
  border-radius: 0.5rem;
  height: 100%;
  color: #333; /* Darker text for better readability */
  padding: 20px; /* Added padding for spacing inside the card */
}

.btn.custom-button {
  background-color: #fcb69f; /* Matching button color with the gradient */
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 0.3rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f78b63; /* Darker shade for hover effect */
  }
}
</style>
