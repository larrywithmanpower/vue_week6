<template>
  <h3>產品列表</h3>
  <div class="table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th scope="col" width="10%">#</th>
          <th scope="col" width="30%">商品名稱</th>
          <th scope="col" width="30%">商品價格</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item) in products" :key="item.id">
          <td>
            <img :src="item.imageUrl" alt="商品照片" class="img-fluid">
          </td>
          <td>{{ item.title }}</td>
          <td >NT$ {{ item.price }}元</td>
          <td class="text-center">
            <div class="btn-group">
              <button type="button" class="btn btn-outline-secondary"
              @click="goToPage(item)">查看更多</button>
              <button class="btn btn-outline-success">加入購物車</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/products`;
      this.$http.get(url).then((res) => {
        this.products = res.data.products;
        // console.log(this.products);
      });
    },
    goToPage(item) {
      this.$router.push(`/product/${item.id}`);
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
