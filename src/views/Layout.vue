<template>
  <front-navbar></front-navbar>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import FrontNavbar from '@/components/FrontNavbar.vue';

export default {

  components: {
    FrontNavbar,
  },
};
</script>
