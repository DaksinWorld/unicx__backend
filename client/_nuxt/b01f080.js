(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{293:function(t,e,n){var content=n(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(79).default)("1701a069",content,!0,{sourceMap:!1})},294:function(t,e,n){"use strict";n.r(e);n(28),n(199);var r=n(11),o=(n(65),n(292)),c={name:"MyNav",data:function(){return{data:[],profile:{},baseUrl:o.a,telegram:o.b,twitter:o.d,isModalActive:!1}},mounted:function(){this.fetchData()},methods:{changeTheme:function(){this.$emit("changeTheme")},fetchData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$get("/product");case 3:return n=e.sent,t.data=n,e.next=7,t.$axios.$get("/auth/1",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}});case 7:r=e.sent,t.profile=r,e.next=13;break;case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])})))()},logout:function(){localStorage.removeItem("jwt"),this.$router.push("/auth")}}},l=(n(297),n(47)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("nav",{staticClass:"nav px-5"},[e("div",{staticClass:"justify-between flex items-center h-full"},[e("div",{staticClass:"flex items-center"},[t._m(0),t._v(" "),e("NuxtLink",{staticClass:"text-[#fafafa] hover-el font-medium rounded-[50px]",attrs:{to:"/"}},[t._v("\n            Dashboard\n          ")]),t._v(" "),e("NuxtLink",{staticClass:"text-[#fafafa] hover-el font-medium rounded-[50px]",attrs:{to:"/document"}},[t._v("\n            Docs\n          ")])],1),t._v(" "),e("div",{staticClass:"flex items-center"},[t.profile.email?e("div",{staticClass:"cursor-pointe p-2",on:{click:function(e){t.isModalActive=!0}}},[e("i",{staticClass:"fa-regular fa-user text-[16px] color-primary"})]):e("nuxt-link",{staticClass:"cursor-pointe p-2",attrs:{to:"/auth"}},[e("img",{attrs:{width:"20",src:"/user-icon.png",alt:"user-icon"}})]),t._v(" "),t.isModalActive?e("div",{staticClass:"modal__bg",on:{click:function(e){t.isModalActive=!1}}},[e("div",{staticClass:"modal",on:{click:function(t){t.stopPropagation()}}},[e("div",{staticClass:"flex items-start flex-col"},[e("div",{staticClass:"flex"},[t._m(1),t._v(" "),t.profile?e("div",{staticClass:"flex flex-col"},[e("span",[t._v(t._s(t.profile.email.split("@")[0].substr(0,3)+"***"+t.profile.email.split("@")[1]))]),t._v(" "),e("span",{staticClass:"text-[12px] text-gray"},[t._v("UID: "+t._s(t.profile._id))])]):t._e()]),t._v(" "),e("hr"),t._v(" "),e("button",{staticClass:"logout text-[16px]",on:{click:t.logout}},[e("i",{staticClass:"fa-solid fa-power-off mr-2"}),t._v("\n                  Log out\n                ")])])])]):t._e(),t._v(" "),e("div",{staticClass:"cursor-pointe p-2"},[e("img",{attrs:{width:"16",src:"/theme.png",alt:"theme-icon"},on:{click:t.changeTheme}})])],1)])]),t._v(" "),t.data?e("div",{staticClass:"flex items"},t._l(t.data,(function(n){return e("nuxt-link",{key:n._id,staticClass:"card flex align-center cursor-pointer",attrs:{to:"/pages/".concat(n._id)}},[e("img",{staticClass:"rounded-[50%] img mr-[16px]",attrs:{width:"60px",height:"6px",src:t.baseUrl+n.photoUrl[0].url,alt:"img"}}),t._v(" "),e("div",{staticClass:"text flex flex-col"},[e("span",{staticClass:"title text-[12px] font-medium"},[t._v("\n            "+t._s(n.title)+"\n          ")]),t._v(" "),e("span",{staticClass:"text-[12px] font-medium text-gray"},[t._v("\n            "+t._s(n.maxPool)+" "+t._s(n.poolCurrency)+"\n          ")]),t._v(" "),e("span",{staticClass:"text-[12px] font-medium text-gray"},[t._v("\n            "+t._s(n.startedAt)+"\n          ")])])])})),1):t._e()])}),[function(){var t=this._self._c;return t("a",{staticClass:"mr-[16px]",attrs:{href:"/"}},[t("img",{attrs:{src:"/logo.png",width:"220px",alt:"logo"}})])},function(){var t=this._self._c;return t("div",{staticClass:"bg-gray-300 rounded-[50%] flex items-center justify-center h-[44px] w-[44px] mr-2"},[t("img",{attrs:{src:"/user-pfp.png",alt:"user-pfp"}})])}],!1,null,"4482a022",null);e.default=component.exports;installComponents(component,{Nav:n(294).default})},297:function(t,e,n){"use strict";n(293)},298:function(t,e,n){var r=n(78)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.modal__bg[data-v-4482a022]{\n  position:fixed;\n  top:0;\n  bottom:0;\n  right:0;\n  left:0\n}\n.modal[data-v-4482a022]{\n  position:absolute;\n  border-radius:15px;\n  border:2px solid var(--bgColor);\n  background-color:var(--primary);\n  right:55px;\n  padding:20px;\n  bottom:auto;\n  top:65px;\n  box-shadow:0 0 15px 6px var(--bgColor)\n}\n.color-primary[data-v-4482a022]{\n  margin-top:5px;\n  color:#babbbc\n}\n.logout[data-v-4482a022]{\n  border-radius:10px;\n  transition:background-color .3s ease-in-out\n}\nhr[data-v-4482a022]{\n  width:100%;\n  height:1px;\n  margin:12px 3px;\n  border-color:var(--grayTextColor)\n}\n.cursor-pointe[data-v-4482a022]{\n  cursor:pointer\n}\n.font-medium[data-v-4482a022]{\n  font-weight:500!important\n}\n.nav[data-v-4482a022]{\n  width:100%;\n  position:fixed;\n  top:0;\n  left:0;\n  height:80px;\n  background:var(--primary);\n  color:var(--textColor)\n}\n.img[data-v-4482a022]{\n  border:4px solid var(--tabHover);\n  height:60px\n}\n.items[data-v-4482a022]{\n  margin-top:85px;\n  overflow-x:scroll\n}\n.items[data-v-4482a022]::-webkit-scrollbar{\n  height:4px;\n  width:4px\n}\n.items[data-v-4482a022]::-webkit-scrollbar-thumb{\n  border-radius:20px!important;\n  background-color:#363636\n}\n.items[data-v-4482a022]::-webkit-scrollbar-track{\n  border-radius:20px!important;\n  background-color:var(--bgColor)\n}\na[data-v-4482a022]{\n  font-size:14px;\n  text-transform:uppercase;\n  font-weight:600\n}\n.card[data-v-4482a022]{\n  padding:16px;\n  border-radius:10px;\n  background-color:var(--primary);\n  height:96px;\n  min-width:300px!important;\n  width:300px!important;\n  margin:0 2px 4px\n}\n.text-gray[data-v-4482a022]{\n  color:var(--grayTextColor)\n}\n.cursor-pointer[data-v-4482a022]{\n  transition:background-color .3s ease-in-out\n}\n.cursor-pointer[data-v-4482a022]:hover{\n  background-color:var(--aqua)\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},301:function(t,e,n){var content=n(309);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(79).default)("50166ca8",content,!0,{sourceMap:!1})},308:function(t,e,n){"use strict";n(301)},309:function(t,e,n){var r=n(78)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\nfooter[data-v-646cb52d]{\n  background:var(--primary);\n  height:80px;\n  width:100%;\n  position:relative;\n  bottom:0;\n  left:0\n}\n.el-hover-bg-rounded[data-v-646cb52d],footer[data-v-646cb52d]{\n  display:flex;\n  align-items:center;\n  justify-content:center\n}\n.el-hover-bg-rounded[data-v-646cb52d]{\n  border-radius:50%;\n  padding:12px 14px\n}\n.el-hover-bg[data-v-646cb52d]{\n  background:#333538\n}\n.el-hover-bg-rounded[data-v-646cb52d]:hover{\n  padding:12px 14px\n}\n.hover-el[data-v-646cb52d]{\n  border-radius:25px\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},311:function(t,e,n){"use strict";n.r(e);var r=n(11),o=(n(65),n(292)),c={name:"MyFooter",data:function(){return{telegram:o.b,twitter:o.d}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$get("/constants");case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])})))()}}},l=(n(308),n(47)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("footer",[e("nuxt-link",{staticClass:"hover-el cursor-pointer font-medium text-[#b9babb] text-[14px]",class:{"el-hover-bg":"/terms"===t.$route.path},attrs:{to:"/terms"}},[t._v("\n      Terms and Conditions\n    ")]),t._v(" "),e("nuxt-link",{staticClass:"hover-el cursor-pointer font-medium text-[#b9babb] text-[14px]",class:{"el-hover-bg":"/terms/privacy-policy"===t.$route.path},attrs:{to:"/terms/privacy-policy"}},[t._v("\n      Privacy Policy\n    ")])],1)}),[],!1,null,"646cb52d",null);e.default=component.exports},400:function(t,e,n){"use strict";n.r(e);var r=n(11),o=(n(65),{name:"ProductPage",components:{MyNav:n(294).default},data:function(){return{data:[],address:"",lockedConstant:""}},methods:{changeTheme:function(){"#181a1e"===getComputedStyle(document.documentElement).getPropertyValue("--primary")?(document.documentElement.style.setProperty("--primary","#ffffff"),document.documentElement.style.setProperty("--bgColor","#eaeef2"),document.documentElement.style.setProperty("--textColor","#000"),document.documentElement.style.setProperty("--underCardColor","#F4F4F9"),document.documentElement.style.setProperty("--tabBg","#fff")):(document.documentElement.style.setProperty("--primary","#181a1e"),document.documentElement.style.setProperty("--bgColor","#0d0e10"),document.documentElement.style.setProperty("--textColor","#fff"),document.documentElement.style.setProperty("--underCardColor","#17181B"),document.documentElement.style.setProperty("--tabBg","#18191C"))},fetchData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,address;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$get("/product/find/"+t.$route.params.id);case 3:return n=e.sent,e.next=6,t.$axios.$post("/constants/find",{name:"locked"});case 6:return r=e.sent,e.next=9,t.$axios.$post("/constants/find",{name:"address"});case 9:address=e.sent,t.address=address.text,t.lockedConstant=r.text,t.data=n,"Upcoming"!==t.data.type&&"Success"!==t.data.type||(t.currentTab="info"),t.isLoaded=!0,e.next=19;break;case 17:e.prev=17,e.t0=e.catch(0);case 19:case"end":return e.stop()}}),e,null,[[0,17]])})))()}}}),c=n(47),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("MyNav",{on:{changeTheme:t.changeTheme}}),t._v(" "),e("MyPageMain"),t._v(" "),e("MyFooter")],1)}),[],!1,null,"0ad648f6",null);e.default=component.exports;installComponents(component,{MyPageMain:n(389).default,MyFooter:n(311).default})}}]);