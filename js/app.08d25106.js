(function(t){function a(a){for(var r,o,i=a[0],c=a[1],l=a[2],u=0,v=[];u<i.length;u++)o=i[u],s[o]&&v.push(s[o][0]),s[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(a);while(v.length)v.shift()();return n.push.apply(n,l||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],r=!0,i=1;i<e.length;i++){var c=e[i];0!==s[c]&&(r=!1)}r&&(n.splice(a--,1),t=o(o.s=e[0]))}return t}var r={},s={app:0},n=[];function o(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=r,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)o.d(e,r,function(a){return t[a]}.bind(null,r));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=a,i=i.slice();for(var l=0;l<i.length;l++)a(i[l]);var d=c;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"2b56":function(t,a,e){"use strict";var r=e("f6b3"),s=e.n(r);s.a},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("f751"),e("097d");var r=e("2b0e"),s=e("bb71");e("da64");r["a"].use(s["a"],{iconfont:"md"});var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",{staticClass:"grey lighten-4"},[e("Navbar"),e("v-content",{staticClass:"mx-5 mb-5"},[e("router-view")],1)],1)},o=[],i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",[e("v-snackbar",{attrs:{timeout:4e3,top:"",color:"success"},model:{value:t.snackbar,callback:function(a){t.snackbar=a},expression:"snackbar"}},[e("span",[t._v("Awesome! You added a new project.")]),e("v-btn",{attrs:{color:"white",flat:""},on:{click:function(a){t.snackbar=!1}}},[t._v("Close")])],1),e("v-toolbar",{attrs:{color:"#DCDCDC",app:""}},[e("v-toolbar-side-icon",{attrs:{color:"#6698FF"},on:{click:function(a){t.drawer=!t.drawer}}}),e("v-toolbar-title",{staticClass:"black--text"},[e("span",[t._v("Algopeida:")]),e("span",{staticClass:"font-weight-light"},[t._v(" Repository of Data Science solutions ")])]),e("v-spacer"),e("v-menu",{attrs:{"offset-y":""}},[e("v-btn",{attrs:{slot:"activator",flat:"",color:"black"},slot:"activator"},[e("v-icon",{attrs:{left:""}},[t._v("expand_more")]),e("span",[t._v("Menu")])],1),e("v-list",t._l(t.links,function(a){return e("v-list-tile",{key:a.text,attrs:{router:"",to:a.route}},[e("v-list-tile-title",[t._v(t._s(a.text))])],1)}),1)],1)],1),e("v-navigation-drawer",{staticClass:"primary",attrs:{app:""},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},[e("v-layout",{attrs:{column:"","align-center":""}},[e("v-flex",{staticClass:"mt-5"},[e("v-avatar",{attrs:{size:"100"}},[e("img",{staticClass:"text-lg-center",attrs:{src:"/company.png"}})]),e("p",{staticClass:"white--text subheading mt-3"},[t._v("Titan Company")])],1),e("v-flex",{staticClass:"mt-4 mb-3"},[e("Popup",{on:{projectAdded:function(a){t.snackbar=!0}}})],1)],1),e("v-list",t._l(t.links,function(a){return e("v-list-tile",{key:a.text,attrs:{router:"",to:a.route}},[e("v-list-tile-action",[e("v-icon",{staticClass:"white--text"},[t._v(t._s(a.icon))])],1),e("v-list-tile-content",[e("v-list-tile-title",{staticClass:"white--text"},[t._v(t._s(a.text))])],1)],1)}),1)],1)],1)},c=[],l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-dialog",{attrs:{"full-width":""},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("v-btn",{staticClass:"success",attrs:{slot:"activator",flat:""},slot:"activator"},[t._v("Add New Project")]),e("v-card",[e("v-card-title",[e("h1",[t._v("Add a New Project")])]),e("v-card-text",[e("v-form",{ref:"form",staticClass:"px-1"},[e("v-text-field",{attrs:{label:"Project_id","prepend-icon":"edit"},model:{value:t.project_id,callback:function(a){t.project_id=a},expression:"project_id"}}),e("v-text-field",{attrs:{label:"Title","prepend-icon":"edit"},model:{value:t.title,callback:function(a){t.title=a},expression:"title"}}),e("v-textarea",{attrs:{label:"Objective","prepend-icon":"edit"},model:{value:t.objective,callback:function(a){t.objective=a},expression:"objective"}}),e("v-textarea",{attrs:{label:"Approach","prepend-icon":"edit"},model:{value:t.approach,callback:function(a){t.approach=a},expression:"approach"}}),e("v-text-field",{attrs:{label:"Algorithms","prepend-icon":"edit"},model:{value:t.algorithms,callback:function(a){t.algorithms=a},expression:"algorithms"}}),e("v-text-field",{attrs:{label:"Person","prepend-icon":"edit"},model:{value:t.person,callback:function(a){t.person=a},expression:"person"}}),e("v-text-field",{attrs:{label:"Status","prepend-icon":"edit"},model:{value:t.status,callback:function(a){t.status=a},expression:"status"}}),e("v-menu",{attrs:{"close-on-content-click":!1},model:{value:t.menu,callback:function(a){t.menu=a},expression:"menu"}},[e("v-text-field",{attrs:{slot:"activator",value:t.formattedDate,clearable:"",label:"Due date","prepend-icon":"date_range"},slot:"activator"}),e("v-date-picker",{on:{change:function(a){t.menu=!1}},model:{value:t.due,callback:function(a){t.due=a},expression:"due"}})],1),e("v-spacer"),e("v-btn",{staticClass:"success mx-5 mt-3",attrs:{flat:"",loading:t.loading},on:{click:t.submit}},[t._v("Add Project")]),e("v-btn",{staticClass:"warning mx-5 mt-3",attrs:{flat:"",loading:t.loading},on:{click:t.clear}},[t._v("Reset Form")])],1)],1)],1)],1)},d=[],u=e("70f2"),v=e.n(u),p=e("59ca"),f=e.n(p),m=(e("e71f"),{apiKey:"AIzaSyBbJByC_xwYLmzzqI5D_4ZYl_PFaFkRbQE",authDomain:"titanalgopedia.firebaseapp.com",databaseURL:"https://nn-veutify-files.firebaseio.com",projectId:"titanalgopedia",storageBucket:"titanalgopedia.appspot.com",messagingSenderId:"517344368374"});f.a.initializeApp(m);var b=f.a.firestore(),h=b,_={data:function(){return{Project_id:"",title:"",Objective:"",Approach:"",Algorithms:"",person:"",Status:"",due:null,menu:!1,inputRules:[function(t){return!!t||"This field is required"},function(t){return t.length>=3||"Minimum length is 3 characters"}],loading:!1,dialog:!1}},methods:{submit:function(){var t=this;if(this.$refs.form.validate()){this.loading=!0;var a={project_id:this.project_id,title:this.title,objective:this.objective,approach:this.approach,algorithms:this.algorithms,person:this.person,status:this.status,due:v()(this.due,"Do MMM YYYY")};h.collection("projects").add(a).then(function(){t.loading=!1,t.dialog=!1,t.$emit("projectAdded")})}},clear:function(){this.$refs.form.reset()}},computed:{formattedDate:function(){return console.log(this.due),this.due?v()(this.due,"Do MMM YYYY"):""}}},g=_,x=e("2877"),y=e("6544"),j=e.n(y),C=e("8336"),V=e("b0af"),k=e("99d9"),w=e("12b2"),P=e("2e4b"),S=e("169a"),A=e("4bd4"),T=e("e449"),D=e("9910"),O=e("2677"),M=e("a844"),E=Object(x["a"])(g,l,d,!1,null,null,null),I=E.exports;j()(E,{VBtn:C["a"],VCard:V["a"],VCardText:k["b"],VCardTitle:w["a"],VDatePicker:P["a"],VDialog:S["a"],VForm:A["a"],VMenu:T["a"],VSpacer:D["a"],VTextField:O["a"],VTextarea:M["a"]});var B={components:{Popup:I},data:function(){return{drawer:!1,links:[{icon:"dashboard",text:"Dashboard",route:"/"},{icon:"folder",text:"Projects",route:"/projects"},{icon:"person",text:"Team",route:"/team"}],snackbar:!1}}},F=B,Y=e("8212"),L=e("0e8f"),$=e("132d"),z=e("a722"),R=e("8860"),K=e("ba95"),N=e("40fe"),J=e("5d23"),q=e("f774"),Q=e("2db4"),U=e("71d9"),Z=e("706c"),G=e("2a7f"),H=Object(x["a"])(F,i,c,!1,null,null,null),W=H.exports;j()(H,{VAvatar:Y["a"],VBtn:C["a"],VFlex:L["a"],VIcon:$["a"],VLayout:z["a"],VList:R["a"],VListTile:K["a"],VListTileAction:N["a"],VListTileContent:J["a"],VListTileTitle:J["b"],VMenu:T["a"],VNavigationDrawer:q["a"],VSnackbar:Q["a"],VSpacer:D["a"],VToolbar:U["a"],VToolbarSideIcon:Z["a"],VToolbarTitle:G["a"]});var X={components:{Navbar:W},name:"App",data:function(){return{}}},tt=X,at=e("7496"),et=e("549c"),rt=Object(x["a"])(tt,n,o,!1,null,null,null),st=rt.exports;j()(rt,{VApp:at["a"],VContent:et["a"]});var nt=e("8c4f"),ot=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dashboard"},[e("h1",{staticClass:"heading grey--text"},[t._v("Dashboard")]),e("v-container",{staticClass:"my-1"},[e("v-layout",{attrs:{row:"",wrap:""}},t._l(t.kpi,function(a){return e("v-flex",{key:a.name,attrs:{xs12:"",sm6:"",md3:"",lg3:""}},[e("v-card",{staticClass:"text-xs-center ma-5",attrs:{height:"160px",color:"blue-grey lighten-4"}},[e("v-responsive",{staticClass:"pt-3"},[e("v-avatar",{staticClass:"blue-grey lighten-4",attrs:{size:"50"}},[e("img",{attrs:{src:a.avatar}})])],1),e("v-card-text",[e("div",{staticClass:"subheading"},[t._v(t._s(a.name))]),e("div",{staticClass:"black--text"},[t._v(t._s(a.role))])]),e("v-card-actions")],1)],1)}),1),e("v-layout",{staticClass:"mb-3",attrs:{row:"","justify-start":""}},[e("v-tooltip",{attrs:{top:""}},[e("v-btn",{attrs:{slot:"activator",small:"",flat:"",color:"grey"},on:{click:function(a){return t.sortBy("project_id")}},slot:"activator"},[e("v-icon",{attrs:{small:"",left:""}},[t._v("folder")]),e("span",{staticClass:"caption text-lowercase"},[t._v("By project")])],1),e("span",[t._v("Sort by project #")])],1),e("v-tooltip",{attrs:{top:""}},[e("v-btn",{attrs:{slot:"activator",small:"",flat:"",color:"grey"},on:{click:function(a){return t.sortBy("person")}},slot:"activator"},[e("v-icon",{attrs:{small:"",left:""}},[t._v("person")]),e("span",{staticClass:"caption text-lowercase"},[t._v("By Person")])],1),e("span",[t._v("Sort by Person")])],1)],1),t._l(t.projects,function(a){return e("v-card",{key:a.title,attrs:{flat:""}},[e("v-layout",{class:"pa-3 project "+a.status,attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:"",sm2:""}},[e("div",{staticClass:"caption grey--text"},[t._v("Project ID")]),e("div",[t._v(t._s(a.project_id))])]),e("v-flex",{attrs:{xs6:"",md6:""}},[e("div",{staticClass:"caption grey--text"},[t._v("Project title")]),e("div",[t._v(t._s(a.title))])]),e("v-flex",{attrs:{xs6:"",sm4:"",md2:""}},[e("div",{staticClass:"caption grey--text"},[t._v("Person")]),e("div",[t._v(t._s(a.person))])]),e("v-flex",{attrs:{xs2:"",sm4:"",md2:""}},[e("div",{staticClass:"right"},[e("v-chip",{class:a.status+" white--text my-2 caption",attrs:{small:""}},[t._v(t._s(a.status))])],1)])],1),e("v-divider")],1)})],2)],1)},it=[],ct=e("cebc"),lt=(e("ac6a"),e("55dd"),{data:function(){return{projects:[],kpi:[{name:"# complete",role:"30",avatar:"/KPI-1.png"},{name:"# ongoing",role:"7",avatar:"/KPI-2.png"},{name:"# overdue",role:"3",avatar:"/KPI-3.png"},{name:"# total",role:"40",avatar:"/KPI-4.png"}]}},methods:{sortBy:function(t){this.projects.sort(function(a,e){return a[t]<e[t]?-1:1})}},created:function(){var t=this;h.collection("projects").onSnapshot(function(a){var e=a.docChanges();e.forEach(function(a){"added"===a.type&&t.projects.push(Object(ct["a"])({},a.doc.data(),{id:a.doc.id,project_id:a.doc.data().project_id}))})})}}),dt=lt,ut=(e("2b56"),e("cc20")),vt=e("a523"),pt=e("ce7e6"),ft=e("6b53"),mt=e("3a2f"),bt=Object(x["a"])(dt,ot,it,!1,null,null,null),ht=bt.exports;j()(bt,{VAvatar:Y["a"],VBtn:C["a"],VCard:V["a"],VCardActions:k["a"],VCardText:k["b"],VChip:ut["a"],VContainer:vt["a"],VDivider:pt["a"],VFlex:L["a"],VIcon:$["a"],VLayout:z["a"],VResponsive:ft["a"],VTooltip:mt["a"]});var _t=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"projects"},[e("h1",{staticClass:"heading grey--text"},[t._v("Projects")]),e("v-container",{staticClass:"my-1"},[e("v-expansion-panel",{attrs:{focusable:"",inset:""}},t._l(t.myProjects,function(a){return e("v-expansion-panel-content",{key:a.title},[e("div",{staticClass:"py-1",attrs:{slot:"header"},slot:"header"},[t._v(t._s(a.project_id+"  "+a.title))]),e("v-card",[e("v-card-text",{staticClass:"px-4"},[e("h4",[t._v("Objective of usecase")]),e("div",[t._v(t._s(a.objective))]),e("br"),e("h4",[t._v("Solution Approach")]),e("div",[t._v(t._s(a.approach))]),e("br"),e("h4",[t._v("Algorithms used in solution")]),e("div",[t._v(t._s(a.algorithms))]),e("br"),e("h4",[t._v("Project Status")]),e("div",[t._v(t._s(a.status))]),e("br"),e("h4",[t._v("Due date")]),e("div",[t._v(t._s(a.due))])])],1)],1)}),1)],1)],1)},gt=[],xt={data:function(){return{projects:[]}},computed:{myProjects:function(){return this.projects.filter(function(t){return"test"!=t.person})}},created:function(){var t=this;h.collection("projects").onSnapshot(function(a){var e=a.docChanges();e.forEach(function(a){"added"===a.type&&t.projects.push(Object(ct["a"])({},a.doc.data(),{id:a.doc.id}))})})}},yt=xt,jt=e("cd55"),Ct=e("49e2"),Vt=Object(x["a"])(yt,_t,gt,!1,null,null,null),kt=Vt.exports;j()(Vt,{VCard:V["a"],VCardText:k["b"],VContainer:vt["a"],VExpansionPanel:jt["a"],VExpansionPanelContent:Ct["a"]});var wt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"team"},[e("h1",{staticClass:"heading grey--text"},[t._v("Delivery Team")]),e("v-container",{staticClass:"my-5"},[e("v-layout",{attrs:{row:"",wrap:""}},t._l(t.team,function(a){return e("v-flex",{key:a.name,attrs:{xs12:"",sm6:"",md4:"",lg3:""}},[e("v-card",{staticClass:"text-xs-center ma-3",attrs:{color:"#E6E6FA"}},[e("v-responsive",{staticClass:"pt-4"},[e("v-avatar",{staticClass:"grey lighten-2",attrs:{size:"100"}},[e("img",{attrs:{src:a.avatar}})])],1),e("v-card-text",[e("div",{staticClass:"subheading"},[t._v(t._s(a.name))]),e("div",{staticClass:"grey--text"},[t._v(t._s(a.role))])]),e("v-card-actions")],1)],1)}),1)],1)],1)},Pt=[],St={data:function(){return{team:[{name:"Samanta Dilip",role:"Sr. Data Scientist",avatar:"/avatar-1.png"},{name:"Thakur Ajay",role:"Data Scientist",avatar:"/avatar-2.png"},{name:"Sangeeta",role:"Sr. Data Scientist",avatar:"/avatar-3.png"},{name:"Krishnan Ajay",role:"Data Scientist",avatar:"/avatar-4.png"}]}}},At=St,Tt=Object(x["a"])(At,wt,Pt,!1,null,null,null),Dt=Tt.exports;j()(Tt,{VAvatar:Y["a"],VCard:V["a"],VCardActions:k["a"],VCardText:k["b"],VContainer:vt["a"],VFlex:L["a"],VLayout:z["a"],VResponsive:ft["a"]}),r["a"].use(nt["a"]);var Ot=new nt["a"]({mode:"history",base:"/",routes:[{path:"/",name:"dashboard",component:ht},{path:"/projects",name:"projects",component:kt},{path:"/team",name:"team",component:Dt}]});r["a"].config.productionTip=!1,new r["a"]({router:Ot,render:function(t){return t(st)}}).$mount("#app")},f6b3:function(t,a,e){}});
//# sourceMappingURL=app.08d25106.js.map