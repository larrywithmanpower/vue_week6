(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21df6b"],{d416:function(t,e,c){"use strict";c.r(e);var n=c("7a23"),a=Object(n["h"])("h3",{class:"text-center pt-3 position-relative"},[Object(n["g"])(" 產品列表 "),Object(n["h"])("button",{class:"btn btn-sm btn-primary position-absolute end-0"},"新增商品")],-1),s={class:"container"},i={class:"table-responsive"},b={class:"table align-middle text-center"},l=Object(n["h"])("thead",null,[Object(n["h"])("tr",null,[Object(n["h"])("th",{width:"20%"},"圖片"),Object(n["h"])("th",{width:"30%"},"品名"),Object(n["h"])("th",{width:"15%"},"價格"),Object(n["h"])("th")])],-1),o=Object(n["h"])("td",null,[Object(n["h"])("div",{class:"btn-group"},[Object(n["h"])("button",{class:"btn btn-sm btn-secondary"},"編輯商品"),Object(n["h"])("button",{class:"btn btn-sm btn-outline-danger"},"刪除商品")])],-1);function d(t,e,c,d,r,h){var u=Object(n["A"])("Loading");return Object(n["t"])(),Object(n["e"])(n["a"],null,[Object(n["h"])(u,{active:r.isLoading},null,8,["active"]),a,Object(n["h"])("div",s,[Object(n["h"])("div",i,[Object(n["h"])("table",b,[l,Object(n["h"])("tbody",null,[(Object(n["t"])(!0),Object(n["e"])(n["a"],null,Object(n["y"])(r.products,(function(t){return Object(n["t"])(),Object(n["e"])("tr",{key:t.id},[Object(n["h"])("td",null,[Object(n["h"])("img",{src:t.imageUrl,alt:"商品圖",class:"img-fluid"},null,8,["src"])]),Object(n["h"])("td",null,Object(n["D"])(t.title),1),Object(n["h"])("td",null,Object(n["D"])(t.price),1),o])})),128))])])])])],64)}c("99af");var r={props:["token"],data:function(){return{products:[],isLoading:!1}},methods:{getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var c="".concat("https://vue3-course-api.hexschool.io","/api/").concat("larry","/admin/products?page:").concat(e);this.$http.get(c).then((function(e){e.data.success?(t.products=e.data.products,t.isLoading=!1):alert(e.data.message)}))}},created:function(){this.getProducts()}};r.render=d;e["default"]=r}}]);
//# sourceMappingURL=chunk-2d21df6b.69dd96e9.js.map