<template>
  <Loading :active="isLoading"></Loading>
  <!-- 製作回到頂部的消失鈕 -->
  <transition>
    <a href="javascript:void(0)"
    class="link-primary position-fixed bottom-0 end-0 mb-3 me-3"
    @click="goTop()"
    v-show="scY > 350"
    >
    <!-- bootstrap icon vue 使用 -->
      <b-icon-arrow-up-square-fill width="40px" height="40px" />
    </a>
  </transition>

  <h3 class="text-center">產品列表</h3>
  <div class="row">
    <div class="col-md-3 mb-3">
      <div class="list-group">
        <a href="#"
        class="list-group-item list-group-item-action list-group-item-primary" aria-current="true"
        @click.prevent="filterCategory = ''" :class="{ active: filterCategory === '' }"
        >
          所有商品
        </a>
        <a href="#" class="list-group-item list-group-item-action list-group-item-primary"
        @click.prevent="filterCategory = 'V'" :class="{ active: filterCategory === 'V' }"
        >V</a>
        <a href="#"
        class="list-group-item list-group-item-action list-group-item-primary"
        @click.prevent="filterCategory = '靴子'" :class="{ active: filterCategory === '靴子' }"
        >靴子</a>
        <a href="#"
        class="list-group-item list-group-item-action list-group-item-primary"
        @click.prevent="filterCategory = '套裝'" :class="{ active: filterCategory === '套裝' }"
        >套裝</a>
      </div>
    </div>
    <div class="col-md-9">
      <div class="row">
        <!-- ! 注意：這邊是要去找已經篩選過的物件，也就是filterCategories -->
        <div class="col-md-4 mb-3" v-for="item in filterCategories" :key="item.id">
          <div class="card">
            <img :src="item.imageUrl" class="card-img-top img-fluid"
            alt="商品相片" />
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">
                {{ item.content }}
              </p>
              <div class="d-flex">
                <a href="#" class="btn btn-primary" @click.prevent="goToPage(item)"
                  >查看更多</a
                >
                <a
                  href="#"
                  class="btn btn-outline-danger ms-auto"
                  @click.prevent="addCart(item.id)"
                  >加入購物車</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .v-enter-active, .v-leave-active {
  transition: opacity .5s;
  }

  .v-enter-from, .v-leave-to {
    opacity: 0;
  }

  .v-enter-to, .v-leave-from {
    opacity: 1;
  }
</style>

<script>

export default {
  data() {
    return {
      products: [],
      carts: [],
      isLoading: false,
      scY: 0,
      scTimer: 0,
      filterCategory: '',
      categories: ['休閒', '套裝', '靴子', 'V'],
    };
  },
  computed: {
    filterCategories() {
      if (this.filterCategory) {
        return this.products.filter((item) => item.category.match(this.filterCategory));
      }
      return this.products;
    },
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
    // 能夠回到頂端
    goTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    },
    handleScroll() {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
  },
  created() {
    this.getProducts();
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
};
</script>
