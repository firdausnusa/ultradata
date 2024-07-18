<template>
  <div
    style="
      background-image: linear-gradient(to bottom, #333, #f8f9fa);
      padding-top: 90px;
    "
  >
    <div class="banner text-black py-3">
      <h1>
        Special Housing <br />
        Home Loan
      </h1>
      <p class="rates">
        <span class="custom-numbers">3.89</span>% p.a. to
        <span class="custom-numbers">4.03</span> % p.a.
      </p>

      <p class="subtitle">Great low rates made simple</p>
      <button class="btn mt-3 custom-button">Apply Now</button>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.banner {
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: calc(10% + 60px);
  width: 80%;
}

.rates {
  font-weight: light;
}

.custom-numbers {
  font-size: 2rem;
  font-weight: lighter;
}

.subtitle {
  font-size: 1.5rem;
}
</style>
