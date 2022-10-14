<template>
    <div  class=""
    style="z-index: 1500">
    <Toast v-for="(msg, key) in messages" :key="key"
      :msg="msg"
    />
  </div>

</template>
<style lang="scss" scoped>

  .btn-close{
    color: #fff;
  }
</style>
<script>
import Toast from '@/components/Toast.vue'
export default {
  components: { Toast },
  data () {
    return {
      messages: []
    }
  },
  methods: {
    toastShow () {
      setTimeout(() => {
        this.messages.shift()
      }, 2000)
    },
    clearToast (index) {
      this.messages.splice(index, 1)
    }
  },
  inject: ['emitter'],
  mounted () {
    this.emitter.on('push-message', (message) => {
      const { style = 'success', title, content } = message
      this.messages.push({ style, title, content })
    })
  }
}
</script>
