(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-93b871ae"],{4701:function(t,a,c){"use strict";c.r(a);var e=c("7a23"),n={class:"container py-3"},s={class:"fw-bold"},r={class:"row"},i={class:"col-md-8 mb-3"},o={class:"h4"},l={class:"col-md-4"},b={class:""},d={class:"text-danger h3"},u=Object(e["h"])("hr",null,null,-1);function h(t,a,c,h,j,O){var p=Object(e["A"])("Loading"),v=Object(e["A"])("front-navbar");return Object(e["t"])(),Object(e["e"])(e["a"],null,[Object(e["h"])(p,{active:j.isLoading},null,8,["active"]),Object(e["h"])(v),Object(e["h"])("div",n,[Object(e["h"])("h2",s,Object(e["D"])(j.tempProduct.title),1),Object(e["h"])("div",r,[Object(e["h"])("div",i,[Object(e["h"])("p",o,Object(e["D"])(j.tempProduct.content),1),Object(e["h"])("img",{src:j.tempProduct.imageUrl,class:"img-fluid",alt:"商品圖片"},null,8,["src"])]),Object(e["h"])("div",l,[Object(e["h"])("p",b,[Object(e["h"])("del",null,"原價 NT$ "+Object(e["D"])(j.tempProduct.origin_price)+" 元",1)]),Object(e["h"])("p",d,[Object(e["h"])("strong",null,"特價 NT$ "+Object(e["D"])(j.tempProduct.price)+" 元",1)]),u,Object(e["h"])("button",{type:"button",class:"btn btn-outline-danger",onClick:a[1]||(a[1]=function(t){return O.addCart(j.tempProduct.id)})},"加入購物車")])])])],64)}c("99af");var j=c("b0c9"),O={data:function(){return{id:"",tempProduct:{},qty:1,isLoading:!1}},components:{FrontNavbar:j["a"]},created:function(){var t=this.$route.params.id;this.id=t,this.getSingleProduct()},methods:{getSingleProduct:function(){var t=this;this.isLoading=!0;var a="".concat("https://vue3-course-api.hexschool.io","/api/").concat("larry","/product/").concat(this.id);this.$http.get(a).then((function(a){a.data.success&&(t.tempProduct=a.data.product,t.isLoading=!1)}))},addCart:function(t){var a=this,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.isLoading=!0;var e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("larry","/cart"),n={product_id:t,qty:c};this.$http.post(e,{data:n}).then((function(c){c.data.success?(alert("".concat(t,"成功加入購物車")),a.isLoading=!1):alert("購物車加入失敗")}))}}};O.render=h;a["default"]=O},b0c9:function(t,a,c){"use strict";var e=c("7a23"),n={class:"d-flex justify-content-between align-items-center px-4",id:"top"},s={class:"py-4 mb-0"},r=Object(e["g"])("WearFoot"),i=Object(e["h"])("div",{class:"position-relative"},[Object(e["h"])("input",{type:"text",placeholder:"Search..",class:"border-0"}),Object(e["h"])("span",{class:"prostion-absolute"})],-1),o={class:"navbar navbar-expand-lg navbar-dark bg-primary sticky-top"},l={class:"container-fluid"},b=Object(e["h"])("a",{class:"navbar-brand",href:"#"},"第六周作業",-1),d=Object(e["h"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(e["h"])("span",{class:"navbar-toggler-icon"})],-1),u={class:"collapse navbar-collapse",id:"navbarNav"},h={class:"navbar-nav"},j={class:"nav-item"},O=Object(e["g"])("首頁"),p={class:"nav-item"},v=Object(e["g"])("產品頁"),g={class:"nav-item"},f=Object(e["g"])("購物車"),m={class:"nav-item"},y=Object(e["g"])("登入後台");function k(t,a){var c=Object(e["A"])("router-link");return Object(e["t"])(),Object(e["e"])(e["a"],null,[Object(e["h"])("div",n,[Object(e["h"])("h1",s,[Object(e["h"])(c,{to:"/",class:"link-secondary text-decoration-none fw-bold"},{default:Object(e["K"])((function(){return[r]})),_:1})]),i]),Object(e["h"])("nav",o,[Object(e["h"])("div",l,[b,d,Object(e["h"])("div",u,[Object(e["h"])("ul",h,[Object(e["h"])("li",j,[Object(e["h"])(c,{class:"nav-link",to:"/"},{default:Object(e["K"])((function(){return[O]})),_:1})]),Object(e["h"])("li",p,[Object(e["h"])(c,{class:"nav-link",to:"/products"},{default:Object(e["K"])((function(){return[v]})),_:1})]),Object(e["h"])("li",g,[Object(e["h"])(c,{class:"nav-link",to:"/cart"},{default:Object(e["K"])((function(){return[f]})),_:1})]),Object(e["h"])("li",m,[Object(e["h"])(c,{class:"nav-link",to:"/admin/products"},{default:Object(e["K"])((function(){return[y]})),_:1})])])])])])],64)}const w={};w.render=k;a["a"]=w}}]);
//# sourceMappingURL=chunk-93b871ae.41247876.js.map