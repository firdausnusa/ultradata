<template>
  <div class="home">
    <div class="container">
      <div class="row" style="width: 100%">
        <div class="col-sm-12 col-lg-8 pb-2">
          <PromotionalCampaign />
        </div>
        <div class="col-sm-12 col-lg-4 pb-2">
          <BannerCarousel />
        </div>
      </div>
    </div>
  </div>
  <CommunityView />
  <SiteMapView />
</template>

<script>
import BannerCarousel from "../components/BannerCarousel.vue";
import PromotionalCampaign from "../components/PromotionalCampaign.vue";
import CommunityView from "../components/community/CommunityView.vue";
import SiteMapView from "../components/SiteMapView.vue";

export default {
  components: {
    BannerCarousel,
    PromotionalCampaign,
    CommunityView,
    SiteMapView,
  },
};
</script>

<style scoped lang="scss">
.home {
  font-family: Arial, sans-serif;
  color: #333;
}
</style>
