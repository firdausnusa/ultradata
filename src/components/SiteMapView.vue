<template>
  <div @click="toggleAccordion">
    <div>
      Sitemap
      <i :class="['fas', isOpen ? 'fa-angle-up' : 'fa-angle-down', 'ml-4']"></i>
    </div>
    <div v-if="isOpen" class="accordion-content">
      <div class="row">
        <div
          class="col-lg-3 col-md-6"
          v-for="(item, index) in sitemaps"
          :key="index"
        >
          {{ item?.title }}
          <ul class="no-bullets">
            <li v-for="(link, index) in item.links" :key="index" class="mb-2">
              <a href="#">{{ link }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      sitemaps: [
        {
          title: "Home Loans",
          links: [
            "Home Loans",
            "Calculator",
            "Rates & Fees",
            "Savings",
            "Insurance",
            "Contact Us",
          ],
        },
        {
          title: "About Us",
          links: [
            "About Us",
            "Our Team",
            "Our Mission",
            "Our Vision",
            "Our Values",
            "Our History",
          ],
        },
        {
          title: "Services",
          links: [
            "Services",
            "Home Loans",
            "Personal Loans",
            "Business Loans",
            "Car Loans",
            "Insurance",
          ],
        },
        {
          title: "Contact Us",
          links: [
            "Contact Us",
            "Email Us",
            "Call Us",
            "Visit Us",
            "Feedback",
            "Complaints",
          ],
        },
      ],
    };
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped lang="scss">
.no-bullets {
  list-style-type: none; /* Removes the bullet points */
  padding: 0; /* Removes the default padding */
  margin: 0; /* Removes the default margin */
  margin-bottom: 5px;
}
</style>
