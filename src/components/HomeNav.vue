<template>
  <div class="nav">
    <div class="content">
      <h1>
        <i>THE F2E</i>
      </h1>

      <div class="serch-box">
        <font-awesome-icon icon="search" class="icon" />
        <h3>搜尋雲端硬碟</h3>
      </div>

      <div class="user-control-box">
        <font-awesome-icon :icon="['far','bell']" class="icon" />
        <font-awesome-icon :icon="['fas','cog']" class="icon" />
        <font-awesome-icon :icon="['far','user']" class="icon" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 80px;
  padding: 10px 25px;
  border-bottom: 2px solid #d8d8d8;
}
.content {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  > h1 {
    flex: 2;
  }
  i {
    color: #2b3e62;
    font-weight: 800;
    font-size: 45px;
  }
}
.serch-box {
  display: flex;
  flex: 6;
  align-items: center;
  cursor: pointer;
  > .icon {
    margin-right: 15px;
  }
}
.user-control-box {
  display: flex;
  flex: 1;
  justify-content: space-between;
}
.icon {
  cursor: pointer;
  font-size: 30px;
  transition: 0.2s;
  color: #7a7a7a;
}
.icon:hover {
  color: #3e68b7;
}
</style> 