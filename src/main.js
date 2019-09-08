import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/assets/index.css'

import { library } from '@fortawesome/fontawesome-svg-core'

import { faServer, faSearch, faCog, faFolderPlus, faFileUpload, faEllipsisH, faPlus, faChevronRight, faTimes, faCaretDown } from '@fortawesome/free-solid-svg-icons'

import { faFolder, faFileWord, faFilePowerpoint, faFilePdf, faFileImage, faFileExcel, faClock, faStar, faTrashAlt, faBell, faUser } from '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faFolder,
  faFileWord,
  faFilePowerpoint,
  faFilePdf,
  faFileImage,
  faFileExcel,
  faClock,
  faStar,
  faTrashAlt,
  faServer,
  faBell,
  faSearch,
  faCog,
  faFolderPlus,
  faFileUpload,
  faEllipsisH,
  faUser,
  faPlus,
  faChevronRight,
  faTimes,
  faCaretDown
)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
