<template>
  <div class="aside">
    <div class="file-upload-container">
      <button class="file-upload-btn" @click="cardSwich(true)">
        <font-awesome-icon :icon="['fas','plus']" class="plus icon" />
        <h3>新增</h3>
      </button>

      <transition name="fade">
        <FileUploadCard @close="cardSwich" v-if="isOpenCard"></FileUploadCard>
      </transition>
    </div>

    <ControlList></ControlList>
  </div>
</template>

<script>
import ControlList from '../components/ControlList.vue'
import FileUploadCard from '../components/FileUploadCard.vue'

export default {
  components: {
    ControlList,
    FileUploadCard
  },
  data() {
    return {
      isOpenCard: false
    }
  },
  methods: {
    cardSwich(OnOff = false) {
      this.isOpenCard = OnOff
    }
  }
}
</script>

<style lang="scss" scoped>
.aside {
  width: 250px;
  height: 100%;
  box-shadow: 0px 2px 5px 1px #989898;
  z-index: 2;
}
.file-upload-container {
  position: relative;
  padding: 20px;
}
.file-upload-btn {
  width: 120px;
  height: 50px;
  position: relative;
  background: #3e68b7;
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  transition: 0.2s;
  .icon {
    font-size: 25px;
    color: white;
  }
  h3 {
    font-size: 20px;
    color: white;
  }
}
.file-upload-btn:hover {
  transform: scale(1.05);
}
</style> 