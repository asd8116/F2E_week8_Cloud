<template>
  <div class="home">
    <home-nav></home-nav>

    <div class="main-content-container">
      <home-aside></home-aside>

      <Content></Content>
    </div>
  </div>
</template>

<script>
import Content from '@/components/Content.vue'
import HomeAside from '@/components/HomeAside.vue'
import HomeNav from '@/components/HomeNav.vue'

export default {
  components: {
    Content,
    HomeAside,
    HomeNav
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.main-content-container {
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
