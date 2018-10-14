webpackJsonp([1],{NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("nav",[e("div",{staticClass:"nav-wrapper green"},[e("div",{staticClass:"container"},[e("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[this._v("Mehan Kidz")])],1)])])},staticRenderFns:[]},o={name:"app",components:{Navbar:a("VU/8")({data:function(){return{}}},i,!1,null,null,null).exports}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Navbar"),this._v(" "),e("div",{staticClass:"container"},[e("router-view")],1)],1)},staticRenderFns:[]},r=a("VU/8")(o,s,!1,null,null,null).exports,l=a("/ocq"),c=a("Sazm"),u=a.n(c),d=(a("3VHS"),u.a.initializeApp({apiKey:"AIzaSyBUFd4MS-mM3XGDh0FANZbDETp8oVgKf0I",authDomain:"kid-manager.firebaseapp.com",databaseURL:"https://kid-manager.firebaseio.com",projectId:"kid-manager",storageBucket:"kid-manager.appspot.com",messagingSenderId:"747229307113"}).firestore()),m={name:"dashboard",data:function(){return{kidz:[]}},created:function(){var t=this;d.collection("kidz").orderBy("name").onSnapshot(function(e){t.kidz=[],e.forEach(function(e){var a={id:e.id,name:e.data().name,in_out:e.data().in_out,age:e.data().age,phone:e.data().phone};t.kidz.push(a)})})},methods:{checkInOut:function(t,e){d.collection("kidz").doc(t).update({in_out:!e}).then(function(t){console.log("check in/out complete")})}}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"dashboard"}},[a("ul",{staticClass:"collection with-header"},[a("li",{staticClass:"collection-header"},[a("h2",[t._v("Kidz")]),t._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:"/new"}},[a("i",{staticClass:"fa fa-plus"})])],1)]),t._v(" "),t._l(t.kidz,function(e){return a("li",{key:e.id,class:[{checkedin:e.in_out},"collection-item"]},[a("div",{staticClass:"chip"},[t._v(t._s(e.age))]),a("span",{staticClass:"name",on:{click:function(a){t.checkInOut(e.id,e.in_out)}}},[t._v(t._s(e.name))]),t._v(" "),a("span",{staticClass:"phone"},[t._v(t._s(e.phone))]),t._v(" "),a("router-link",{staticClass:"secondary-content",attrs:{to:{name:"view-employee",params:{kid_id:e.id}}}},[a("i",{staticClass:"fa fa-eye fa-2x"})])],1)})],2),t._v(" "),a("div",{staticClass:"fix-action-btn"})])},staticRenderFns:[]};var v=a("VU/8")(m,p,!1,function(t){a("PpqW")},"data-v-1c7f15dc",null).exports,f={name:"edit-employee",data:function(){return{id:null,name:null,age:null,in_out:null}},beforeRouteEnter:function(t,e,a){d.collection("kidz").where(u.a.firestore.FieldPath.documentId(),"==",t.params.kid_id).get().then(function(t){t.forEach(function(t){a(function(e){e.id=t.id,e.name=t.data().name,e.age=t.data().age,e.in_out=t.data().in_out})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;d.collection("kidz").where(u.a.firestore.FieldPath.documentId(),"==",this.$route.params.kid_id).get().then(function(e){e.forEach(function(e){t.id=e.id,t.name=e.data().name,t.age=e.data().age,t.in_out=e.data().in_out})})},updateEmployee:function(){var t=this;d.collection("kidz").where(u.a.firestore.FieldPath.documentId(),"==",this.$route.params.kid_id).get().then(function(e){e.forEach(function(e){e.ref.update({name:t.name,age:t.age,in_out:t.in_out}).then(function(){t.$router.push({name:"view-employee",params:{kid_id:t.id}})})})})}}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"edit-employee"}},[a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(e){return e.preventDefault(),t.updateEmployee(e)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.age,expression:"age"}],attrs:{type:"text",required:""},domProps:{value:t.age},on:{input:function(e){e.target.composing||(t.age=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.in_out,expression:"in_out"}],attrs:{type:"text",required:""},domProps:{value:t.in_out},on:{input:function(e){e.target.composing||(t.in_out=e.target.value)}}})])]),t._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Submit")]),t._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[t._v("Cancel")])],1)])])},staticRenderFns:[]},_=a("VU/8")(f,h,!1,null,null,null).exports,g={name:"new-employee",data:function(){return{id:null,name:null,phone:null,age:null,in_out:null}},methods:{saveEmployee:function(){var t=this;d.collection("kidz").add({name:this.name,age:this.age,in_out:this.in_out,phone:this.phone}).then(function(e){return t.$router.push("/")}).catch(function(t){return console.log(err)})}}},C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"new-employee"}},[a("h3",[t._v("New Kidz")]),t._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(e){return e.preventDefault(),t.saveEmployee(e)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),a("label",[t._v("Name")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"text"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}}),t._v(" "),a("label",[t._v("Phone Number")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.age,expression:"age"}],attrs:{type:"text"},domProps:{value:t.age},on:{input:function(e){e.target.composing||(t.age=e.target.value)}}}),t._v(" "),a("label",[t._v("Age")])])]),t._v(" "),a("br"),t._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("Submit")]),t._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[t._v("Cancel")])],1)])])},staticRenderFns:[]},k=a("VU/8")(g,C,!1,null,null,null).exports,b={name:"view-employee",data:function(){return{id:null,name:null,age:null,in_out:null}},beforeRouteEnter:function(t,e,a){d.collection("kidz").where(u.a.firestore.FieldPath.documentId(),"==",t.params.kid_id).get().then(function(t){t.forEach(function(t){a(function(e){e.id=t.id,e.name=t.data().name,e.age=t.data().age,e.in_out=t.data().in_out})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;d.collection("kidz").where(u.a.firestore.FieldPath.documentId(),"==",this.$route.params.kid_id).get().then(function(e){e.forEach(function(e){t.id=e.id,t.name=e.data().name,t.age=e.data().age,t.in_out=e.data().in_out})})},deleteEmployee:function(){var t=this;confirm("Are you sure?")&&d.collection("kidz").where(u.a.firestore.FieldPath.documentId(),"==",this.$route.params.kid_id).get().then(function(e){e.forEach(function(e){e.ref.delete(),t.$router.push("/")})})}}},w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"view-employee"}},[a("ul",{staticClass:"collection with-header"},[a("li",{staticClass:"collection-header"},[a("h4",[t._v(t._s(t.name))])]),t._v(" "),a("li",{staticClass:"collection-item"},[t._v("\n      Age: "+t._s(t.age)+"\n    ")]),t._v(" "),a("li",{staticClass:"collection-item"},[t._v("\n      In_Out: "+t._s(t.in_out)+"\n    ")])]),t._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[t._v("Back")]),t._v(" "),a("button",{staticClass:"btn red",on:{click:t.deleteEmployee}},[t._v("Delete")]),t._v(" "),a("div",{staticClass:"fix-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:{name:"edit-employee",params:{kid_id:this.id}}}},[a("i",{staticClass:"fa fa-pencil"})])],1)],1)},staticRenderFns:[]};var y=a("VU/8")(b,w,!1,function(t){a("hAM2")},"data-v-14781710",null).exports;n.a.use(l.a);var x=new l.a({mode:"history",routes:[{path:"/",name:"dashboard",component:v},{path:"/new",name:"new-employee",component:k},{path:"/edit/:kid_id",name:"edit-employee",component:_},{path:"/:kid_id",name:"view-employee",component:y}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:x,template:"<App/>",components:{App:r}})},PpqW:function(t,e){},hAM2:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b72975d44a4ca4f354e0.js.map