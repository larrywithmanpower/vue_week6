<template>
  <div class="container">
    <div class="d-flex justify-content-center py-5">
      <div class="col-5">
        <h3 class="text-center">登入後台</h3>
        <form @submit.prevent="login()">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              v-model="user.username"
              required
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              v-model="user.password"
              required
            />
            <label for="floatingPassword">Password</label>
          </div>
          <button type="submit" class="btn btn-primary w-100 text-white mt-3">
            登入
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      const url = `${process.env.VUE_APP_URL}/admin/signin`;
      this.$http.post(url, this.user).then((res) => {
        if (res.data.success) {
          // eslint-disable-next-line no-alert
          alert('登入成功');
          // ! 解構取得token與expired
          const { token, expired } = res.data;
          // ! 存取token至cookie
          document.cookie = `myToken=${token}; expires=${new Date(expired)}`;
          this.$router.push('/admin/products');
        } else {
          // eslint-disable-next-line no-alert
          alert(res.data.message);
          this.$router.push('/login');
        }
      }).catch((err) => {
        console.log(err);
      });
    },
  },
};
</script>
