<template>
  <Loading :active="isLoading"></Loading>
  <h3 class="text-center pt-3 position-relative">
    產品列表
    <button
    class="btn btn-sm btn-primary position-absolute end-0"
    data-bs-toggle="modal" data-bs-target="#productModal"
    @click="openModal('new')"
    >新增商品</button>
  </h3>
  <div class="container">
    <div class="table-responsive">
      <table class="table align-middle text-center">
        <thead>
          <tr>
            <th width="15%">圖片</th>
            <th width="30%">品名</th>
            <th width="15%">價格</th>
            <th width="15%">啟用</th>
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
            <td
            :class="[{ 'text-success': item.is_enabled } , { 'text-danger': !item.is_enabled }]"
            >{{ item.is_enabled ? '啟用' : '未啟用' }}</td>
            <td>
              <div class="btn-group">
                <button class="btn btn-sm btn-secondary"
                @click="openModal('edit', item)"
                >編輯商品</button>
                <button
                class="btn btn-sm btn-outline-danger"
                @click="openModal('delete', item)"
                >刪除商品</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- pagination -->
    <div class="d-flex justify-content-center">
      <pagination
      :page="pagination"
      @get-page="getProducts"
      ></pagination>
    </div>
  </div>
  <!-- product modal -->
  <product-modal
  ref="productModal"
  id="productModal"
  :temp-product="tempProduct"
  :is-new="isNew"
  @update-product="updateProduct"
  ></product-modal>
  <!-- del product modal -->
  <del-modal
  id="delModal"
  ref="delModal"
  :item="tempProduct"
  @delete="deleteProduct"></del-modal>
</template>

<script>
import productModal from '@/components/ProductModal.vue';
import delModal from '@/components/DelModal.vue';
import pagination from '@/components/Pagination.vue';

export default {
  props: ['token'],
  data() {
    return {
      products: [],
      tempProduct: {
        imagesUrl: [],
      },
      pagination: {},
      isLoading: false,
      isNew: false,
    };
  },
  components: {
    productModal,
    delModal,
    pagination,
  },
  methods: {
    getProducts(page = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
          // console.log(this.products);
          this.isLoading = false;
        } else {
          // eslint-disable-next-line no-alert
          alert(res.data.message);
        }
      });
    },
    openModal(isNew, item) {
      switch (isNew) {
        case 'new':
          this.tempProduct = {
            imagesUrl: [],
          };
          this.isNew = true;
          this.$refs.productModal.showModal();
          break;
        case 'edit':
          this.tempProduct = {
            imagesUrl: [],
            ...item,
          };
          this.isNew = false;
          this.$refs.productModal.showModal();
          break;
        case 'delete':
          this.tempProduct = { ...item };
          this.$refs.delModal.showModal();
          break;
        default:
      }
    },
    updateProduct(tempProduct) {
      // ! 新增
      if (this.isNew === true) {
        console.log('新增', tempProduct);
        const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/product`;
        this.$http.post(url, { data: tempProduct }).then((res) => {
          if (res.data.success) {
            // eslint-disable-next-line no-alert
            alert(res.data.message);
            this.getProducts();
            console.log(res);
            this.$refs.productModal.closeModal();
          } else {
            // eslint-disable-next-line no-alert
            alert(res.data.message);
          }
        }).catch((err) => {
          console.log(err);
        });
      } else {
        // ! 編輯
        const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/product/${tempProduct.id}`;
        this.$http.put(url, { data: tempProduct }).then((res) => {
          if (res.data.success) {
            // eslint-disable-next-line no-alert
            alert(res.data.message);
            this.getProducts();
            this.$refs.productModal.closeModal();
          } else {
            // eslint-disable-next-line no-alert
            alert(res.data.message);
          }
        }).catch((err) => {
          console.log(err);
        });
      }
    },
    deleteProduct(tempProduct) {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/product/${tempProduct.id}`;
      this.$http.delete(url).then((res) => {
        if (res.data.success) {
          // eslint-disable-next-line no-alert
          alert(res.data.message);
          this.getProducts();
          this.$refs.delModal.closeModal();
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
