<template>
  <div class="container py-5">
    <h2 class="fw-bold">{{ tempProduct.title }}</h2>
    <div class="row">
      <div class="col-md-8 mb-3">
        <p class="h4">{{ tempProduct.content }}</p>
        <img :src="tempProduct.imageUrl" class="img-fluid" alt="商品圖片">
      </div>
      <div class="col-md-4">
        <p class=""><del>原價 NT$ {{ tempProduct.origin_price }} 元</del></p>
        <p class="text-danger h3"><strong>特價 NT$ {{ tempProduct.price }} 元</strong></p>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: '',
      tempProduct: {},
    };
  },
  created() {
    // get id
    const { id } = this.$route.params;
    this.id = id;
    this.getSingleProduct();
  },
  methods: {
    getSingleProduct() {
      // get single product
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.$http.get(url).then((res) => {
        this.tempProduct = res.data.product;
        console.log(this.tempProduct);
      });
    },
  },
};
</script>
