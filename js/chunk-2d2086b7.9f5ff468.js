(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2086b7"],{a55b:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),s={class:"container"},a={class:"d-flex justify-content-center py-5"},r={class:"col-5"},c=Object(o["h"])("h3",{class:"text-center"},"登入後台",-1),i={class:"form-floating mb-3"},u=Object(o["h"])("label",{for:"floatingInput"},"Email address",-1),l={class:"form-floating"},d=Object(o["h"])("label",{for:"floatingPassword"},"Password",-1),p=Object(o["h"])("button",{type:"submit",class:"btn btn-primary w-100 text-white mt-3"}," 登入 ",-1);function h(e,t,n,h,b,f){return Object(o["t"])(),Object(o["e"])("div",s,[Object(o["h"])("div",a,[Object(o["h"])("div",r,[c,Object(o["h"])("form",{onSubmit:t[3]||(t[3]=Object(o["N"])((function(e){return f.login()}),["prevent"]))},[Object(o["h"])("div",i,[Object(o["M"])(Object(o["h"])("input",{type:"email",class:"form-control",id:"floatingInput",placeholder:"name@example.com","onUpdate:modelValue":t[1]||(t[1]=function(e){return b.user.username=e}),required:""},null,512),[[o["H"],b.user.username]]),u]),Object(o["h"])("div",l,[Object(o["M"])(Object(o["h"])("input",{type:"password",class:"form-control",id:"floatingPassword",placeholder:"Password","onUpdate:modelValue":t[2]||(t[2]=function(e){return b.user.password=e}),required:""},null,512),[[o["H"],b.user.password]]),d]),p],32)])])])}n("99af");var b={data:function(){return{user:{username:"",password:""}}},methods:{login:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io","/admin/signin");this.$http.post(t,this.user).then((function(t){if(t.data.success){alert("登入成功");var n=t.data,o=n.token,s=n.expired;document.cookie="myToken=".concat(o,"; expires=").concat(new Date(s)),e.$router.push("/admin/products")}else alert(t.data.message),e.$router.push("/login")})).catch((function(e){console.log(e)}))}}};b.render=h;t["default"]=b}}]);
//# sourceMappingURL=chunk-2d2086b7.9f5ff468.js.map