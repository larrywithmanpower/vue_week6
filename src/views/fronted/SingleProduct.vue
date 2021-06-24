<template>
  <Loading :active="isLoading"></Loading>
  <front-navbar></front-navbar>
  <div class="container py-3">
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
        <div class="input-group mb-3">
            <input type="number" class="form-control" min="1" v-model.number="qty"
            >
            <button class="btn btn-danger" type="button" id="button-addon2"
            @click="addCart(tempProduct.id)"
            >
                加入購物車
            </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FrontNavbar from '@/components/FrontNavbar.vue';

export default {
  data() {
    return {
      id: '',
      tempProduct: {},
      qty: 1,
      isLoading: false,
    };
  },
  components: {
    FrontNavbar,
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
      this.isLoading = true;
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.tempProduct = res.data.product;
          this.isLoading = false;
        }
      });
    },
    addCart(id) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`;
      const data = {
        product_id: id,
        qty: this.qty,
      };
      console.log(data);
      this.$http.post(url, { data }).then((res) => {
        if (res.data.success) {
          // eslint-disable-next-line no-alert
          alert(`${id}成功加入購物車`);
          this.isLoading = false;
        } else {
          // eslint-disable-next-line no-alert
          alert('購物車加入失敗');
        }
      });
    },
  },
};
</script>
