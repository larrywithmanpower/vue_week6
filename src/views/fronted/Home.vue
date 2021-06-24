<template>
  <div class="bg-image">
  </div>
  <div class="container py-2">
  </div>
</template>

<style lang="scss">
  .bg-image {
    background-image: url(https://images.unsplash.com/photo-1523754182607-2ff5903ec1e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTczfHxzaG9lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60);
    background-size: cover;
    height: 500px;
  }
</style>

<script>
export default {
  data() {
    return {
      products: [],
      carts: [],
    };
  },
};
</script>
