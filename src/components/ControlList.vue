<template>
  <div class="control-list-container">
    <ul class="select-list">
      <li
        v-for="item in list"
        @click="btnCheck(item.title)"
        :class="{'btn-active':btnActive===item.title?true:false}"
        :key="item.id"
        class="list-style"
      >
        <font-awesome-icon :icon="item.icon" class="icon" />
        <h3>{{item.title}}</h3>
      </li>
    </ul>

    <div class="drive-size-box">
      <div class="list-style">
        <font-awesome-icon :icon="['fas','server']" class="icon" />
        <h3>儲存空間</h3>
      </div>

      <h3>目前使用量 : 19.4 GB</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: ' 我的雲端硬碟 ',
          icon: ['far', 'folder']
        },
        {
          title: ' 近期存取 ',
          icon: ['far', 'clock']
        },
        {
          title: ' 已加星號 ',
          icon: ['far', 'star']
        },
        {
          title: ' 垃圾桶 ',
          icon: ['far', 'trash-alt']
        }
      ],
      btnActive: ' 我的雲端硬碟 '
    }
  },
  methods: {
    btnCheck(name = '') {
      this.btnActive = name
    }
  }
}
</script>

<style lang="scss" scoped>
.control-list-container {
  width: 100%;
}
.list-style {
  padding: 10px 20px;
  display: flex;
  align-items: center;
  .icon {
    margin-right: 10px;
    font-size: 20px;
    width: 20px;
    height: 20px;
  }
}
.select-list {
  border-bottom: 2px solid #d8d8d8;
  li {
    cursor: pointer;
    transition: 0.2s;
  }
  .icon {
    margin-right: 10px;
    font-size: 20px;
    width: 20px;
    height: 20px;
  }
  li:hover {
    .icon {
      color: #3e68b7;
    }
    h3 {
      color: #3e68b7;
    }
  }
}
.btn-active {
  .icon {
    color: #3e68b7;
  }
  h3 {
    color: #3e68b7;
  }
}
.drive-size-box {
  width: 100%;
  h3 {
    padding: 0px 20px;
  }
}
</style> 