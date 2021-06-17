<template>
  <Loading :active="isLoading"></Loading>
  <h3 class="text-center">產品列表</h3>
  <div class="row">
    <div class="col-md-4 mb-3" v-for="item in products" :key="item.id">
      <div class="card">
        <img :src="item.imageUrl" class="card-img-top" alt="商品相片" />
        <div class="card-body">
          <h5 class="card-title">{{ item.title }}</h5>
          <p class="card-text">
            {{ item.content }}
          </p>
          <div class="d-flex">
            <a href="#" class="btn btn-primary" @click.prevent="goToPage(item)"
              >查看更多</a
            >
            <a href="#" class="btn btn-outline-danger ms-auto"
            @click.prevent="addCart(item.id)"
            >加入購物車</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      carts: [],
      isLoading: false,
    };
  },
  methods: {
    getProducts() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.products = res.data.products;
          this.isLoading = false;
        }
      });
    },
    goToPage(item) {
      this.$router.push(`/product/${item.id}`);
    },
    addCart(id, qty = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`;
      const data = {
        product_id: id,
        qty,
      };
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
  created() {
    this.getProducts();
  },
};
</script>
