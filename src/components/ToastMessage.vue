<template>
  <div class="toast-container position-absolute pe-3 pt-3 top-0 end-0"
  style="z-index: 1500">
    <Toast
    v-for="(msg, index) in messages" :key="index"
    :msg="msg"
    ></Toast>
  </div>
</template>

<script>
import Toast from '@/components/Toast.vue';

export default {
  components: {
    Toast,
  },
  data() {
    return {
      messages: [],
    };
  },
  inject: ['emitter'],
  mounted() {
    this.emitter.on('push-message', (message) => {
      const { style = 'success', title, content } = message;
      this.messages.push({ style, title, content });
    });
  },
};
</script>
