(function(e){function t(t){for(var i,c,o=t[0],r=t[1],l=t[2],u=0,d=[];u<o.length;u++)c=o[u],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);f&&f(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,o=1;o<n.length;o++){var r=n[o];0!==a[r]&&(i=!1)}i&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var i={},a={app:0},s=[];function c(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=i,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(n,i,function(t){return e[t]}.bind(null,i));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/F2E_week8_Cloud/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var f=r;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1e3c":function(e,t,n){"use strict";var i=n("61d7"),a=n.n(i);a.a},"56bc":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],c=(n("5c0b"),n("2877")),o={},r=Object(c["a"])(o,a,s,!1,null,null,null),l=r.exports,f=n("8c4f"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("home-nav"),n("div",{staticClass:"main-content-container"},[n("home-aside"),n("Content")],1)],1)},d=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[e._m(0),n("div",{staticClass:"file-list-container"},[n("ul",[n("li",{staticClass:"item"},[n("div",{staticClass:"file-name"},[n("h3",[e._v("名稱")]),n("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fas","caret-down"]}})],1),e._m(1),e._m(2),e._m(3),n("span",{staticClass:"other"})]),e._l(e.fileData,(function(e){return n("file-item",{key:e.id,attrs:{fileName:e.name,fileType:e.type,fileOwner:e.owner,lastChangeTime:e.changeTime,fileSize:e.size}})}))],2)])])},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title"},[n("h2",[e._v("我的雲端硬碟")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"owner"},[n("h3",[e._v("擁有者")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"time"},[n("h3",[e._v("最後修改時間")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"file-size"},[n("h3",[e._v("檔案大小")])])}],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"item"},[n("div",{staticClass:"file-name"},[n("font-awesome-icon",{staticClass:"icon",style:{color:e.fileTypecCheck.color},attrs:{icon:e.fileTypecCheck.icon}}),n("h3",[e._v(e._s(e.fileName))])],1),n("span",{staticClass:"owner"},[n("h3",[e._v(e._s(e.fileOwner))])]),n("span",{staticClass:"time"},[n("h3",[e._v(e._s(e.lastChangeTime))])]),n("span",{staticClass:"file-size"},[n("h3",[e._v(e._s(e.fileSizeCalc))])]),n("span",{staticClass:"other"},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fas","ellipsis-h"]}})],1)])},h=[],b=(n("c5f6"),{props:{fileName:{type:String,default:"dsfsdg"},fileType:{type:String,default:"folder"},fileOwner:{type:String,default:" 我 "},lastChangeTime:{type:String,default:" 剛剛 "},fileSize:{type:Number,default:0}},computed:{fileTypecCheck:function(){var e=[],t="#3E68B7";switch(this.fileType){case"folder":e=["far","folder"],t="#7B7B7B";break;case"docx":e=["far","file-word"],t="#3E68B7";break;case"img":e=["far","file-image"],t="#e3b600";break;case"xlsx":e=["far","file-excel"],t="#059100";break;case"pdf":e=["far","file-pdf"],t="#ff0808";break}return{icon:e,color:t}},fileSizeCalc:function(){var e=this.fileSize,t="";return t=e>=1e3&&e<1e6?(e/1e3).toFixed(1)+"MB":e>=1e6?(e/1e6).toFixed(1)+"GB":e+"KB",t}}}),_=b,C=(n("7f2a"),Object(c["a"])(_,v,h,!1,null,"3d5e1006",null)),w=C.exports,y={components:{FileItem:w},computed:{fileData:function(){return this.$store.state.fileList}}},g=y,x=(n("6018"),Object(c["a"])(g,p,m,!1,null,"7bc9a308",null)),O=x.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"aside"},[n("div",{staticClass:"file-upload-container"},[n("button",{staticClass:"file-upload-btn",on:{click:function(t){return e.cardSwich(!0)}}},[n("font-awesome-icon",{staticClass:"plus icon",attrs:{icon:["fas","plus"]}}),n("h3",[e._v("新增")])],1),n("transition",{attrs:{name:"fade"}},[e.isOpenCard?n("FileUploadCard",{on:{close:e.cardSwich}}):e._e()],1)],1),n("ControlList")],1)},j=[],k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"control-list-container"},[n("ul",{staticClass:"select-list"},e._l(e.list,(function(t){return n("li",{key:t.id,staticClass:"list-style",class:{"btn-active":e.btnActive===t.title},on:{click:function(n){return e.btnCheck(t.title)}}},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:t.icon}}),n("h3",[e._v(e._s(t.title))])],1)})),0),n("div",{staticClass:"drive-size-box"},[n("div",{staticClass:"list-style"},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fas","server"]}}),n("h3",[e._v("儲存空間")])],1),n("h3",[e._v("目前使用量 : 19.4 GB")])])])},z=[],E={data:function(){return{list:[{title:" 我的雲端硬碟 ",icon:["far","folder"]},{title:" 近期存取 ",icon:["far","clock"]},{title:" 已加星號 ",icon:["far","star"]},{title:" 垃圾桶 ",icon:["far","trash-alt"]}],btnActive:" 我的雲端硬碟 "}},methods:{btnCheck:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.btnActive=e}}},S=E,$=(n("fc95"),Object(c["a"])(S,k,z,!1,null,"03320867",null)),H=$.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card"},[n("font-awesome-icon",{staticClass:"icon close-btn",attrs:{icon:["fas","times"]},on:{click:function(t){return e.$emit("close",!1)}}}),n("ul",[n("li",[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fas","folder-plus"]}}),n("h3",[e._v("新增資料夾")])],1),n("li",[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fas","file-upload"]}}),n("h3",[e._v("上傳檔案")])],1),n("li",[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:["far","folder"]}}),n("h3",[e._v("上傳資料夾")])],1)])],1)},W=[],F=(n("1e3c"),{}),P=Object(c["a"])(F,B,W,!1,null,"23397268",null),M=P.exports,N={components:{ControlList:H,FileUploadCard:M},data:function(){return{isOpenCard:!1}},methods:{cardSwich:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.isOpenCard=e}}},A=N,L=(n("ce9b"),Object(c["a"])(A,T,j,!1,null,"cbd4efb4",null)),D=L.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav"},[n("div",{staticClass:"content"},[e._m(0),n("div",{staticClass:"serch-box"},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:"search"}}),n("h3",[e._v("搜尋雲端硬碟")])],1),n("div",{staticClass:"user-control-box"},[n("font-awesome-icon",{staticClass:"icon",attrs:{icon:["far","bell"]}}),n("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fas","cog"]}}),n("font-awesome-icon",{staticClass:"icon",attrs:{icon:["far","user"]}})],1)])])},J=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[n("i",[e._v("THE F2E")])])}],U={},I=U,K=(n("d6c8"),Object(c["a"])(I,G,J,!1,null,"4ead7950",null)),q=K.exports,Q={components:{Content:O,HomeAside:D,HomeNav:q}},R=Q,V=(n("8981"),Object(c["a"])(R,u,d,!1,null,"64aadf82",null)),X=V.exports;i["a"].use(f["a"]);var Y=new f["a"]({routes:[{path:"/",name:"home",component:X}]}),Z=n("2f62");n("3c43");i["a"].use(Z["a"]);var ee=new Z["a"].Store({state:{fileList:[{name:" 新增資料夾",type:"folder",owner:" 我",changeTime:" 剛剛",size:2e6},{name:"Hello World.docx",type:"docx",owner:" 我",changeTime:" 剛剛",size:540},{name:"Hello World.jpg",type:"img",owner:" 我",changeTime:"1 小時前",size:2e3},{name:"Hello World.xlsx",type:"xlsx",owner:" 我",changeTime:"1 天前",size:1200},{name:"Hello World.pdf",type:"pdf",owner:" 我",changeTime:"2019 年 10 月 31 日",size:1e4},{name:"Hello World.docx",type:"docx",owner:" 我",changeTime:" 剛剛",size:540},{name:"Hello World.jpg",type:"img",owner:" 我",changeTime:"1 小時前",size:2e3},{name:"Hello World.xlsx",type:"xlsx",owner:" 我",changeTime:"1 天前",size:1200},{name:"Hello World.pdf",type:"pdf",owner:" 我",changeTime:"2019 年 10 月 31 日",size:1e4}]},mutations:{},actions:{}}),te=(n("d940"),n("ecee")),ne=n("c074"),ie=n("b702"),ae=n("ad3d");te["c"].add(ie["h"],ie["g"],ie["f"],ie["e"],ie["d"],ie["c"],ie["b"],ie["i"],ie["j"],ne["i"],ie["a"],ne["h"],ne["c"],ne["f"],ne["e"],ne["d"],ie["k"],ne["g"],ne["b"],ne["j"],ne["a"]),i["a"].component("font-awesome-icon",ae["a"]),i["a"].config.productionTip=!1,new i["a"]({router:Y,store:ee,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var i=n("9c0c"),a=n.n(i);a.a},6018:function(e,t,n){"use strict";var i=n("905c"),a=n.n(i);a.a},"61d7":function(e,t,n){},"7f2a":function(e,t,n){"use strict";var i=n("56bc"),a=n.n(i);a.a},8981:function(e,t,n){"use strict";var i=n("be28"),a=n.n(i);a.a},"8b84":function(e,t,n){},"905c":function(e,t,n){},"98df":function(e,t,n){},"9c0c":function(e,t,n){},b106:function(e,t,n){},be28:function(e,t,n){},ce9b:function(e,t,n){"use strict";var i=n("b106"),a=n.n(i);a.a},d6c8:function(e,t,n){"use strict";var i=n("98df"),a=n.n(i);a.a},d940:function(e,t,n){},fc95:function(e,t,n){"use strict";var i=n("8b84"),a=n.n(i);a.a}});
//# sourceMappingURL=app.8a229e94.js.map