<template>
  <div class="container">
    <div class="title">
      <h2>我的雲端硬碟</h2>
    </div>

    <div class="file-list-container">
      <ul>
        <li class="item">
          <div class="file-name">
            <h3>名稱</h3>
            <font-awesome-icon :icon="['fas','caret-down']" class="icon" />
          </div>
          <span class="owner">
            <h3>擁有者</h3>
          </span>
          <span class="time">
            <h3>最後修改時間</h3>
          </span>
          <span class="file-size">
            <h3>檔案大小</h3>
          </span>
          <span class="other"></span>
        </li>

        <file-item
          v-for="item in fileData"
          :key="item.id"
          :fileName="item.name"
          :fileType="item.type"
          :fileOwner="item.owner"
          :lastChangeTime="item.changeTime"
          :fileSize="item.size"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import FileItem from '@/components/FileItem.vue'

export default {
  components: {
    FileItem
  },
  computed: {
    fileData() {
      return this.$store.state.fileList
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.title {
  width: 100%;
  padding: 10px 25px;
  h2 {
    font-size: 30px;
  }
}
.file-list-container {
  width: 100%;
  height: 100%;
  padding: 20px 30px;
  background: rgba($color: #fcfcfc, $alpha: 1);
  overflow: auto;
}
.item {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #d8d8d8;
  > * {
    margin: 15px 15px;
  }
}
.file-name {
  display: flex;
  align-items: center;
  flex: 10;
  .icon {
    font-size: 25px;
    margin-right: 10px;
  }
}
.owner {
  flex: 4;
}
.time {
  flex: 6;
}
.file-size {
  flex: 3;
}
.other {
  flex: 1;
}
</style> 