import Vue from 'vue'
import Vuex from 'vuex'
import { type } from 'os'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fileList: [
      {
        name: ' 新增資料夾',
        type: 'folder',
        owner: ' 我',
        changeTime: ' 剛剛',
        size: 2000000 //KB
      },
      {
        name: 'Hello World.docx',
        type: 'docx',
        owner: ' 我',
        changeTime: ' 剛剛',
        size: 540 //KB
      },
      {
        name: 'Hello World.jpg',
        type: 'img',
        owner: ' 我',
        changeTime: '1 小時前',
        size: 2000 //KB
      },
      {
        name: 'Hello World.xlsx',
        type: 'xlsx',
        owner: ' 我',
        changeTime: '1 天前',
        size: 1200 //KB
      },
      {
        name: 'Hello World.pdf',
        type: 'pdf',
        owner: ' 我',
        changeTime: '2019 年 10 月 31 日',
        size: 10000 //KB
      },
      {
        name: 'Hello World.docx',
        type: 'docx',
        owner: ' 我',
        changeTime: ' 剛剛',
        size: 540 //KB
      },
      {
        name: 'Hello World.jpg',
        type: 'img',
        owner: ' 我',
        changeTime: '1 小時前',
        size: 2000 //KB
      },
      {
        name: 'Hello World.xlsx',
        type: 'xlsx',
        owner: ' 我',
        changeTime: '1 天前',
        size: 1200 //KB
      },
      {
        name: 'Hello World.pdf',
        type: 'pdf',
        owner: ' 我',
        changeTime: '2019 年 10 月 31 日',
        size: 10000 //KB
      }
    ]
  },
  mutations: {},
  actions: {}
})
