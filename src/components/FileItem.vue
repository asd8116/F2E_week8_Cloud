<template>
  <li class="item">
    <div class="file-name">
      <font-awesome-icon
        :icon="fileTypecCheck.icon"
        class="icon"
        :style="{'color':fileTypecCheck.color}"
      />
      <h3>{{fileName}}</h3>
    </div>

    <span class="owner">
      <h3>{{fileOwner}}</h3>
    </span>

    <span class="time">
      <h3>{{lastChangeTime}}</h3>
    </span>

    <span class="file-size">
      <h3>{{fileSizeCalc}}</h3>
    </span>

    <span class="other">
      <font-awesome-icon :icon="['fas','ellipsis-h']" class="icon" />
    </span>
  </li>
</template>

<script>
export default {
  props: {
    fileName: {
      type: String,
      default: 'dsfsdg'
    },
    fileType: {
      type: String,
      default: 'folder'
    },
    fileOwner: {
      type: String,
      default: ' 我 '
    },
    lastChangeTime: {
      type: String,
      default: ' 剛剛 '
    },
    fileSize: {
      type: Number,
      default: 0
    }
  },
  computed: {
    fileTypecCheck() {
      let icon = []
      let color = '#3E68B7'
      switch (this.fileType) {
        case 'folder':
          icon = ['far', 'folder']
          color = '#7B7B7B'
          break
        case 'docx':
          icon = ['far', 'file-word']
          color = '#3E68B7'
          break
        case 'img':
          icon = ['far', 'file-image']
          color = '#e3b600'
          break
        case 'xlsx':
          icon = ['far', 'file-excel']
          color = '#059100'
          break
        case 'pdf':
          icon = ['far', 'file-pdf']
          color = '#ff0808'
          break
      }
      return {
        icon,
        color
      }
    },
    fileSizeCalc() {
      let size = this.fileSize
      let str = ''
      if (size >= 1000 && size < 1000000) {
        str = (size / 1000).toFixed(1) + 'MB'
      } else if (size >= 1000000) {
        str = (size / 1000000).toFixed(1) + 'GB'
      } else {
        str = size + 'KB'
      }
      return str
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  cursor: pointer;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #d8d8d8;
  transition: 0.2s;
  > * {
    margin: 15px 15px;
  }
}
.item:hover {
  background-color: rgb(224, 224, 224);
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