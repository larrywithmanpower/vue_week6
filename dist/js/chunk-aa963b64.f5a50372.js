(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aa963b64"],{b0c0:function(e,t,a){var l=a("83ab"),c=a("9bf2").f,s=Function.prototype,n=s.toString,r=/^\s*function ([^ (]*)/,o="name";l&&!(o in s)&&c(s,o,{configurable:!0,get:function(){try{return n.call(this).match(r)[1]}catch(e){return""}}})},b789:function(e,t,a){"use strict";a.r(t);a("b0c0");var l=a("7a23"),c=Object(l["h"])("h2",{class:"text-center"},"我的購物車",-1),s={class:"container"},n={class:"table-responsive col-7 mx-auto"},r={class:"table table-sm"},o=Object(l["h"])("thead",null,[Object(l["h"])("tr",null,[Object(l["h"])("th"),Object(l["h"])("th",null,"品名"),Object(l["h"])("th",null,"數量"),Object(l["h"])("th",null,"單價")])],-1),i=Object(l["h"])("td",{colspan:"2",class:"text-end"},null,-1),u=Object(l["h"])("td",null,"合計",-1),d=Object(l["h"])("h2",{class:"text-center pt-5"},"送出訂單",-1),b={class:"d-flex justify-content-center"},h={class:"mb-3"},m=Object(l["h"])("label",{for:"email",class:"form-label"},"Email",-1),f={class:"mb-3"},j=Object(l["h"])("label",{for:"username",class:"form-label"},"收件人姓名",-1),O={class:"mb-3"},p=Object(l["h"])("label",{for:"tel",class:"form-label"},"收件人電話",-1),v={class:"mb-3"},g=Object(l["h"])("label",{for:"address",class:"form-label"},"收件人地址",-1),y={class:"mb-3"},x=Object(l["h"])("label",{for:"leaveMsg",class:"form-label"},"留言",-1),L={class:"d-flex justify-content-end"};function V(e,t,a,V,k,C){var w=Object(l["A"])("Loading"),A=Object(l["A"])("Field"),$=Object(l["A"])("Error-message"),S=Object(l["A"])("Form");return Object(l["t"])(),Object(l["e"])(l["a"],null,[Object(l["h"])(w,{active:k.isLoading},null,8,["active"]),c,Object(l["h"])("div",s,[Object(l["h"])("div",n,[Object(l["h"])("table",r,[o,Object(l["h"])("tbody",null,[(Object(l["t"])(!0),Object(l["e"])(l["a"],null,Object(l["y"])(k.carts,(function(e){return Object(l["t"])(),Object(l["e"])("tr",{key:e.id},[Object(l["h"])("td",null,[Object(l["h"])("button",{class:"btn btn-danger",type:"button",onClick:function(t){return C.delCartItem(e.id)}}," 移除購物車 ",8,["onClick"])]),Object(l["h"])("td",null,Object(l["D"])(e.product.title),1),Object(l["h"])("td",null,Object(l["D"])(e.qty),1),Object(l["h"])("td",null,Object(l["D"])(e.product.price),1)])})),128))]),Object(l["h"])("tfoot",null,[Object(l["h"])("tr",null,[i,u,Object(l["h"])("td",null,Object(l["D"])(k.finalTotal),1)])])]),Object(l["M"])(Object(l["h"])("button",{class:"btn btn-outline-danger w-100",onClick:t[1]||(t[1]=function(e){return C.delAllCarts()})},"清空購物車",512),[[l["I"],0!==k.carts.length]])])]),d,Object(l["h"])("section",b,[Object(l["h"])(S,{class:"col-6",onSubmit:C.onSubmit,ref:"form"},{default:Object(l["L"])((function(e){var a=e.errors;return[Object(l["h"])("div",h,[m,Object(l["h"])(A,{type:"email",class:["form-control",{"is-invalid":a["email"]}],id:"email",placeholder:"請輸入Email",modelValue:k.form.user.email,"onUpdate:modelValue":t[2]||(t[2]=function(e){return k.form.user.email=e}),name:"email",rules:"email|required"},null,8,["modelValue","class"]),Object(l["h"])($,{name:"email",class:"invalid-feedback"})]),Object(l["h"])("div",f,[j,Object(l["h"])(A,{type:"text",class:["form-control",{"is-invalid":a["姓名"]}],id:"username",placeholder:"請輸入姓名",modelValue:k.form.user.name,"onUpdate:modelValue":t[3]||(t[3]=function(e){return k.form.user.name=e}),name:"姓名",rules:"required"},null,8,["modelValue","class"]),Object(l["h"])($,{name:"姓名",class:"invalid-feedback"})]),Object(l["h"])("div",O,[p,Object(l["h"])(A,{type:"tel",class:["form-control",{"is-invalid":a["電話"]}],id:"tel",placeholder:"請輸入電話",modelValue:k.form.user.tel,"onUpdate:modelValue":t[4]||(t[4]=function(e){return k.form.user.tel=e}),name:"電話",rules:C.isPhone},null,8,["modelValue","rules","class"]),Object(l["h"])($,{name:"電話",class:"invalid-feedback"})]),Object(l["h"])("div",v,[g,Object(l["h"])(A,{type:"text",class:["form-control",{"is-invalid":a["地址"]}],id:"address",placeholder:"請輸入地址",modelValue:k.form.user.address,"onUpdate:modelValue":t[5]||(t[5]=function(e){return k.form.user.address=e}),name:"地址",rules:"required"},null,8,["modelValue","class"]),Object(l["h"])($,{name:"地址",class:"invalid-feedback"})]),Object(l["h"])("div",y,[x,Object(l["M"])(Object(l["h"])("textarea",{type:"text",class:"form-control",id:"leaveMsg",placeholder:"你想說什麼??",rows:"5","onUpdate:modelValue":t[6]||(t[6]=function(e){return k.form.message=e})},null,512),[[l["H"],k.form.message]])]),Object(l["h"])("div",L,[Object(l["h"])("button",{type:"submit",class:"btn btn-danger",disabled:0===k.carts.length}," 送出訂單 ",8,["disabled"])])]})),_:1},8,["onSubmit"])])],64)}a("99af");var k={data:function(){return{isLoading:!1,carts:[],finalTotal:"",form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{getCarts:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("larry","/cart");this.$http.get(t).then((function(t){e.carts=t.data.data.carts,e.finalTotal=t.data.data.final_total,e.isLoading=!1}))},delCartItem:function(e){var t=this;this.isLoading=!0;var a="".concat("https://vue3-course-api.hexschool.io","/api/").concat("larry","/cart/").concat(e);this.$http.delete(a).then((function(a){a.data.success?(alert("成功刪除".concat(e,"商品")),t.isLoading=!1,t.getCarts()):alert("刪除失敗")}))},delAllCarts:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("larry","/carts");this.$http.delete(t).then((function(t){t.data.success?(alert("成功清空物車"),e.isLoading=!1,e.getCarts()):(alert("清空失敗"),e.isLoading=!1)}))},onSubmit:function(){var e=this;this.isLoading=!0;var t="".concat("https://vue3-course-api.hexschool.io","/api/").concat("larry","/order"),a=this.form.user,l=this.form.message.message;this.$http.post(t,{data:{user:a,message:l}}).then((function(t){t.data.success?(alert(t.data.message),//! VeeValidate內建函式
e.$refs.form.resetForm(),e.form.message="",e.carts=[],e.finalTotal="",e.isLoading=!1):alert(t.data.message)})).catch((function(e){console.log(e)}))},isPhone:function(e){var t=/^(09)[0-9]{8}$/;return!!t.test(e)||"需要正確的手機號碼"}},created:function(){this.getCarts()}};k.render=V;t["default"]=k}}]);
//# sourceMappingURL=chunk-aa963b64.f5a50372.js.map