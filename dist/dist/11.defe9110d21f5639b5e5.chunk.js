webpackJsonp([11],{225:function(n,t,e){"use strict";function r(n){l||e(433)}Object.defineProperty(t,"__esModule",{value:!0});var o=e(333),a=e.n(o);for(var i in o)"default"!==i&&function(n){e.d(t,n,function(){return o[n]})}(i);var s=e(435),c=e.n(s),l=!1,d=e(0),p=r,f=d(a.a,c.a,!1,p,null,null);f.options.__file="src/views/error-page/404.vue",t.default=f.exports},333:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Error404",methods:{backPage:function(){this.$router.go(-1)},goHome:function(){this.$router.push({name:"home_index"})}}}},433:function(n,t,e){var r=e(434);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);e(10)("175b8e32",r,!1,{})},434:function(n,t,e){t=n.exports=e(9)(!1),t.push([n.i,"\n@keyframes error404animation {\n0% {\n    transform: rotateZ(0deg);\n}\n20% {\n    transform: rotateZ(-60deg);\n}\n40% {\n    transform: rotateZ(-10deg);\n}\n60% {\n    transform: rotateZ(50deg);\n}\n80% {\n    transform: rotateZ(-20deg);\n}\n100% {\n    transform: rotateZ(0deg);\n}\n}\n.error404-body-con {\n  width: 700px;\n  height: 500px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.error404-body-con-title {\n  text-align: center;\n  font-size: 240px;\n  font-weight: 700;\n  color: #2d8cf0;\n  height: 260px;\n  line-height: 260px;\n  margin-top: 40px;\n}\n.error404-body-con-title span {\n  display: inline-block;\n  color: #19be6b;\n  font-size: 230px;\n  animation: error404animation 3s ease 0s infinite alternate;\n}\n.error404-body-con-message {\n  display: block;\n  text-align: center;\n  font-size: 30px;\n  font-weight: 500;\n  letter-spacing: 12px;\n  color: #dddde2;\n}\n.error404-btn-con {\n  text-align: center;\n  padding: 20px 0;\n  margin-bottom: 40px;\n}\n",""])},435:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"error404"},[e("div",{staticClass:"error404-body-con"},[e("Card",[e("div",{staticClass:"error404-body-con-title"},[n._v("4"),e("span",[e("Icon",{attrs:{type:"ios-navigate-outline"}})],1),n._v("4")]),n._v(" "),e("p",{staticClass:"error404-body-con-message"},[n._v("YOU  LOOK  LOST")]),n._v(" "),e("div",{staticClass:"error404-btn-con"},[e("Button",{staticStyle:{width:"200px"},attrs:{size:"large",type:"text"},on:{click:n.goHome}},[n._v("返回首页")]),n._v(" "),e("Button",{staticStyle:{width:"200px","margin-left":"40px"},attrs:{size:"large",type:"primary"},on:{click:n.backPage}},[n._v("返回上一页")])],1)])],1)])},o=[];r._withStripped=!0;var a={render:r,staticRenderFns:o};t.default=a}});