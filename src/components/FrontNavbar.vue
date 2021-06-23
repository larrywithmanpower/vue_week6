<template>
  <div class="d-flex justify-content-between align-items-center px-4" id="top">
    <h1 class="py-4 mb-0">
      <router-link to="/" class="link-secondary text-decoration-none fw-bold"
        >WearFoot</router-link
      >
    </h1>
    <div class="position-relative">
      <input type="text" placeholder="Search.." class="border-0" />
      <span class="prostion-absolute"></span>
    </div>
  </div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">第七周作業</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
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
            <router-link class="nav-link" to="/cart">購物車</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/products">登入後台</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
