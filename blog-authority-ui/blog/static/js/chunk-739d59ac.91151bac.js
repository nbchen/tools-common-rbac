(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-739d59ac","chunk-f9ab7bf0","chunk-4dcfab20"],{"05b0":function(e,t,n){"use strict";var i=n("db72"),o=n("9256"),c={allTree:{method:"GET",url:"/authority/menu/tree"},save:{method:"POST",url:"/authority/menu"},update:{method:"PUT",url:"/authority/menu"},delete:{method:"DELETE",url:"/authority/menu"}};t["a"]={allTree:function(e){return Object(o["a"])(Object(i["a"])({},c.allTree,{formData:!0,data:e}))},save:function(e){return Object(o["a"])(Object(i["a"])({},c.save,{data:e}))},update:function(e){return Object(o["a"])(Object(i["a"])({},c.update,{data:e}))},delete:function(e){return Object(o["a"])(Object(i["a"])({},c.delete,{data:e}))}}},"09f4":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),Math.easeInOutQuad=function(e,t,n,i){return e/=i/2,e<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)};var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function o(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function c(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function r(e,t,n){var r=c(),s=e-r,a=20,l=0;t="undefined"===typeof t?500:t;var u=function e(){l+=a;var c=Math.easeInOutQuad(l,r,s,t);o(c),l<t?i(e):n&&"function"===typeof n&&n()};u()}},"0a49":function(e,t,n){var i=n("9b43"),o=n("626a"),c=n("4bf8"),r=n("9def"),s=n("cd1c");e.exports=function(e,t){var n=1==e,a=2==e,l=3==e,u=4==e,d=6==e,m=5==e||d,h=t||s;return function(t,s,p){for(var f,v,b=c(t),g=o(b),y=i(s,p,3),k=r(g.length),$=0,_=n?h(t,k):a?h(t,0):void 0;k>$;$++)if((m||$ in g)&&(f=g[$],v=y(f,$,b),e))if(n)_[$]=v;else if(v)switch(e){case 3:return!0;case 5:return f;case 6:return $;case 2:_.push(f)}else if(u)return!1;return d?-1:l||u?u:_}}},"20d6":function(e,t,n){"use strict";var i=n("5ca1"),o=n("0a49")(6),c="findIndex",r=!0;c in[]&&Array(1)[c]((function(){r=!1})),i(i.P+i.F*r,"Array",{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(c)},"20db":function(e,t,n){"use strict";var i=n("db72"),o=n("9256"),c={page:{method:"GET",url:"/authority/resource/page"},save:{method:"POST",url:"/authority/resource"},update:{method:"PUT",url:"/authority/resource"},delete:{method:"DELETE",url:"/authority/resource"}};t["a"]={page:function(e){return Object(o["a"])(Object(i["a"])({},c.page,{formData:!0,data:e}))},save:function(e){return Object(o["a"])(Object(i["a"])({},c.save,{data:e}))},update:function(e){return Object(o["a"])(Object(i["a"])({},c.update,{data:e}))},delete:function(e){return Object(o["a"])(Object(i["a"])({},c.delete,{data:e}))}}},2186:function(e,t,n){"use strict";var i=n("b403"),o=n.n(i);o.a},2472:function(e,t,n){"use strict";var i=n("415f"),o=n.n(i);o.a},"40ee":function(e,t,n){"use strict";var i=n("dcbe"),o=n.n(i);o.a},"415f":function(e,t,n){},4434:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{"close-on-click-modal":!1,title:e.$t("table.menu.icon"),visible:e.isVisible,width:e.width,top:"50px"},on:{"update:visible":function(t){e.isVisible=t}}},[n("el-input",{staticClass:"filter-item search-item",attrs:{clearable:"",placeholder:"icon"},nativeOn:{keyup:function(t){return e.searchIcon(t)}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),n("el-tabs",{staticStyle:{"margin-top":"-1rem"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:e.$t("common.tab.common"),name:"first"}},[n("ul",e._l(e.icons.commonIcons,(function(t){return n("li",{key:t,staticClass:"icons-item"},[n("span",{class:{active:e.activeIndex===t}},[n("el-icon",{class:t,attrs:{title:t},nativeOn:{click:function(n){return e.chooseIcon(t)},dblclick:function(t){return e.confirm(t)}}})],1),e._v(" "),n("p",[e._v(e._s(t))])])})),0)]),e._v(" "),n("el-tab-pane",{attrs:{label:e.$t("common.tab.directivity"),name:"second"}},[n("ul",e._l(e.icons.directivityIcons,(function(t){return n("li",{key:t},[n("span",{class:{active:e.activeIndex===t}},[n("el-icon",{class:t,attrs:{title:t},nativeOn:{click:function(n){return e.chooseIcon(t)},dblclick:function(t){return e.confirm(t)}}})],1),e._v(" "),n("p",[e._v(e._s(t))])])})),0)]),e._v(" "),n("el-tab-pane",{attrs:{label:e.$t("common.tab.solid"),name:"third"}},[n("ul",e._l(e.icons.solidIcons,(function(t){return n("li",{key:t},[n("span",{class:{active:e.activeIndex===t}},[n("el-icon",{class:t,attrs:{title:t},nativeOn:{click:function(n){return e.chooseIcon(t)},dblclick:function(t){return e.confirm(t)}}})],1),e._v(" "),n("p",[e._v(e._s(t))])])})),0)]),e._v(" "),n("el-tab-pane",{attrs:{label:e.$t("common.tab.food"),name:"fourth"}},[n("ul",e._l(e.icons.foodIcons,(function(t){return n("li",{key:t},[n("span",{class:{active:e.activeIndex===t}},[n("el-icon",{class:t,attrs:{title:t},nativeOn:{click:function(n){return e.chooseIcon(t)},dblclick:function(t){return e.confirm(t)}}})],1),e._v(" "),n("p",[e._v(e._s(t))])])})),0)])],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{plain:"",type:"warning"},on:{click:function(t){e.isVisible=!1}}},[e._v(e._s(e.$t("common.cancel")))]),e._v(" "),n("el-button",{attrs:{plain:"",type:"primary"},on:{click:e.confirm}},[e._v(e._s(e.$t("common.confirm")))])],1)],1)},o=[],c=(n("7f7f"),["el-icon-eleme","el-icon-delete","el-icon-setting","el-icon-user","el-icon-phone-outline","el-icon-more-outline","el-icon-star-off","el-icon-goods","el-icon-warning-outline","el-icon-zoom-in","el-icon-zoom-out","el-icon-remove-outline","el-icon-circle-plus-outline","el-icon-circle-check","el-icon-circle-close","el-icon-help","el-icon-minus","el-icon-plus","el-icon-check","el-icon-close","el-icon-picture-outline","el-icon-picture-outline-round","el-icon-upload2","el-icon-download","el-icon-camera","el-icon-video-camera","el-icon-bell","el-icon-video-pause","el-icon-video-play","el-icon-refresh","el-icon-refresh-right","el-icon-refresh-left","el-icon-finished","el-icon-loading","el-icon-view","el-icon-c-scale-to-original","el-icon-date","el-icon-edit","el-icon-edit-outline","el-icon-folder","el-icon-folder-opened","el-icon-folder-add","el-icon-folder-remove","el-icon-folder-delete","el-icon-folder-checked","el-icon-tickets","el-icon-document-remove","el-icon-document-delete","el-icon-document-copy","el-icon-document-checked","el-icon-document","el-icon-document-add","el-icon-printer","el-icon-paperclip","el-icon-takeaway-box","el-icon-search","el-icon-monitor","el-icon-attract","el-icon-mobile","el-icon-scissors","el-icon-umbrella","el-icon-headset","el-icon-brush","el-icon-mouse","el-icon-coordinate","el-icon-magic-stick","el-icon-reading","el-icon-data-line","el-icon-data-board","el-icon-pie-chart","el-icon-data-analysis","el-icon-collection-tag","el-icon-film","el-icon-suitcase","el-icon-suitcase-1","el-icon-receiving","el-icon-collection","el-icon-files","el-icon-notebook-1","el-icon-notebook-2","el-icon-toilet-paper","el-icon-office-building","el-icon-school","el-icon-table-lamp","el-icon-house","el-icon-no-smoking","el-icon-smoking","el-icon-shopping-cart-full","el-icon-shopping-cart-1","el-icon-shopping-cart-2","el-icon-shopping-bag-1","el-icon-shopping-bag-2","el-icon-sold-out","el-icon-sell","el-icon-present","el-icon-box","el-icon-bank-card","el-icon-money","el-icon-coin","el-icon-wallet","el-icon-discount","el-icon-price-tag","el-icon-news","el-icon-guide","el-icon-male","el-icon-female","el-icon-thumb","el-icon-cpu","el-icon-link","el-icon-connection","el-icon-open","el-icon-turn-off","el-icon-set-up","el-icon-chat-round","el-icon-chat-line-round","el-icon-chat-square","el-icon-chat-dot-round","el-icon-chat-dot-square","el-icon-chat-line-square","el-icon-message","el-icon-postcard","el-icon-position","el-icon-turn-off-microphone","el-icon-microphone","el-icon-close-notification","el-icon-bangzhu","el-icon-time","el-icon-odometer","el-icon-crop","el-icon-aim","el-icon-switch-button","el-icon-full-screen","el-icon-copy-document","el-icon-mic","el-icon-stopwatch","el-icon-medal-1","el-icon-medal","el-icon-trophy","el-icon-trophy-1","el-icon-first-aid-kit","el-icon-discover","el-icon-place","el-icon-location-outline","el-icon-location-information","el-icon-add-location","el-icon-delete-location","el-icon-map-location","el-icon-alarm-clock","el-icon-timer","el-icon-watch-1","el-icon-watch","el-icon-lock","el-icon-unlock","el-icon-key","el-icon-service","el-icon-mobile-phone","el-icon-bicycle","el-icon-truck","el-icon-ship","el-icon-basketball","el-icon-football","el-icon-soccer","el-icon-baseball"]),r=["el-icon-d-caret","el-icon-caret-left","el-icon-caret-right","el-icon-caret-bottom","el-icon-caret-top","el-icon-bottom-left","el-icon-bottom-right","el-icon-back","el-icon-right","el-icon-bottom","el-icon-top","el-icon-top-left","el-icon-top-right","el-icon-arrow-left","el-icon-arrow-right","el-icon-arrow-down","el-icon-arrow-up","el-icon-d-arrow-left","el-icon-d-arrow-right","el-icon-sort","el-icon-sort-up","el-icon-sort-down","el-icon-rank"],s=["el-icon-question","el-icon-info","el-icon-remove","el-icon-circle-plus","el-icon-success","el-icon-error","el-icon-platform-eleme","el-icon-delete-solid","el-icon-s-tools","el-icon-user-solid","el-icon-phone","el-icon-star-on","el-icon-s-goods","el-icon-warning","el-icon-s-help","el-icon-picture","el-icon-upload","el-icon-camera-solid","el-icon-video-camera-solid","el-icon-message-solid","el-icon-s-cooperation","el-icon-s-order","el-icon-s-platform","el-icon-s-fold","el-icon-s-unfold","el-icon-s-operation","el-icon-s-promotion","el-icon-s-home","el-icon-s-release","el-icon-s-ticket","el-icon-s-management","el-icon-s-open","el-icon-s-shop","el-icon-s-marketing","el-icon-s-flag","el-icon-s-comment","el-icon-s-finance","el-icon-s-claim","el-icon-s-custom","el-icon-s-opportunity","el-icon-s-data","el-icon-s-check","el-icon-s-grid","el-icon-menu","el-icon-share","el-icon-d-caret","el-icon-caret-left","el-icon-caret-right","el-icon-caret-bottom","el-icon-caret-top","el-icon-location"],a=["el-icon-dish","el-icon-dish-1","el-icon-food","el-icon-chicken","el-icon-fork-spoon","el-icon-knife-fork","el-icon-burger","el-icon-tableware","el-icon-sugar","el-icon-dessert","el-icon-ice-cream","el-icon-hot-water","el-icon-water-cup","el-icon-coffee-cup","el-icon-cold-drink","el-icon-goblet","el-icon-goblet-full","el-icon-goblet-square","el-icon-goblet-square-full","el-icon-refrigerator","el-icon-grape","el-icon-watermelon","el-icon-cherry","el-icon-apple","el-icon-pear","el-icon-orange","el-icon-coffee","el-icon-ice-tea","el-icon-ice-drink","el-icon-milk-tea","el-icon-potato-strips","el-icon-lollipop","el-icon-ice-cream-square","el-icon-ice-cream-round"],l={name:"Icons",props:{dialogVisible:{type:Boolean,default:!1}},data:function(){return{name:"",icons:{commonIcons:c,directivityIcons:r,solidIcons:s,foodIcons:a},activeIndex:"",choosedIcon:"",activeName:"first",screenWidth:0,width:this.initWidth()}},computed:{isVisible:{get:function(){return this.dialogVisible},set:function(){this.close()}}},mounted:function(){var e=this;window.onresize=function(){return function(){e.width=e.initWidth()}()}},methods:{initWidth:function(){return this.screenWidth=document.body.clientWidth,this.screenWidth<991?"90%":this.screenWidth<1400?"60%":"800px"},close:function(){this.$emit("close"),this.activeName="first",this.choosedIcon=this.activeIndex=""},chooseIcon:function(e){this.activeIndex=e,this.choosedIcon=e},confirm:function(){this.choosedIcon?(this.$emit("choose",this.choosedIcon),this.activeName="first",this.choosedIcon=this.activeIndex=""):this.$message({message:this.$t("tips.chooseNothing"),type:"warning"})},searchIcon:function(){var e=this;""===this.name.trim()&&(this.icons.commonIcons=c,this.icons.directivityIcons=r,this.icons.solidIcons=s,this.icons.foodIcons=a,this.activeName="first");var t=c.filter((function(t){return-1!==t.indexOf(e.name)})),n=r.filter((function(t){return-1!==t.indexOf(e.name)})),i=s.filter((function(t){return-1!==t.indexOf(e.name)})),o=a.filter((function(t){return-1!==t.indexOf(e.name)}));this.icons.commonIcons=t,this.icons.directivityIcons=n,this.icons.solidIcons=i,this.icons.foodIcons=o,t.length>0?this.activeName="first":n.length>0?this.activeName="second":i.length>0?this.activeName="third":o.length>0?this.activeName="fourth":this.activeName="first"}}},u=l,d=(n("9840"),n("2877")),m=Object(d["a"])(u,i,o,!1,null,"9fe86db4",null);t["default"]=m.exports},8566:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{"close-on-click-modal":!1,title:e.title,type:e.type,visible:e.isVisible,width:e.width,top:"50px"},on:{"update:visible":function(t){e.isVisible=t}}},[n("el-form",{ref:"form",attrs:{model:e.resource,rules:e.rules,"label-position":"right","label-width":"100px"}},[n("el-form-item",{attrs:{label:e.$t("table.resource.code"),prop:"code"}},[n("el-input",{attrs:{disabled:"edit"===e.type},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitForm(t)}},model:{value:e.resource.code,callback:function(t){e.$set(e.resource,"code",t)},expression:"resource.code"}}),e._v(" "),n("p",{staticClass:"note"},[e._v("建议使用:作为分隔符，并以view、add、update、delete、export、import、download、upload等关键词结尾")]),e._v(" "),n("p",{staticClass:"note"},[e._v("如：menu:add、 resource:view、 file:upload")])],1),e._v(" "),n("el-form-item",{attrs:{label:e.$t("table.resource.name"),prop:"name"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitForm(t)}}},[n("el-input",{model:{value:e.resource.name,callback:function(t){e.$set(e.resource,"name",t)},expression:"resource.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:e.$t("table.resource.describe"),prop:"describe"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitForm(t)}}},[n("el-input",{model:{value:e.resource.describe,callback:function(t){e.$set(e.resource,"describe",t)},expression:"resource.describe"}})],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{plain:"",type:"warning"},on:{click:function(t){e.isVisible=!1}}},[e._v(e._s(e.$t("common.cancel")))]),e._v(" "),n("el-button",{attrs:{plain:"",type:"primary"},on:{click:e.submitForm}},[e._v(e._s(e.$t("common.confirm")))])],1)],1)},o=[],c=n("db72"),r=n("20db"),s={name:"ResourceEdit",components:{},props:{dialogVisible:{type:Boolean,default:!1},type:{type:String,default:"add"}},data:function(){var e=this;return{resource:this.initResource(),screenWidth:0,width:this.initWidth(),rules:{code:[{required:!0,message:this.$t("rules.require"),trigger:"blur"},{min:1,max:255,message:this.$t("rules.range4to10"),trigger:"blur"},{validator:function(t,n,i){e.resource.id,i()},trigger:"blur"}],name:{required:!0,message:this.$t("rules.require"),trigger:"blur"}}}},computed:{isVisible:{get:function(){return this.dialogVisible},set:function(){this.close(),this.reset()}},title:function(){return"add"===this.type?this.$t("common.add"):this.$t("common.edit")}},watch:{},mounted:function(){var e=this;window.onresize=function(){return function(){e.width=e.initWidth()}()}},methods:{initResource:function(){return{id:"",name:"",code:"",describe:""}},initWidth:function(){return this.screenWidth=document.body.clientWidth,this.screenWidth<991?"90%":this.screenWidth<1400?"45%":"800px"},setResource:function(e){var t=this;e&&(t.resource=Object(c["a"])({},e))},close:function(){this.$emit("close")},reset:function(){this.$refs.form.clearValidate(),this.$refs.form.resetFields(),this.resource=this.initResource()},submitForm:function(){var e=this;this.$refs.form.validate((function(t){if(!t)return!1;e.editSubmit()}))},editSubmit:function(){var e=this;"add"===e.type?e.save():e.update()},save:function(){var e=this;r["a"].save(this.resource).then((function(t){var n=t.data;n.isSuccess&&(e.isVisible=!1,e.$message({message:e.$t("tips.createSuccess"),type:"success"}),e.$emit("success"))}))},update:function(){var e=this;r["a"].update(this.resource).then((function(t){var n=t.data;n.isSuccess&&(e.isVisible=!1,e.$message({message:e.$t("tips.updateSuccess"),type:"success"}),e.$emit("success"))}))}}},a=s,l=(n("2472"),n("2877")),u=Object(l["a"])(a,i,o,!1,null,"cc661b62",null);t["default"]=u.exports},9840:function(e,t,n){"use strict";var i=n("b3f8"),o=n.n(i);o.a},a6a3:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu"},[n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{sm:7,xs:24}},[n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container-menu"},[n("el-input",{staticClass:"filter-item search-item",attrs:{placeholder:e.$t("table.menu.name"),clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)}},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),n("el-button",{staticStyle:{"background-color":"#E05635",color:"#fff","border-radius":"5px","border-color":"#DCDFE6"},on:{click:e.search}},[e._v(e._s(e.$t("table.search"))+" ")]),e._v(" "),n("el-button",{staticStyle:{"background-color":"#fff",color:"#606266","border-radius":"5px","border-color":"#DCDFE6"},on:{click:e.reset}},[e._v(e._s(e.$t("table.reset")))]),e._v(" "),n("el-tooltip",{staticClass:"item",staticStyle:{"margin-top":"10px"},attrs:{content:"新增/删除时，请先勾选菜单",effect:"dark",placement:"right"}},[n("el-dropdown",{directives:[{name:"has-any-permission",rawName:"v-has-any-permission",value:["menu:add","menu:delete","menu:export"],expression:"['menu:add','menu:delete','menu:export']"}],attrs:{trigger:"click"}},[n("el-button",{staticStyle:{height:"40px","margin-top":"6px","background-color":"#fff",color:"#606266","border-color":"#DCDFE6"}},[e._v("\n                "+e._s(e.$t("table.more"))+"\n                "),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{directives:[{name:"has-permission",rawName:"v-has-permission",value:["menu:add"],expression:"['menu:add']"}],nativeOn:{click:function(t){return e.add(t)}}},[e._v(e._s(e.$t("table.add")))]),e._v(" "),n("el-dropdown-item",{directives:[{name:"has-permission",rawName:"v-has-permission",value:["menu:delete"],expression:"['menu:delete']"}],nativeOn:{click:function(t){return e.deleteMenu(t)}}},[e._v(e._s(e.$t("table.delete")))]),e._v(" "),n("el-dropdown-item",{directives:[{name:"has-permission",rawName:"v-has-permission",value:["menu:export"],expression:"['menu:export']"}],nativeOn:{click:function(t){return e.exportExcel(t)}}},[e._v(e._s(e.$t("table.export")))])],1)],1)],1)],1),e._v(" "),n("commonTree",{ref:"menuTree",attrs:{"tree-data":e.menuTree},on:{nodeClick:e.nodeClick},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticClass:"tree-icon"},[n("i",{class:t.data.icon?t.data.icon:"el-icon-document"})]),e._v(" "),n("span",{staticClass:"tree-icon"},[n("el-badge",{staticClass:"status-item",attrs:{type:t.data.isEnable?"success":"danger","is-dot":""}})],1)]}}])})],1)]),e._v(" "),n("el-col",{attrs:{sm:8,xs:24}},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",staticStyle:{"background-color":"'#FCFBFF"},attrs:{slot:"header"},slot:"header"},[n("span",[e._v(e._s(""===e.menu.id?this.$t("common.add"):this.$t("common.edit")))])]),e._v(" "),n("div",[n("el-form",{ref:"form",attrs:{model:e.menu,rules:e.rules,"label-position":"right","label-width":"100px"}},[n("el-form-item",{attrs:{label:e.$t("table.menu.parentId"),prop:"parentId"}},[n("el-tooltip",{staticClass:"item",attrs:{content:e.$t("tips.topId"),effect:"dark",placement:"right"}},[n("el-input",{attrs:{readonly:""},model:{value:e.menu.parentId,callback:function(t){e.$set(e.menu,"parentId",t)},expression:"menu.parentId"}})],1)],1),e._v(" "),n("el-form-item",{attrs:{label:e.$t("table.menu.name"),prop:"name"}},[n("el-input",{model:{value:e.menu.name,callback:function(t){e.$set(e.menu,"name",t)},expression:"menu.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:e.$t("table.menu.path"),prop:"path"}},[n("el-input",{nativeOn:{keyup:function(t){return e.menuPath(t)}},model:{value:e.menu.path,callback:function(t){e.$set(e.menu,"path",t)},expression:"menu.path"}}),e._v(" "),n("span",[e._v(e._s(e.menuComponent))])],1),e._v(" "),n("el-form-item",{attrs:{label:e.$t("table.menu.icon"),prop:"icon"}},[n("el-input",{model:{value:e.menu.icon,callback:function(t){e.$set(e.menu,"icon",t)},expression:"menu.icon"}},[n("el-button",{staticStyle:{"padding-left":"0"},attrs:{slot:"append",icon:"el-icon-brush"},on:{click:e.chooseIcons},slot:"append"})],1)],1),e._v(" "),n("el-row",[n("el-col",{attrs:{span:17}},[n("el-form-item",{attrs:{label:e.$t("table.status"),prop:"isEnable"}},[n("el-switch",{attrs:{"active-text":e.$t("common.status.valid"),"inactive-text":e.$t("common.status.invalid")},model:{value:e.menu.isEnable,callback:function(t){e.$set(e.menu,"isEnable",t)},expression:"menu.isEnable"}})],1)],1),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-form-item",{attrs:{label:e.$t("table.menu.isPublic"),prop:"isPublic"}},[n("el-switch",{attrs:{"active-text":e.$t("common.yes"),"inactive-text":e.$t("common.no")},model:{value:e.menu.isPublic,callback:function(t){e.$set(e.menu,"isPublic",t)},expression:"menu.isPublic"}})],1)],1)],1),e._v(" "),n("el-form-item",{attrs:{label:e.$t("table.menu.sortValue"),prop:"sortValue"}},[n("el-input-number",{attrs:{max:100,min:0},on:{change:e.handleNumChange},model:{value:e.menu.sortValue,callback:function(t){e.$set(e.menu,"sortValue",t)},expression:"menu.sortValue"}})],1),e._v(" "),n("el-form-item",{attrs:{label:e.$t("table.menu.group"),prop:"group"}},[n("el-tooltip",{staticClass:"item",attrs:{content:"用于区分多组菜单",effect:"dark",placement:"right"}},[n("el-input",{model:{value:e.menu.group,callback:function(t){e.$set(e.menu,"group",t)},expression:"menu.group"}})],1)],1),e._v(" "),n("el-form-item",{attrs:{label:e.$t("table.menu.describe"),prop:"describe"}},[n("el-input",{model:{value:e.menu.describe,callback:function(t){e.$set(e.menu,"describe",t)},expression:"menu.describe"}})],1)],1)],1)]),e._v(" "),n("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"-2rem"}},[n("el-row",[n("el-col",{staticStyle:{"text-align":"center"},attrs:{span:24}},[n("el-button",{staticStyle:{"background-color":"#E05635",color:"#fff"},on:{click:e.submit}},[e._v(e._s(""===e.menu.id?this.$t("common.add"):this.$t("common.edit")))])],1)],1)],1)],1),e._v(" "),n("el-col",{attrs:{sm:9,xs:24}},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-input",{staticClass:"filter-item search-item",staticStyle:{width:"155px"},attrs:{placeholder:e.$t("table.resource.code")},model:{value:e.resourceQueryParams.code,callback:function(t){e.$set(e.resourceQueryParams,"code",t)},expression:"resourceQueryParams.code"}}),e._v(" "),n("el-input",{staticClass:"filter-item search-item",staticStyle:{width:"155px"},attrs:{placeholder:e.$t("table.resource.name")},model:{value:e.resourceQueryParams.name,callback:function(t){e.$set(e.resourceQueryParams,"name",t)},expression:"resourceQueryParams.name"}}),e._v(" "),n("el-button",{staticStyle:{"background-color":"#E05635",color:"#fff","border-radius":"5px","border-color":"#DCDFE6"},on:{click:e.resourceSearch}},[e._v(e._s(e.$t("table.search")))]),e._v(" "),n("el-dropdown",{directives:[{name:"has-any-permission",rawName:"v-has-any-permission",value:["resource:add","resource:delete"],expression:"['resource:add','resource:delete']"}],staticClass:"filter-item",attrs:{trigger:"click"}},[n("el-button",{staticStyle:{height:"40px","margin-top":"6px","background-color":"#fff",color:"#606266","border-color":"#DCDFE6"}},[e._v("\n                "+e._s(e.$t("table.more"))+"\n                "),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{directives:[{name:"has-permission",rawName:"v-has-permission",value:["resource:add"],expression:"['resource:add']"}],attrs:{disabled:!e.menu.id},nativeOn:{click:function(t){return e.resourceAdd(t)}}},[e._v(e._s(e.$t("table.add")))]),e._v(" "),n("el-dropdown-item",{directives:[{name:"has-permission",rawName:"v-has-permission",value:["resource:delete"],expression:"['resource:delete']"}],nativeOn:{click:function(t){return e.resourceBatchDelete(t)}}},[e._v(e._s(e.$t("table.delete")))])],1)],1)],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.resourceLoading,expression:"resourceLoading"}],key:e.resourceTableKey,ref:"resourceTable",staticStyle:{width:"100%"},attrs:{data:e.resourceTableData.records,fit:"","header-cell-style":{background:"#FCFBFF",border:"0"}},on:{"selection-change":e.onResourceSelectChange,"sort-change":e.resourceSortChange}},[n("el-table-column",{attrs:{align:"center",type:"selection",width:"40px"}}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("table.resource.code"),"show-overflow-tooltip":!0,align:"center",prop:"code"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.code))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("table.resource.name"),"show-overflow-tooltip":!0,align:"center",prop:"name"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.name))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:e.$t("table.operation"),align:"center","class-name":"small-padding fixed-width",width:"100px"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[n("i",{directives:[{name:"hasPermission",rawName:"v-hasPermission",value:["resource:update"],expression:"['resource:update']"}],staticStyle:{color:"#009EFF"},on:{click:function(t){return e.resourceEdit(i)}}},[e._v("修改")]),e._v(" "),n("el-divider",{attrs:{direction:"vertical"}}),e._v(" "),n("i",{directives:[{name:"hasPermission",rawName:"v-hasPermission",value:["resource:delete"],expression:"['resource:delete']"}],staticStyle:{color:"#E05635"},on:{click:function(t){return e.resourceSingleDelete(i)}}},[e._v("删除")]),e._v(" "),n("el-link",{directives:[{name:"has-no-permission",rawName:"v-has-no-permission",value:["resource:update","resource:delete"],expression:"['resource:update','resource:delete']"}],staticClass:"no-perm"},[e._v(e._s(e.$t("tips.noPermission")))])]}}])})],1),e._v(" "),n("pagination",{directives:[{name:"show",rawName:"v-show",value:e.resourceTableData.total>0,expression:"resourceTableData.total>0"}],attrs:{limit:e.resourcePagination.size,page:e.resourcePagination.current,total:Number(e.resourceTableData.total)},on:{"update:limit":function(t){return e.$set(e.resourcePagination,"size",t)},"update:page":function(t){return e.$set(e.resourcePagination,"current",t)},pagination:e.resourceFetch}})],1)])],1)],1),e._v(" "),n("Icons",{attrs:{"dialog-visible":e.iconVisible},on:{choose:e.chooseIcon,close:function(t){e.iconVisible=!1}}}),e._v(" "),n("resource-edit",{ref:"resourceEdit",attrs:{"dialog-visible":e.dialog.isVisible,type:e.dialog.type},on:{close:e.resourceEditClose,success:e.resourceEditSuccess}})],1)},o=[],c=(n("7f7f"),n("db72")),r=(n("f559"),n("20d6"),n("aef6"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"common-tree"},[n("el-tree",{ref:e.treeRef,attrs:{data:e.treeData,"check-strictly":e.checkStrictly,"show-checkbox":"",accordion:!1,"node-key":"id","default-expand-all":"","highlight-current":!0,"expand-on-click-node":!1,"filter-node-method":e.filterNodeMethod},on:{"check-change":e.checkChange,"node-click":e.nodeClick,"current-change":e.currentChange},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.data,o=t.node;return n("span",{staticClass:"custom-tree-node"},[n("span",{staticStyle:{"margin-right":"15px"}},[e._v(e._s(i.name))]),e._v(" "),e._t("default",null,{data:i,node:o})],2)}}],null,!0)})],1)}),s=[],a={props:{treeRef:{type:String,default:"treeRef"},treeData:{type:Array,required:!0,default:function(){return[]}},checkStrictly:{type:Boolean,default:function(){return!0}},opeBtns:{type:Array,default:function(){return["add","edit","remove"]}}},methods:{modify:function(e,t,n){window.event.stopPropagation(),this.$emit(e,t,n)},checkChange:function(e,t,n){this.$emit("checkChange",e,t,n)},nodeClick:function(e,t,n){this.$emit("nodeClick",e,t,n)},currentChange:function(e,t){this.$emit("currentChange",e,t)},filterNodeMethod:function(e,t){return!e||-1!==t.label.indexOf(e)}}},l=a,u=(n("2186"),n("2877")),d=Object(u["a"])(l,r,s,!1,null,null,null),m=d.exports,h=n("4434"),p=n("8566"),f=n("333d"),v=n("05b0"),b=n("20db"),g={name:"MenuManage",components:{Icons:h["default"],commonTree:m,Pagination:f["a"],ResourceEdit:p["default"]},data:function(){var e=this;return{dialog:{isVisible:!1,type:"add"},iconVisible:!1,menuTree:[],name:"",menu:this.initMenu(),resourceQueryParams:{menuId:null},resourceTableKey:0,resourceSort:{},resourceLoading:!1,resourceSelection:[],resourceTableData:{total:0},resourcePagination:{size:10,current:1},rules:{name:[{required:!0,message:this.$t("rules.require"),trigger:"blur"},{min:1,max:255,message:this.$t("rules.range2to10"),trigger:"blur"}],path:[{max:255,message:this.$t("rules.noMoreThan100"),trigger:"blur"},{required:!0,message:this.$t("rules.require"),trigger:"blur"},{validator:function(t,n,i){var o=e.isUrl(e.menu.path);"/"===n||!o&&n.endsWith("/")?i("请填写有效的路由地址"):i()},trigger:"blur"}]}}},computed:{menuComponent:function(){var e="";if(this.menu.path&&"/"!==this.menu.path){var t=this.isUrl(this.menu.path);e=t?"跳转地址：".concat(this.menu.path):"前端组件：blog".concat(this.menu.path,"/Index.vue")}else e="前端组件：blog/Index.vue";return e}},watch:{"menu.path":function(){this.computedComponent()}},mounted:function(){this.initMenuTree()},methods:{isUrl:function(e){var t=["http://","/http://","https://","/https://","www.","/www."],n=t.findIndex((function(t){return e.startsWith(t)}));return n>=0},menuPath:function(){var e=this.isUrl(this.menu.path);e||this.menu.path.startsWith("/")?e&&this.menu.path.startsWith("/")&&(this.menu.path=this.menu.path.substr(1)):this.menu.path="/"+this.menu.path},computedComponent:function(){var e=this.isUrl(this.menu.path);e?this.menu.component="Layout":this.menu.path?this.menu.component="blog".concat(this.menu.path,"/Index"):this.menu.component="blog/Index"},initMenuTree:function(){var e=this;v["a"].allTree().then((function(t){var n=t.data;e.menuTree=n.data}))},initMenu:function(){return{id:"",name:"",describe:"",code:"",isPublic:!1,path:"",component:"",isEnable:!0,sortValue:"",parentId:0,icon:"",group:""}},exportExcel:function(){this.$message({message:"带完善",type:"success"})},nodeClick:function(e){this.menu=Object(c["a"])({},e),this.menu.name=this.menu.label,this.$refs.form.clearValidate(),this.resourceQueryParams.menuId=e.id,this.resourceSearch()},handleNumChange:function(e){this.menu.sortValue=e},chooseIcons:function(){this.iconVisible=!0},chooseIcon:function(e){this.menu.icon=e,this.iconVisible=!1},submit:function(){var e=this;this.$refs.form.validate((function(t){if(!t)return!1;e.menu.createTime=e.menu.updateTime=null,e.menu.id?e.update():e.save()}))},save:function(){var e=this;console.log(this.menu.component),v["a"].save(this.menu).then((function(t){var n=t.data;n.isSuccess&&e.$message({message:e.$t("tips.createSuccess"),type:"success"}),e.reset()}))},update:function(){var e=this;console.log(this.menu),v["a"].update(this.menu).then((function(t){var n=t.data;n.isSuccess&&e.$message({message:e.$t("tips.updateSuccess"),type:"success"}),e.reset()}))},reset:function(){this.initMenuTree(),this.name="",this.resetForm()},search:function(){this.$refs.menuTree.$refs.treeRef.filter(this.name)},add:function(){this.resetForm();var e=this.$refs.menuTree.$refs.treeRef.getCheckedKeys();e.length>1?this.$message({message:this.$t("tips.onlyChooseOne"),type:"warning"}):e.length>0?this.menu.parentId=e[0]:this.menu.parentId=0,this.resourceQueryParams.menuId=null,this.resourceReset()},deleteMenu:function(){var e=this,t=this.$refs.menuTree.$refs.treeRef.getCheckedKeys();0===t.length?this.$message({message:this.$t("tips.noNodeSelected"),type:"warning"}):this.$confirm(this.$t("tips.confirmDeleteNode"),this.$t("common.tips"),{confirmButtonText:this.$t("common.confirm"),cancelButtonText:this.$t("common.cancel"),type:"warning"}).then((function(){v["a"].delete({ids:t}).then((function(t){var n=t.data;n.isSuccess&&e.$message({message:e.$t("tips.deleteSuccess"),type:"success"}),e.reset(),e.resourceQueryParams.menuId=null,e.resourceReset()}))})).catch((function(){e.$refs.menuTree.$refs.treeRef.setCheckedKeys([])}))},resetForm:function(){this.$refs.form.clearValidate(),this.$refs.form.resetFields(),this.menu=this.initMenu()},resourceAdd:function(){this.dialog.type="add",this.dialog.isVisible=!0,this.$refs.resourceEdit.setResource({menuId:this.menu.id})},resourceEdit:function(e){this.dialog.type="edit",this.dialog.isVisible=!0,e.menuId=this.menu.id,this.$refs.resourceEdit.setResource(e)},resourceSingleDelete:function(e){this.$refs.resourceTable.toggleRowSelection(e,!0),this.resourceBatchDelete()},resourceBatchDelete:function(){var e=this;this.resourceSelection.length?this.$confirm(this.$t("tips.confirmDeleteNode"),this.$t("common.tips"),{confirmButtonText:this.$t("common.confirm"),cancelButtonText:this.$t("common.cancel"),type:"warning"}).then((function(){var t=e.resourceSelection.map((function(e){return e.id}));b["a"].delete({ids:t}).then((function(t){var n=t.data;n.isSuccess&&e.$message({message:e.$t("tips.deleteSuccess"),type:"success"}),e.resourceReset()}))})):this.$message({message:this.$t("tips.noDataSelected"),type:"warning"})},resourceReset:function(){this.resourceQueryParams={menuId:this.resourceQueryParams.menuId},this.resourceSort={},this.$refs.resourceTable.clearSort(),this.$refs.resourceTable.clearFilter(),this.resourceSearch()},resourceSearch:function(){this.resourceFetch(Object(c["a"])({},this.resourceQueryParams,{},this.resourceSort))},resourceFetch:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.size=this.resourcePagination.size,t.current=this.resourcePagination.current,t=Object(c["a"])({},this.resourceQueryParams,{},t),t.menuId?(this.resourceLoading=!0,b["a"].page(t).then((function(t){var n=t.data;e.resourceTableData=n.data,e.resourceLoading=!1}))):this.resourceTableData={}},resourceSortChange:function(e){this.resourceSort.field=e.prop,this.resourceSort.order=e.order,this.resourceSearch()},onResourceSelectChange:function(e){this.resourceSelection=e},resourceEditClose:function(){this.dialog.isVisible=!1},resourceEditSuccess:function(){this.resourceSearch()}}},y=g,k=(n("40ee"),Object(u["a"])(y,i,o,!1,null,null,null));t["default"]=k.exports},aef6:function(e,t,n){"use strict";var i=n("5ca1"),o=n("9def"),c=n("d2c8"),r="endsWith",s=""[r];i(i.P+i.F*n("5147")(r),"String",{endsWith:function(e){var t=c(this,e,r),n=arguments.length>1?arguments[1]:void 0,i=o(t.length),a=void 0===n?i:Math.min(o(n),i),l=String(e);return s?s.call(t,l,a):t.slice(a-l.length,a)===l}})},b3f8:function(e,t,n){},b403:function(e,t,n){},cd1c:function(e,t,n){var i=n("e853");e.exports=function(e,t){return new(i(e))(t)}},dcbe:function(e,t,n){},e853:function(e,t,n){var i=n("d3f4"),o=n("1169"),c=n("2b4c")("species");e.exports=function(e){var t;return o(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!o(t.prototype)||(t=void 0),i(t)&&(t=t[c],null===t&&(t=void 0))),void 0===t?Array:t}}}]);