<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">第六周作業</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarNav" aria-controls="navbarNav"
      aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/products">後台產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">前台首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login"
            @click="logout()"
            >登出</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container">
    <router-view v-if="checkSuccess"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkSuccess: false,
    };
  },
  methods: {
    checkLogin() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, '$1');

      if (token) {
        this.$http.defaults.headers.common.Authorization = `${token}`;
        const url = `${process.env.VUE_APP_URL}/api/user/check`;
        this.$http.post(url).then((res) => {
          if (res.data.success) {
            this.checkSuccess = true;
          } else {
            // eslint-disable-next-line no-alert
            alert(res.data.message);
            this.$router.push('/login');
          }
        }).catch((err) => {
          console.log(err);
        });
      } else {
        // eslint-disable-next-line no-alert
        alert('未登入');
        this.$router.push('/login');
      }
    },
    logout() {
      const url = `${process.env.VUE_APP_URL}/logout`;
      this.$http.post(url).then((res) => {
        if (res.data.success) {
          document.cookie = 'myToken=; expires=;';
          // eslint-disable-next-line no-alert
          alert('登出成功');
          this.$outer.push('/login');
        }
      });
    },
  },
  created() {
    this.checkLogin();
  },
};
</script>
