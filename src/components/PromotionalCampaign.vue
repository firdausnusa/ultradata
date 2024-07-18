<template>
  <div
    class="card text-center"
    style="background-image: url('https://picsum.photos/200/300')"
  >
    <div
      class="card-body d-flex flex-column justify-content-center align-items-center"
    >
      <h6 class="card-title">{{ title }}</h6>
      <button
        class="btn custom-button"
        aria-label="Learn more about the promotional campaign"
      >
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PromotionalCampaign",
  props: {
    title: {
      type: String,
      default: "Promotional Campaign",
    },
    buttonText: {
      type: String,
      default: "Learn more",
    },
  },
};
</script>

<style scoped>
.card {
  margin: auto auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #e3e6f0;
  border-radius: 0.5rem;
  height: 100%;
}
</style>
