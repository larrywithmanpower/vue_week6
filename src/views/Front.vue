<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
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
            <router-link class="nav-link" to="/">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">產品頁</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin">後台</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="bg-image"></div>
  <div class="container py-5">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  .bg-image {
    background-image: url(https://images.unsplash.com/photo-1569664665343-eb9b3948bdbb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fHdlYXJpbmclMjBzaG9lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60);
    background-size: cover;
    background-position: center center;
    height: 300px;
  }
</style>
