<template>
  <Loading :active="isLoading"></Loading>
  <h3 class="text-center pt-3 position-relative">
    產品列表
    <button class="btn btn-sm btn-primary position-absolute end-0">新增商品</button>
  </h3>
  <div class="container">
    <div class="table-responsive">
    <table class="table align-middle text-center">
      <thead>
        <tr>
          <th width="20%">圖片</th>
          <th width="30%">品名</th>
          <th width="15%">價格</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>
            <img :src="item.imageUrl" alt="商品圖" class="img-fluid">
          </td>
          <td>{{ item.title }}</td>
          <td>{{ item.price }}</td>
          <td>
            <div class="btn-group">
              <button class="btn btn-sm btn-secondary">編輯商品</button>
              <button class="btn btn-sm btn-outline-danger">刪除商品</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ['token'],
  data() {
    return {
      products: [],
      isLoading: false,
    };
  },
  methods: {
    getProducts(page = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/products?page:${page}`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.products = res.data.products;
          this.isLoading = false;
        } else {
          // eslint-disable-next-line no-alert
          alert(res.data.message);
        }
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
