<template>
  <transition name="fade">
    <a
      id="pagetop"
      class="position-fixed end-0 bottom-0"
      v-show="scY > 150"
      href="#top"
    >
      <font-awesome-icon :icon="['fas', 'angle-double-up']" size="3x" />
    </a>
  </transition>
</template>

<style scoped>
.bottom-right {
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
}
</style>

<script>
export default {
  data() {
    return {
      scTimer: 0,
      scY: 0,
    };
  },
  methods: {
    handleScroll() {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smoot',
      });
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
};
</script>
