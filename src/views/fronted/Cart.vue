<template>
  <Loading :active="isLoading"></Loading>
  <h2 class="text-center">我的購物車</h2>
  <div class="container">
    <div class="table-responsive col-7 mx-auto">
      <table class="table table-sm">
        <thead>
          <tr>
            <th></th>
            <th>品名</th>
            <th>數量</th>
            <th>單價</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in carts" :key="item.id">
            <td>
              <button
                class="btn btn-danger"
                type="button"
                @click="delCartItem(item.id)"
              >
                移除購物車
              </button>
            </td>
            <td>{{ item.product.title }}</td>
            <td>
              <div class="input-group input-group-sm">
                  <span class="input-group-text">$</span>
                  <input type="number"
                      class="form-control"
                      min="1"
                      v-model.number="item.qty"
                      @change="updateCart(item)">
                  <span class="input-group-text">{{ item.product.unit }}</span>
              </div>
            </td>
            <td>{{ item.product.price }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2" class="text-end"></td>
            <td>合計</td>
            <td>{{ finalTotal }}</td>
          </tr>
        </tfoot>
      </table>
      <button class="btn btn-outline-danger w-100"
      v-show="carts.length !== 0"
      @click="delAllCarts()"
      >清空購物車</button>
    </div>
  </div>
  <h2 class="text-center pt-5">送出訂單</h2>
  <section class="d-flex justify-content-center">
    <Form class="col-6" v-slot="{ errors }" @submit="onSubmit" ref="form">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <Field
          type="email"
          class="form-control"
          id="email"
          placeholder="請輸入Email"
          v-model="form.user.email"
          name="email"
          rules="email|required"
          :class="{ 'is-invalid': errors['email'] }"
        ></Field>
        <Error-message name="email" class="invalid-feedback"></Error-message>
      </div>
      <div class="mb-3">
        <label for="username" class="form-label">收件人姓名</label>
        <Field
          type="text"
          class="form-control"
          id="username"
          placeholder="請輸入姓名"
          v-model="form.user.name"
          name="姓名"
          rules="required"
          :class="{ 'is-invalid': errors['姓名'] }"
        ></Field>
        <Error-message name="姓名" class="invalid-feedback"></Error-message>
      </div>
      <div class="mb-3">
        <label for="tel" class="form-label">收件人電話</label>
        <Field
          type="tel"
          class="form-control"
          id="tel"
          placeholder="請輸入電話"
          v-model="form.user.tel"
          name="電話"
          :rules="isPhone"
          :class="{ 'is-invalid': errors['電話'] }"
        >
        </Field>
        <Error-message name="電話" class="invalid-feedback"></Error-message>
      </div>
      <div class="mb-3">
        <label for="address" class="form-label">收件人地址</label>
        <Field
          type="text"
          class="form-control"
          id="address"
          placeholder="請輸入地址"
          v-model="form.user.address"
          name="地址"
          rules="required"
          :class="{ 'is-invalid': errors['地址'] }"
        ></Field>
        <Error-message name="地址" class="invalid-feedback"></Error-message>
      </div>
      <div class="mb-3">
        <label for="leaveMsg" class="form-label">留言</label>
        <textarea
          type="text"
          class="form-control"
          id="leaveMsg"
          placeholder="你想說什麼??"
          rows="5"
          v-model="form.message"
        ></textarea>
      </div>
      <div class="d-flex justify-content-end">
        <button
          type="submit"
          class="btn btn-danger"
          :disabled="carts.length === 0"
        >
          送出訂單
        </button>
      </div>
    </Form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      carts: [],
      finalTotal: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  methods: {
    getCarts() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url).then((res) => {
        this.carts = res.data.data.carts;
        this.finalTotal = res.data.data.final_total;
        this.isLoading = false;
      });
    },
    updateCart(item) {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      const data = {
        product_id: item.id,
        qty: item.qty,
      };
      this.$http.put(url, { data }).then((res) => {
        if (res.data.success) {
          console.log(res.data.data.qty);
        }
      }).catch((err) => {
        console.log(err);
      });
    },
    delCartItem(id) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http.delete(url).then((res) => {
        if (res.data.success) {
          // eslint-disable-next-line no-alert
          alert(`成功刪除${id}商品`);
          this.isLoading = false;
          this.getCarts();
        } else {
          // eslint-disable-next-line no-alert
          alert('刪除失敗');
        }
      });
    },
    delAllCarts() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/carts`;
      this.$http.delete(url).then((res) => {
        if (res.data.success) {
          // eslint-disable-next-line no-alert
          alert('成功清空物車');
          this.isLoading = false;
          this.getCarts();
        } else {
          // eslint-disable-next-line no-alert
          alert('清空失敗');
          this.isLoading = false;
        }
      });
    },
    onSubmit() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/order`;
      const { user } = this.form;
      const { message } = this.form.message;
      // console.log(user);
      this.$http.post(url, { data: { user, message } })
        .then((res) => {
          if (res.data.success) {
            // console.log(res);
            // eslint-disable-next-line no-alert
            alert(res.data.message);
            //! VeeValidate內建函式
            this.$refs.form.resetForm();
            this.form.message = '';
            this.carts = [];
            this.finalTotal = '';
            this.isLoading = false;
          } else {
            // eslint-disable-next-line no-alert
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '需要正確的手機號碼';
    },
  },
  created() {
    this.getCarts();
  },
};
</script>
