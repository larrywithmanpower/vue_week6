(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b88cb634"],{b0c0:function(t,e,a){var l=a("83ab"),c=a("9bf2").f,n=Function.prototype,s=n.toString,o=/^\s*function ([^ (]*)/,r="name";l&&!(r in n)&&c(n,r,{configurable:!0,get:function(){try{return s.call(this).match(o)[1]}catch(t){return""}}})},eb78:function(t,e,a){"use strict";a.r(e);a("b0c0");var l=a("7a23"),c=Object(l["h"])("h2",{class:"text-center"},"我的購物車",-1),n={class:"container"},s={class:"table-responsive col-7 mx-auto"},o={class:"table table-sm"},r=Object(l["h"])("thead",null,[Object(l["h"])("tr",null,[Object(l["h"])("th"),Object(l["h"])("th",null,"品名"),Object(l["h"])("th",null,"數量"),Object(l["h"])("th",null,"單價")])],-1),i={class:"input-group input-group-sm"},u=Object(l["h"])("span",{class:"input-group-text"},"$",-1),d={class:"input-group-text"},b=Object(l["h"])("td",{colspan:"2",class:"text-end"},null,-1),h=Object(l["h"])("td",null,"合計",-1),m=Object(l["h"])("h2",{class:"text-center pt-5"},"送出訂單",-1),f={class:"d-flex justify-content-center"},j={class:"mb-3"},p=Object(l["h"])("label",{for:"email",class:"form-label"},"Email",-1),O={class:"mb-3"},g=Object(l["h"])("label",{for:"username",class:"form-label"},"收件人姓名",-1),v={class:"mb-3"},y=Object(l["h"])("label",{for:"tel",class:"form-label"},"收件人電話",-1),x={class:"mb-3"},C=Object(l["h"])("label",{for:"address",class:"form-label"},"收件人地址",-1),V={class:"mb-3"},L=Object(l["h"])("label",{for:"leaveMsg",class:"form-label"},"留言",-1),k={class:"d-flex justify-content-end"};function q(t,e,a,q,w,$){var U=Object(l["A"])("Loading"),A=Object(l["A"])("Field"),M=Object(l["A"])("Error-message"),S=Object(l["A"])("Form");return Object(l["t"])(),Object(l["e"])(l["a"],null,[Object(l["h"])(U,{active:w.isLoading},null,8,["active"]),c,Object(l["h"])("div",n,[Object(l["h"])("div",s,[Object(l["h"])("table",o,[r,Object(l["h"])("tbody",null,[(Object(l["t"])(!0),Object(l["e"])(l["a"],null,Object(l["y"])(w.carts,(function(t){return Object(l["t"])(),Object(l["e"])("tr",{key:t.id},[Object(l["h"])("td",null,[Object(l["h"])("button",{class:"btn btn-danger",type:"button",onClick:function(e){return $.delCartItem(t.id)}}," 移除購物車 ",8,["onClick"])]),Object(l["h"])("td",null,Object(l["D"])(t.product.title),1),Object(l["h"])("td",null,[Object(l["h"])("div",i,[u,Object(l["M"])(Object(l["h"])("input",{type:"number",class:"form-control",min:"1","onUpdate:modelValue":function(e){return t.qty=e},onChange:function(e){return $.updateCart(t)}},null,40,["onUpdate:modelValue","onChange"]),[[l["H"],t.qty,void 0,{number:!0}]]),Object(l["h"])("span",d,Object(l["D"])(t.product.unit),1)])]),Object(l["h"])("td",null,Object(l["D"])(t.product.price),1)])})),128))]),Object(l["h"])("tfoot",null,[Object(l["h"])("tr",null,[b,h,Object(l["h"])("td",null,Object(l["D"])(w.finalTotal),1)])])]),Object(l["M"])(Object(l["h"])("button",{class:"btn btn-outline-danger w-100",onClick:e[1]||(e[1]=function(t){return $.delAllCarts()})},"清空購物車",512),[[l["I"],0!==w.carts.length]])])]),m,Object(l["h"])("section",f,[Object(l["h"])(S,{class:"col-6",onSubmit:$.onSubmit,ref:"form"},{default:Object(l["L"])((function(t){var a=t.errors;return[Object(l["h"])("div",j,[p,Object(l["h"])(A,{type:"email",class:["form-control",{"is-invalid":a["email"]}],id:"email",placeholder:"請輸入Email",modelValue:w.form.user.email,"onUpdate:modelValue":e[2]||(e[2]=function(t){return w.form.user.email=t}),name:"email",rules:"email|required"},null,8,["modelValue","class"]),Object(l["h"])(M,{name:"email",class:"invalid-feedback"})]),Object(l["h"])("div",O,[g,Object(l["h"])(A,{type:"text",class:["form-control",{"is-invalid":a["姓名"]}],id:"username",placeholder:"請輸入姓名",modelValue:w.form.user.name,"onUpdate:modelValue":e[3]||(e[3]=function(t){return w.form.user.name=t}),name:"姓名",rules:"required"},null,8,["modelValue","class"]),Object(l["h"])(M,{name:"姓名",class:"invalid-feedback"})]),Object(l["h"])("div",v,[y,Object(l["h"])(A,{type:"tel",class:["form-control",{"is-invalid":a["電話"]}],id:"tel",placeholder:"請輸入電話",modelValue:w.form.user.tel,"onUpdate:modelValue":e[4]||(e[4]=function(t){return w.form.user.tel=t}),name:"電話",rules:$.isPhone},null,8,["modelValue","rules","class"]),Object(l["h"])(M,{name:"電話",class:"invalid-feedback"})]),Object(l["h"])("div",x,[C,Object(l["h"])(A,{type:"text",class:["form-control",{"is-invalid":a["地址"]}],id:"address",placeholder:"請輸入地址",modelValue:w.form.user.address,"onUpdate:modelValue":e[5]||(e[5]=function(t){return w.form.user.address=t}),name:"地址",rules:"required"},null,8,["modelValue","class"]),Object(l["h"])(M,{name:"地址",class:"invalid-feedback"})]),Object(l["h"])("div",V,[L,Object(l["M"])(Object(l["h"])("textarea",{type:"text",class:"form-control",id:"leaveMsg",placeholder:"你想說什麼??",rows:"5","onUpdate:modelValue":e[6]||(e[6]=function(t){return w.form.message=t})},null,512),[[l["H"],w.form.message]])]),Object(l["h"])("div",k,[Object(l["h"])("button",{type:"submit",class:"btn btn-danger",disabled:0===w.carts.length}," 送出訂單 ",8,["disabled"])])]})),_:1},8,["onSubmit"])])],64)}a("99af");var w={data:function(){return{isLoading:!1,carts:[],finalTotal:"",form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{getCarts:function(){var t=this;this.isLoading=!0;var e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("larry","/cart");this.$http.get(e).then((function(e){t.carts=e.data.data.carts,t.finalTotal=e.data.data.final_total,t.isLoading=!1}))},updateCart:function(t){var e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("larry","/cart/").concat(t.id),a={product_id:t.id,qty:t.qty};this.$http.put(e,{data:a}).then((function(t){t.data.success&&console.log(t.data.data.qty)})).catch((function(t){console.log(t)}))},delCartItem:function(t){var e=this;this.isLoading=!0;var a="".concat("https://vue3-course-api.hexschool.io","/api/").concat("larry","/cart/").concat(t);this.$http.delete(a).then((function(a){a.data.success?(alert("成功刪除".concat(t,"商品")),e.isLoading=!1,e.getCarts()):alert("刪除失敗")}))},delAllCarts:function(){var t=this;this.isLoading=!0;var e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("larry","/carts");this.$http.delete(e).then((function(e){e.data.success?(alert("成功清空物車"),t.isLoading=!1,t.getCarts()):(alert("清空失敗"),t.isLoading=!1)}))},onSubmit:function(){var t=this;this.isLoading=!0;var e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("larry","/order"),a=this.form.user,l=this.form.message.message;this.$http.post(e,{data:{user:a,message:l}}).then((function(e){e.data.success?(alert(e.data.message),//! VeeValidate內建函式
t.$refs.form.resetForm(),t.form.message="",t.carts=[],t.finalTotal="",t.isLoading=!1):alert(e.data.message)})).catch((function(t){console.log(t)}))},isPhone:function(t){var e=/^(09)[0-9]{8}$/;return!!e.test(t)||"需要正確的手機號碼"}},created:function(){this.getCarts()}};w.render=q;e["default"]=w}}]);
//# sourceMappingURL=chunk-b88cb634.61b4a2a9.js.map