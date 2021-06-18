<template>
  <ScrollTopComponent>
      <a class="btn btn-light">
        <font-awesome-icon :icon="['fas', 'angle-double-up']" size="3x" />
      </a>
  </ScrollTopComponent>
</template>

<script>
import ScrollTopComponent from './ScrollTopComponent.vue';

export default {
  components: {
    ScrollTopComponent,
  },
};
</script>
