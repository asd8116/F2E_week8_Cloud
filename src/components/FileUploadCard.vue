<template>
  <div class="card">
    <font-awesome-icon
      :icon="['fas','times']"
      class="icon close-btn"
      @click="$emit('close',false)"
    />

    <ul>
      <li>
        <font-awesome-icon :icon="['fas','folder-plus']" class="icon" />
        <h3>新增資料夾</h3>
      </li>
      <li>
        <font-awesome-icon :icon="['fas','file-upload']" class="icon" />
        <h3>上傳檔案</h3>
      </li>
      <li>
        <font-awesome-icon :icon="['far','folder']" class="icon" />
        <h3>上傳資料夾</h3>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.card {
  box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.2);
  position: absolute;
  left: 20px;
  top: 20px;
  width: 300px;
  background: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  li {
    cursor: pointer;
    width: 100%;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    .icon {
      margin-right: 10px;
    }
  }
  li:nth-child(1) {
    border-bottom: 2px solid #d8d8d8;
  }
  li:hover {
    background: #f7f8fa;
    .icon {
      color: #3e68b7;
    }
    h3 {
      color: #3e68b7;
    }
  }
}
.icon {
  width: 20px;
  height: 20px;
  font-size: 25px;
}
.close-btn {
  cursor: pointer;
  margin: 10px 10px 0px 5px;
}
.close-btn:hover {
  transform: scale(1.1);
}
</style> 