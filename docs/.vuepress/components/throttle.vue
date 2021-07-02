<template>
  <div class="">
    <div class="throttle" @click="$hks.throttle(btnAClick, 500)">
      露从今夜白
    </div>
    <div class="throttle" @click="btnBClick">
      月是故乡明
    </div>
  </div>
</template>

<script>
export default {
  name: "throttle",
  methods: {
    btnAClick() {
      console.log('btnClick');
    },
    btnBClick() {
      // 此处用法为在js中调用，需要写this.$hks.throttle()， 表示在500毫秒之内， 只能触发一次
      this.$hks.throttle(this.toNext, 500)
    },
    toNext() {
      console.log('btnBClick');
    }
  }
}
</script>

<style scoped>

</style>