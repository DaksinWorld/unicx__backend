(window.webpackJsonp=window.webpackJsonp||[]).push([[17,12],{285:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"c",(function(){return o})),r.d(e,"b",(function(){return l})),r.d(e,"d",(function(){return d}));var n="http://159.223.188.155",o={greenText:"Lock Team Tokens",greenTextMain:"Locked: refers to token locks with maturity at least 7 days after the presale begins.",orangeText:"-100% price impact",orangeTextMain:"if unlocked tokens are dumped on the pool. Decrease risk in this presale by asking the devs to lock team tokens."},l="https://t.me/CYUSDT_Announcement_Channel",d="https://twitter.com/UNCX_token"},291:function(t,e,r){var content=r(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("3ba5c0a0",content,!0,{sourceMap:!1})},294:function(t,e,r){"use strict";r.r(e);r(293);var n=r(296),o=r(24);o.e.register(o.m,o.n,o.g,o.a,o.d);var l={name:"DoughnutChart",components:{Doughnut:n.a},props:{options:{type:Boolean,default:!0},chartId:{type:String,default:"doughnut-chart"},datasetIdKey:{type:String,default:"label"},width:{type:Number,default:100},height:{type:Number,default:100},cssClasses:{default:"",type:String},styles:{type:Object,default:function(){}},plugins:{type:Array,default:function(){return[]}},data:{type:Array,default:function(){return[]}},hover:{type:Boolean,default:function(){return!0}}},data:function(){return{chartData:{labels:["Presale","Liquidity","Feess","Locked","Burnt","Unlocked"],datasets:[{backgroundColor:["#9e52c5","#0496c9","#13b6aa","#0edc7f","#d4be5c","#141719"],data:this.data}]},chartOptions:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:this.options,align:"start",position:"right"}},events:this.hover?["mousemove","mouseout","click","touchstart","touchmove","touchend"]:["click"]}}}},d=r(47),component=Object(d.a)(l,(function(){var t=this;return(0,t._self._c)("Doughnut",{attrs:{"chart-options":t.chartOptions,"chart-data":t.chartData,"chart-id":t.chartId,"dataset-id-key":t.datasetIdKey,plugins:t.plugins,"css-classes":t.cssClasses,styles:t.styles,width:t.width,height:t.height}})}),[],!1,null,null,null);e.default=component.exports},296:function(t,e,r){"use strict";r.d(e,"a",(function(){return m}));var n,o=r(24);function l(t,e,r,o){t(e,r),void 0!==o&&o.emit(n.ChartRendered)}function d(t,e){t.destroy(),void 0!==e&&e.emit(n.ChartDestroyed)}function c(t,e,r){const n=[];t.datasets=e.datasets.map((e=>{const o=t.datasets.find((t=>t[r]===e[r]));return o&&e.data&&!n.includes(o)?(n.push(o),Object.assign(o,e),o):{...e}}))}!function(t){t.ChartRendered="chart:rendered",t.ChartUpdated="chart:updated",t.ChartDestroyed="chart:destroyed",t.LabelsUpdated="labels:updated"}(n||(n={}));function v(t,e,r){let v=null;return{props:{chartData:{type:Object,required:!0},chartOptions:{type:Object,default:()=>{}},datasetIdKey:{type:String,default:"label"},chartId:{type:String,default:t},width:{type:Number,default:400},height:{type:Number,default:400},cssClasses:{type:String,default:""},styles:{type:Object,default:()=>{}},plugins:{type:Array,default:()=>[]}},data:()=>({_chart:null}),computed:{hasAnnotationPlugin(){var t,e;return void 0!==(null===(t=this.chartOptions)||void 0===t||null===(e=t.plugins)||void 0===e?void 0:e.annotation)}},created(){o.e.register(r)},mounted(){v={current:null},"datasets"in this.chartData&&this.chartData.datasets.length>0&&(l(this.renderChart,this.chartData,this.chartOptions),this.$emit(n.ChartRendered))},watch:{chartData:{handler:function(t,e){this.chartDataHandler(t,e)},deep:!0},chartOptions:{handler:function(t){this.chartOptionsHandler(t)},deep:!0}},methods:{renderChart(data,t){const r=this.getCurrentChart();if(null!==r&&(d(r),this.$emit(n.ChartDestroyed)),!this.$refs.canvas)throw new Error("Please remove the <template></template> tags from your chart component. See https://vue-chartjs.org/guide/#vue-single-file-components");{const r=function(data,t){const e={labels:void 0===data.labels?[]:[...data.labels],datasets:[]};return c(e,{...data},t),e}(data,this.datasetIdKey),n=this.$refs.canvas.getContext("2d");null!==n&&this.setCurrentChart(new o.e(n,{type:e,data:r,options:t,plugins:this.plugins}))}},chartDataHandler(t,e){const r={...t},o={...e},v=this.getCurrentChart();if(Object.keys(o).length>0){const t=function(t,e){const r=t.datasets.map((t=>t.label)),n=e.datasets.map((t=>t.label));return e.datasets.length===t.datasets.length&&r.every(((t,e)=>t===n[e]))}(r,o);t&&null!==v?(c(v.data,r,this.datasetIdKey),void 0!==r.labels&&(m=v,h=r.labels,m.data.labels=h,void 0!==f&&f.emit(n.LabelsUpdated),this.$emit(n.LabelsUpdated)),this.updateChart(),this.$emit(n.ChartUpdated)):(null!==v&&(d(v),this.$emit(n.ChartDestroyed)),l(this.renderChart,this.chartData,this.chartOptions),this.$emit(n.ChartRendered))}else null!==v&&(d(v),this.$emit(n.ChartDestroyed)),l(this.renderChart,this.chartData,this.chartOptions),this.$emit(n.ChartRendered);var m,h,f},chartOptionsHandler(t){const e=this.getCurrentChart();null!==e?(!function(t,e){t.options={...e}}(e,t),this.updateChart()):l(this.renderChart,this.chartData,this.chartOptions)},updateChart(){const t=this.getCurrentChart();var e;t.update(),void 0!==e&&e.emit(n.ChartUpdated)},getCurrentChart(){return this.hasAnnotationPlugin?v.current:this.$data._chart},setCurrentChart(t){this.hasAnnotationPlugin?v.current=t:this.$data._chart=t}},beforeDestroy(){const t=this.getCurrentChart();null!==t&&(d(t),this.$emit(n.ChartDestroyed))},render:function(t){return t("div",{style:this.styles,class:this.cssClasses},[t("canvas",{attrs:{id:this.chartId,width:this.width,height:this.height},ref:"canvas"})])}}}o.b;const m=v("doughnut-chart","doughnut",o.f);o.h,o.i,o.j,o.k,o.c,o.l},297:function(t,e,r){var content=r(306);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("15dec6fb",content,!0,{sourceMap:!1})},298:function(t,e,r){"use strict";r(291)},299:function(t,e,r){var n=r(77)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n.bg-red-4000[data-v-6e5e781e]{\n  background:#f44336!important\n}\n.items-center[data-v-6e5e781e]{\n  padding:2px 8px\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},301:function(t,e,r){"use strict";r.r(e);var n=r(285),o={name:"UIIcon",props:["text","color","icon","red"],data:function(){return{baseUrl:n.a}}},l=(r(298),r(47)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"px-1 rounded-[35px] font-semibold flex items-center",class:"bg-".concat(t.color,"-400")},[e("img",{staticStyle:{height:"15px"},attrs:{src:"/".concat(t.icon),alt:"icon"}}),t._v("\n  "+t._s(t.text)+"\n")])}),[],!1,null,"6e5e781e",null);e.default=component.exports},305:function(t,e,r){"use strict";r(297)},306:function(t,e,r){var n=r(77)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n.card[data-v-74142573]{\n  background:var(--primary);\n  color:var(--textColor);\n  height:200px;\n  margin-top:5px;\n  box-shadow:0 2px 3px 1px rgba(0,0,0,.71)\n}\n.card[data-v-74142573]:hover{\n  background:var(--aqua)\n}\n.success-text[data-v-74142573]{\n  color:#68d67c;\n  font-weight:400;\n  font-size:12px\n}\n.img[data-v-74142573]{\n  border-radius:50%;\n  width:66px;\n  height:66px\n}\n.bg-primary[data-v-74142573]:first-child{\n  background:var(--textColor)\n}\n.bg-primary[data-v-74142573]{\n  height:18px;\n  font-size:11px;\n  font-weight:700;\n  border-radius:15px;\n  background:var(--bgColor);\n  color:#fafafa\n}\n.green-col[data-v-74142573]{\n  background:#3dbe85!important\n}\n.blue-col[data-v-74142573]{\n  background:#5a97fe!important\n}\n.bl-0[data-v-74142573]{\n  border-bottom-left-radius:0!important;\n  border-top-left-radius:0!important\n}\n.color-gray[data-v-74142573]{\n  color:var(--grayTextColor)\n}\n.rounded-\\[15px\\][data-v-74142573]{\n  border-radius:15px!important\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},308:function(t,e,r){"use strict";r.r(e);r(82),r(79),r(48),r(293);var n=r(285),o={name:"UICard",components:{DoughnutChart:r(294).default},props:["data"],data:function(){return{baseUrl:n.a,isLoaded:!1,graphData:[]}},mounted:function(){var t=this;setTimeout((function(){t.isLoaded=!0,t.graphData=JSON.parse(t.data.graph[0]).map((function(t){return Number(t)}))}),1e3)},methods:{goToPage:function(){this.$router.push("/pages/".concat(this.data._id))}}},l=(r(305),r(47)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card py-3 px-4 cursor-pointer",on:{click:t.goToPage}},[e("div",{staticClass:"flex justify-between items-start mt-[5px]"},[e("div",{staticClass:"flex items-start"},["string"==typeof t.data.photoUrl?e("img",{staticClass:"img m-2",attrs:{src:t.data.photoUrl,alt:"Image"}}):e("img",{staticClass:"img m-2",attrs:{src:"".concat(t.baseUrl).concat(t.data.photoUrl[0].url),alt:"Image"}}),t._v(" "),e("div",{staticClass:"flex flex-col py-1"},[e("span",{staticClass:"font-medium text-[#fafafa] text-[20px] flex align-start"},[t._v("\n          "+t._s(t.data.title)+"\n          "),e("i",{staticClass:"fa-solid mt-2 ml-2 fa-angle-up font-regular text-[#b9babb] text-[14px]"})]),t._v(" "),t.data.successPercentage?e("span",{staticClass:"text-[12px] font-regular success-text"},[t._v(t._s(t.data.successPercentage)+"%")]):t._e(),t._v(" "),e("span",{staticClass:"text-[12px] font-regular text-[#fafafa]"},[t._v("Starts at "+t._s(t.data.startedAt))]),t._v(" "),e("span",{staticClass:"flex items-center"},[e("span",{staticClass:"flex items-center text-[14px]"},[e("i",{staticClass:"fa-solid fa-lock mr-1"}),t._v(" "),e("span",{staticClass:"mr-1"},[t._v(t._s(t.data.lockedPercentage)+"%")])]),t._v(" "),e("UIIcon",{staticClass:"mr-2 text-[12px]",attrs:{icon:"audit-icon.png",text:"Audit",color:"Succes"===t.data.type?"red":"orange"}}),t._v(" "),e("UIIcon",{staticClass:"mr-2 text-[12px] p-0",style:{padding:"3px"},attrs:{icon:"search.png",text:"",color:"Succes"===t.data.type?"red":"blue"}})],1)])]),t._v(" "),t.isLoaded?e("DoughnutChart",{staticClass:"mt-3",attrs:{hover:!1,width:30,height:30,data:t.graphData,options:!1}}):t._e()],1),t._v(" "),e("div",{staticClass:"flex items-center justify-between my-2"},[e("span",{staticClass:"text-[12px] color-gray"},[t._v("Duration "+t._s(t.data.durationDays)+" days")]),t._v(" "),e("span",{staticClass:"text-[12px] color-gray"},[t._v("Started At: "+t._s(t.data.startedAt))])]),t._v(" "),e("div",{staticClass:"flex items-center mt-2"},[e("div",{staticClass:"bg-primary green-col bg-white relative flex items-center justify-around text-[#fafafa]",style:{width:"".concat(100/(t.data.maxPool/t.data.poolValue),"%")}},[t.data.poolValue/t.data.maxPool>=1?e("div",{staticClass:"text-[#fafafa]"},[t._v("\n        "+t._s(t.data.poolValue)+" / "+t._s(t.data.maxPool)+" "+t._s(t.data.poolCurrency)+"\n      ")]):t._e(),t._v(" "),t.data.poolValue/t.data.maxPool>=1?e("div",{staticClass:"mr-2 text-[#fafafa]"},[t._v("\n        "+t._s(t.data.maxPool/100)+" "+t._s(t.data.poolCurrency)+"\n      ")]):t._e()]),t._v(" "),t.data.maxPool/t.data.poolValue>1?e("div",{staticClass:"bg-primary relative w-full flex items-center justify-between pl-4 bl-0",class:{"rounded-[15px]":0===t.data.poolValue}},[e("div",{staticClass:"text-[#fafafa]"},[t._v("\n        "+t._s(t.data.poolValue)+" / "+t._s(t.data.maxPool)+" "+t._s(t.data.poolCurrency)+"\n      ")]),t._v(" "),e("div",{staticClass:"mr-2 text-[#fafafa]"},[t._v("\n        "+t._s(t.data.maxPool/100)+" "+t._s(t.data.poolCurrency)+"\n      ")])]):t._e()]),t._v(" "),e("div",{staticClass:"flex flex-row items-center w-full justify between mt-2"},[e("div",{staticClass:"w-50 flex items-center"},[e("div",{staticClass:"bg-primary blue-col bg-white relative flex justify-center text-[#fafafa]",style:{width:"".concat(100/(t.data.maxUsers/t.data.totalUsers),"%")}},[t.data.totalUsers/t.data.maxUsers>=1?e("div",{staticClass:"text-[#fafafa]"},[t._v("\n          "+t._s(t.data.totalUsers)+" / "+t._s(t.data.maxUsers)+"\n        ")]):t._e()]),t._v(" "),t.data.maxUsers/t.data.totalUsers>1?e("div",{staticClass:"bg-primary relative w-full flex items-center pl-4 bl-0 text-[#fafafa]"},[t._v("\n        "+t._s(t.data.totalUsers)+" / "+t._s(t.data.maxUsers)+"\n      ")]):t._e(),t._v(" "),e("div",{staticClass:"flex items-center text-[#b9babb] text-[12px]"},[e("i",{staticClass:"fa-solid text-[#b9babb] fa-file mx-2"}),t._v("\n        "+t._s(t.data.whitelistedUsers)+"/"+t._s(t.data.totalWhitelist)+"\n      ")])]),t._v(" "),e("div",{staticClass:"flex justify-end text-[12px] w-50 items-center"},[t._m(0),t._v(" "),e("div",{staticClass:"flex items-center text-[#fafafa]"},[e("i",{staticClass:"fa-solid fa-user mx-2 text-[#fafafa]"}),t._v("\n        "+t._s(t.data.badgesUser)+"\n      ")])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"flex items-center text-[#fafafa]"},[t("i",{staticClass:"fa-solid fa-message mx-2 text-[#fafafa]"}),this._v("\n        0\n      ")])}],!1,null,"74142573",null);e.default=component.exports;installComponents(component,{UIIcon:r(301).default,DoughnutChart:r(294).default})},330:function(t,e,r){var content=r(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("414b4bd8",content,!0,{sourceMap:!1})},364:function(t,e,r){var n=r(2),o=r(203).values;n({target:"Object",stat:!0},{values:function(t){return o(t)}})},365:function(t,e,r){"use strict";r(330)},366:function(t,e,r){var n=r(77)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n.modal[data-v-1c9b8e48]{\n  position:fixed;\n  bottom:40px;\n  right:60px;\n  padding:20px;\n  border-radius:20px\n}\n.modal[data-v-1c9b8e48],.select[data-v-1c9b8e48]{\n  background:var(--primary)\n}\n.select[data-v-1c9b8e48]{\n  margin-bottom:10px\n}\noption[data-v-1c9b8e48]{\n  color:var(--textColor)\n}\ninput[data-v-1c9b8e48]{\n  border-radius:20px;\n  margin-bottom:15px;\n  color:var(--grayTextColor);\n  background:var(--primary);\n  border:0 solid var(--grayTextColor);\n  padding:10px 20px\n}\nform[data-v-1c9b8e48]{\n  width:50%\n}\n*[data-v-1c9b8e48]{\n  color:var(--textColor)\n}\nform div[data-v-1c9b8e48]{\n  display:flex;\n  flex-direction:column\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},388:function(t,e,r){"use strict";r.r(e);r(48),r(39),r(14);var n=r(11),o=(r(64),r(42),r(364),r(79),r(32),r(33),r(328),r(199),{name:"PRoductId",data:function(){return{typeValue:["Upcoming","Live","Success"],type:"",file:"",status:"",totalWhitelist:"",whitelistedUsers:"",softCap:"",title:"",startedAt:"",lockedPercentage:"",durationDays:"",maxPool:"",poolCurrency:"",poolValue:"",maxUsers:"",totalUsers:"",twitter:"",site:"",liveText:"",telegram:"",badgesUser:"",graph:"",graph1:"",graph2:"",graph3:"",graph4:"",graph5:"",graph6:"",text:"",id:"",tokenAddress:"",successPercentage:"",isModalActive:!1,modalValue:{text:"",status:""}}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,i,l,d,c,v,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$get("/auth/isAdmin",{headers:{Authorization:"Bearer "+localStorage.getItem("jwt")}});case 3:return e.next=5,t.$axios.$get("/product/find/"+t.$route.params.id);case 5:for(i in r=e.sent,t.id=r._id,n=Object.keys(r),o=Object.values(r),n)l=n[i],d=o[i],t[l]=d;for(v in c=JSON.parse(r.graph[0]))m="graph".concat(+v+1),t[m]=c[v];e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),401===e.t0.response.data.statusCode&&(t.isModalActive=!0,t.modalValue={status:"danger",text:e.t0.response.data.message},setTimeout((function(){t.isModalActive=!1,t.$router.push("/auth")}),3e3));case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))()},handleFile:function(t){this.file=t.target.files[0]},submit:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=new FormData,t.graph=[t.graph1,t.graph2,t.graph3,t.graph4,t.graph5,t.graph6],r.append("file",t.file),r.append("title",t.title),r.append("softCap",t.softCap),r.append("poolValue",t.poolValue),r.append("poolCurrency",t.poolCurrency),r.append("text",t.text),r.append("maxUsers",t.maxUsers),r.append("maxPool",t.maxPool),r.append("totalUsers",t.totalUsers),r.append("telegram",t.telegram),r.append("twitter",t.twitter),r.append("site",t.site),r.append("liveText",t.liveText),r.append("status",t.status),r.append("type",t.type),r.append("graph",JSON.stringify(t.graph)),r.append("badgesUser",t.badgesUser),r.append("durationDays",t.durationDays),r.append("lockedPercentage",t.lockedPercentage),r.append("startedAt",t.startedAt),r.append("whitelistedUsers",t.whitelistedUsers),r.append("totalWhitelist",t.totalWhitelist),r.append("tokenAddress",t.tokenAddress),r.append("successPercentage",t.successPercentage),e.next=29,t.$axios.$patch("/product/"+t._id,r,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer "+localStorage.getItem("jwt")}});case 29:t.isModalActive=!0,t.modalValue={text:"Successfully updated new token",status:"primary"},setTimeout((function(){t.isModalActive=!1}),3e3),e.next=39;break;case 34:e.prev=34,e.t0=e.catch(0),t.isModalActive=!0,t.modalValue={text:e.t0.response.data.message,status:"danger"},setTimeout((function(){t.isModalActive=!1}),3e3);case 39:case"end":return e.stop()}}),e,null,[[0,34]])})))()}},computed:{data:function(){var t="",e=[this.graph1,this.graph2,this.graph3,this.graph4,this.graph5,this.graph6];return this.file&&(t=window.URL.createObjectURL(this.file)),{photoUrl:t,graph:JSON.stringify(e),title:this.title,softCap:this.softCap,poolValue:this.poolValue,poolCurrency:this.poolCurrency,text:this.text,maxUsers:this.maxUsers,maxPool:this.maxPool,totalUsers:this.totalUsers,telegram:this.telegram,twitter:this.twitter,site:this.site,status:this.status,type:this.type,badgesUser:this.badgesUser,durationDays:this.durationDays,lockedPercentage:this.lockedPercentage,startedAt:this.startedAt,totalWhitelist:this.totalWhitelist,liveText:this.liveText,successPercentage:this.successPercentage,whitelistedUsers:this.whitelistedUsers,tokenAddress:this.tokenAddress}}}}),l=(r(365),r(47)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container flex justify-left"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e("div",{staticClass:"mb-1 flex justify-left"},[e("nuxt-link",{staticClass:"underlined",attrs:{to:"/admin"}},[e("i",{staticClass:"fa-solid fa-arrow-left"}),t._v("\n          Back\n      ")])],1),t._v(" "),e("label",{staticClass:"mb-[10px]",attrs:{for:"type"}},[t._v("Section")]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],staticClass:"select w-full",attrs:{required:"",id:"type"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.type=e.target.multiple?r:r[0]}}},t._l(t.typeValue,(function(r){return e("option",{key:r,domProps:{value:r}},[t._v(t._s(r))])})),0),t._v(" "),e("div",[e("label",[t._v("status example: Started, awaiting to start, etc.")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.status,expression:"status"}],attrs:{required:"",type:"text",placeholder:t.status},domProps:{value:t.status},on:{input:function(e){e.target.composing||(t.status=e.target.value)}}})]),t._v(" "),e("div",[e("label",[t._v("softCap")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.softCap,expression:"softCap"}],attrs:{required:"",type:"number",placeholder:t.softCap},domProps:{value:t.softCap},on:{input:function(e){e.target.composing||(t.softCap=e.target.value)}}})]),t._v(" "),e("div",[e("label",[t._v("title 1.Title")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{required:"",type:"text",placeholder:t.title},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._v(" "),e("div",[e("label",[t._v("Started At")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.startedAt,expression:"startedAt"}],attrs:{required:"",type:"text",placeholder:t.startedAt},domProps:{value:t.startedAt},on:{input:function(e){e.target.composing||(t.startedAt=e.target.value)}}})]),t._v(" "),e("div",[e("label",[t._v("Locked Percentage")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.lockedPercentage,expression:"lockedPercentage"}],attrs:{required:"",type:"number",placeholder:t.lockedPercentage},domProps:{value:t.lockedPercentage},on:{input:function(e){e.target.composing||(t.lockedPercentage=e.target.value)}}})]),t._v(" "),e("div",[e("label",[t._v("Duration Days")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.durationDays,expression:"durationDays"}],attrs:{required:"",type:"number",placeholder:t.durationDays},domProps:{value:t.durationDays},on:{input:function(e){e.target.composing||(t.durationDays=e.target.value)}}})]),t._v(" "),e("div",[e("label",[t._v("Max Pool (bar)")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.maxPool,expression:"maxPool"}],attrs:{required:"",type:"number",placeholder:t.maxPool},domProps:{value:t.maxPool},on:{input:function(e){e.target.composing||(t.maxPool=e.target.value)}}})]),t._v(" "),e("div",[e("label",[t._v("Pool Currency (Bnb, usdt, etc.)")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.poolCurrency,expression:"poolCurrency"}],attrs:{required:"",type:"text",placeholder:t.poolCurrency},domProps:{value:t.poolCurrency},on:{input:function(e){e.target.composing||(t.poolCurrency=e.target.value)}}})]),t._v(" "),e("div",[e("label",[t._v("Pool Value, Example 100(Pool Value) / 300(Max Pool)")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.poolValue,expression:"poolValue"}],attrs:{required:"",type:"number",placeholder:t.poolValue},domProps:{value:t.poolValue},on:{input:function(e){e.target.composing||(t.poolValue=e.target.value)}}})]),t._v(" "),e("div",[e("label",[t._v("Max Users(bar)")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.maxUsers,expression:"maxUsers"}],attrs:{required:"",type:"number",placeholder:t.maxUsers},domProps:{value:t.maxUsers},on:{input:function(e){e.target.composing||(t.maxUsers=e.target.value)}}})]),t._v(" "),e("div",[e("label",[t._v("Current Users, the same logic as pool")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.totalUsers,expression:"totalUsers"}],attrs:{required:"",type:"number",placeholder:t.totalUsers},domProps:{value:t.totalUsers},on:{input:function(e){e.target.composing||(t.totalUsers=e.target.value)}}})]),t._v(" "),e("div",[e("label",[t._v("Twiiter link")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.twitter,expression:"twitter"}],attrs:{required:"",type:"text",placeholder:t.twitter},domProps:{value:t.twitter},on:{input:function(e){e.target.composing||(t.twitter=e.target.value)}}})]),t._v(" "),e("div",[e("label",[t._v("Site link")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.site,expression:"site"}],attrs:{required:"",type:"text",placeholder:t.site},domProps:{value:t.site},on:{input:function(e){e.target.composing||(t.site=e.target.value)}}})]),t._v(" "),e("div",[e("label",[t._v("Telegram link")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.telegram,expression:"telegram"}],attrs:{required:"",type:"text",placeholder:t.telegram},domProps:{value:t.telegram},on:{input:function(e){e.target.composing||(t.telegram=e.target.value)}}})]),t._v(" "),e("div",[e("label",[t._v("Badged Users")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.badgesUser,expression:"badgesUser"}],attrs:{required:"",type:"number",placeholder:t.badgesUser},domProps:{value:t.badgesUser},on:{input:function(e){e.target.composing||(t.badgesUser=e.target.value)}}})]),t._v(" "),e("div",[e("label",[t._v("Total Whitelist")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.totalWhitelist,expression:"totalWhitelist"}],attrs:{required:"",type:"number",placeholder:t.totalWhitelist},domProps:{value:t.totalWhitelist},on:{input:function(e){e.target.composing||(t.totalWhitelist=e.target.value)}}})]),t._v(" "),e("div",[e("label",[t._v("Whitelisted Users, the same logic as pool, (bar)")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.whitelistedUsers,expression:"whitelistedUsers"}],attrs:{required:"",type:"number",placeholder:t.whitelistedUsers},domProps:{value:t.whitelistedUsers},on:{input:function(e){e.target.composing||(t.whitelistedUsers=e.target.value)}}})]),t._v(" "),e("div",[e("label",[t._v("Success Percentage (Success Percentage at Success section)")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.successPercentage,expression:"successPercentage"}],attrs:{type:"number",placeholder:t.successPercentage},domProps:{value:t.successPercentage},on:{input:function(e){e.target.composing||(t.successPercentage=e.target.value)}}})]),t._v(" "),e("div",[e("label",[t._v("Token Address")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tokenAddress,expression:"tokenAddress"}],attrs:{required:"",type:"text",placeholder:t.tokenAddress},domProps:{value:t.tokenAddress},on:{input:function(e){e.target.composing||(t.tokenAddress=e.target.value)}}})]),t._v(" "),e("div",[e("label",[t._v("Text in Live Section")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.liveText,expression:"liveText"}],attrs:{type:"text",placeholder:t.liveText},domProps:{value:t.liveText},on:{input:function(e){e.target.composing||(t.liveText=e.target.value)}}})]),t._v(" "),e("div",[e("label",[t._v("Graph")]),t._v(" "),e("div",[e("label",[t._v("Presale Value")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.graph1,expression:"graph1"}],attrs:{required:"",type:"number",placeholder:t.graph1},domProps:{value:t.graph1},on:{input:function(e){e.target.composing||(t.graph1=e.target.value)}}}),t._v(" "),e("label",[t._v("Liquidity")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.graph2,expression:"graph2"}],attrs:{required:"",type:"number",placeholder:t.graph2},domProps:{value:t.graph2},on:{input:function(e){e.target.composing||(t.graph2=e.target.value)}}}),t._v(" "),e("label",[t._v("Fees")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.graph3,expression:"graph3"}],attrs:{required:"",type:"number",placeholder:t.graph3},domProps:{value:t.graph3},on:{input:function(e){e.target.composing||(t.graph3=e.target.value)}}}),t._v(" "),e("label",[t._v("Locked")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.graph4,expression:"graph4"}],attrs:{required:"",type:"number",placeholder:t.graph4},domProps:{value:t.graph4},on:{input:function(e){e.target.composing||(t.graph4=e.target.value)}}}),t._v(" "),e("label",[t._v("Burnt")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.graph5,expression:"graph5"}],attrs:{type:"number",placeholder:t.graph5},domProps:{value:t.graph5},on:{input:function(e){e.target.composing||(t.graph5=e.target.value)}}}),t._v(" "),e("label",[t._v("Unlocked")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.graph6,expression:"graph6"}],attrs:{required:"",type:"number",placeholder:t.graph6},domProps:{value:t.graph6},on:{input:function(e){e.target.composing||(t.graph6=e.target.value)}}})])]),t._v(" "),e("div",[e("label",[t._v("text (Info section)")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{required:"",type:"text",placeholder:t.text},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),t._v(" "),e("div",[e("label",[t._v("Icon (Token Logo)")]),t._v(" "),e("input",{staticClass:"pl-[25px]",attrs:{required:"",type:"file"},on:{change:t.handleFile}})]),t._v(" "),e("div",{staticClass:"flex flex-col items-center"},[e("span",{staticClass:"font-semibold underlined cursor-pointer",on:{click:function(e){return t.$router.push("/pages/".concat(t.id))}}},[t._v("\n        Visit Token Page\n      ")]),t._v(" "),e("button",{staticClass:"p-3 bg-yellow-400 text-black rounded-xl mt-5",attrs:{type:"submit"}},[t._v("Submit")])])]),t._v(" "),e("UICard",{staticClass:"fixed right-[80px]",attrs:{data:t.data}}),t._v(" "),t.isModalActive?e("div",{staticClass:"modal"},[e("span",{class:{"text-red-500":"danger"===t.modalValue.status,"text-yellow-600":"warning"===t.modalValue.status,"text-green-500":"primary"===t.modalValue.status}},[t._v("\n      "+t._s(t.modalValue.text)+"\n    ")])]):t._e()],1)}),[],!1,null,"1c9b8e48",null);e.default=component.exports;installComponents(component,{UICard:r(308).default})}}]);