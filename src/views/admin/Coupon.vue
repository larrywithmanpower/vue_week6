<template>
  <div>
    <Loading :active="isLoading"></Loading>
    <button
    type="button"
    class="btn btn-primary my-3"
    @click="openModal('new')"
    >
    新增優惠劵
    </button>
    <div class="table-responsive">
      <table class="table align-middle text-center">
        <thead>
          <tr>
            <th width="20%">方案</th>
            <th width="15%">折扣碼</th>
            <th width="10%">折扣</th>
            <th width="20%">期限</th>
            <th width="10%">是否啟用</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="coupon in coupons" :key="coupon.id">
            <td>{{ coupon.title }}</td>
            <td>{{ coupon.code }}</td>
            <td>{{ coupon.percent }} %</td>
            <td>{{ new Date(coupon.due_date * 1000).toLocaleDateString() }}</td>
            <td>
              <span :class="{ 'text-success': coupon.is_enabled }"
              v-if="coupon.is_enabled">啟用</span>
              <span :class="{ 'text-danger': !coupon.is_enabled }"
              v-if="!coupon.is_enabled">未啟用</span>
            </td>
            <td>
              <div class="btn-group">
                <button type="button"
                class="btn btn-sm btn-outline-primary"
                @click="openModal('edit', coupon)"
                >編輯</button>
                <button type="button"
                class="btn btn-sm btn-outline-danger"
                @click="openModal('delete', coupon)"
                >刪除</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <couponModal
  id="couponModal"
  ref="couponModal"
  :is-new="isNew"
  :coupon="tempCoupon"
  @update-coupon="updateCoupon"
  ></couponModal>

  <!-- del product modal -->
  <del-modal
  id="delModal"
  ref="delModal"
  :item="tempCoupon"
  @delete="deleteCoupon"></del-modal>
</template>

<script>
import couponModal from '@/components/CouponModal.vue';
import delModal from '@/components/DelModal.vue';

export default {
  data() {
    return {
      isLoading: false,
      coupons: [],
      isNew: false,
      tempCoupon: {},
    };
  },
  components: {
    couponModal,
    delModal,
  },
  created() {
    this.getCoupons();
  },
  methods: {
    getCoupons(page = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          console.log(res);
          this.coupons = res.data.coupons;
          this.isLoading = false;
        } else {
          // eslint-disable-next-line no-alert
          alert(res.data.messages.join(','));
        }
      }).catch((err) => {
        console.log(err);
      });
    },
    openModal(isNew, coupon) {
      switch (isNew) {
        case 'new':
          this.isNew = true;
          this.tempCoupon = {
            due_date: Math.floor(Date.now() / 1000),
            is_enabled: 1,
          };
          this.$refs.couponModal.showModal();
          break;
        case 'edit':
          this.isNew = false;
          this.tempCoupon = {
            ...coupon,
          };
          this.$refs.couponModal.showModal();
          break;
        case 'delete':
          this.tempCoupon = { ...coupon };
          this.$refs.delModal.showModal();
          break;
        default:
          break;
      }
    },
    updateCoupon(tempCoupon) {
      // ! 新增
      if (this.isNew === true) {
        const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/coupon`;
        this.$http.post(url, { data: tempCoupon }).then((res) => {
          if (res.data.success) {
            this.getCoupons();
            // eslint-disable-next-line no-alert
            alert(res.data.message);
            console.log(res);
            this.$refs.couponModal.closeModal();
          } else {
            // eslint-disable-next-line no-alert
            alert(res.data.message);
          }
        }).catch((err) => {
          console.log(err);
        });
      } else {
        // ! 編輯
        const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/coupon/${tempCoupon.id}`;
        this.$http.put(url, { data: tempCoupon }).then((res) => {
          if (res.data.success) {
            // eslint-disable-next-line no-alert
            alert(res.data.message);
            this.getCoupons();
            this.$refs.couponModal.closeModal();
          } else {
            // eslint-disable-next-line no-alert
            alert(res.data.message);
          }
        }).catch((err) => {
          console.log(err);
        });
      }
    },
    deleteCoupon(tempCoupon) {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/admin/product/${tempCoupon.id}`;
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
};
</script>
