(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53961c60"],{"14c3":function(t,e,r){var n=r("c6b6"),c=r("9263");t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var i=r.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return c.call(t,e)}},"466d":function(t,e,r){"use strict";var n=r("d784"),c=r("825a"),i=r("50c4"),a=r("1d80"),o=r("8aa5"),l=r("14c3");n("match",1,(function(t,e,r){return[function(e){var r=a(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,r):new RegExp(e)[t](String(r))},function(t){var n=r(e,t,this);if(n.done)return n.value;var a=c(t),s=String(this);if(!a.global)return l(a,s);var u=a.unicode;a.lastIndex=0;var d,f=[],p=0;while(null!==(d=l(a,s))){var h=String(d[0]);f[p]=h,""===h&&(a.lastIndex=o(s,i(a.lastIndex),u)),p++}return 0===p?null:f}]}))},"4de4":function(t,e,r){"use strict";var n=r("23e7"),c=r("b727").filter,i=r("1dde"),a=i("filter");n({target:"Array",proto:!0,forced:!a},{filter:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},"8aa5":function(t,e,r){"use strict";var n=r("6547").charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},9263:function(t,e,r){"use strict";var n=r("ad6d"),c=r("9f7f"),i=r("5692"),a=RegExp.prototype.exec,o=i("native-string-replace",String.prototype.replace),l=a,s=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=c.UNSUPPORTED_Y||c.BROKEN_CARET,d=void 0!==/()??/.exec("")[1],f=s||d||u;f&&(l=function(t){var e,r,c,i,l=this,f=u&&l.sticky,p=n.call(l),h=l.source,g=0,v=t;return f&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),v=String(t).slice(l.lastIndex),l.lastIndex>0&&(!l.multiline||l.multiline&&"\n"!==t[l.lastIndex-1])&&(h="(?: "+h+")",v=" "+v,g++),r=new RegExp("^(?:"+h+")",p)),d&&(r=new RegExp("^"+h+"$(?!\\s)",p)),s&&(e=l.lastIndex),c=a.call(f?r:l,v),f?c?(c.input=c.input.slice(g),c[0]=c[0].slice(g),c.index=l.lastIndex,l.lastIndex+=c[0].length):l.lastIndex=0:s&&c&&(l.lastIndex=l.global?c.index+c[0].length:e),d&&c&&c.length>1&&o.call(c[0],r,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(c[i]=void 0)})),c}),t.exports=l},"9f7f":function(t,e,r){"use strict";var n=r("d039");function c(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=c("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=c("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,r){"use strict";var n=r("23e7"),c=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==c},{exec:c})},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},bd5a:function(t,e,r){"use strict";r.r(e);var n=r("7a23"),c=Object(n["h"])("h3",{class:"text-center"},"產品列表",-1),i={class:"row"},a={class:"col-md-3 mb-3"},o={class:"list-group"},l={class:"col-md-9"},s={class:"row"},u={class:"card"},d={class:"card-body"},f={class:"card-title"},p={class:"card-text"},h={class:"d-flex"};function g(t,e,r,g,v,b){var x=Object(n["A"])("Loading"),m=Object(n["A"])("b-icon-arrow-up-square-fill");return Object(n["t"])(),Object(n["e"])(n["a"],null,[Object(n["h"])(x,{active:v.isLoading},null,8,["active"]),Object(n["h"])(n["b"],null,{default:Object(n["L"])((function(){return[Object(n["M"])(Object(n["h"])("a",{href:"javascript:void(0)",class:"link-primary position-fixed bottom-0 end-0 mb-3 me-3",onClick:e[1]||(e[1]=function(t){return b.goTop()})},[Object(n["h"])(m,{width:"40px",height:"40px"})],512),[[n["I"],v.scY>350]])]})),_:1}),c,Object(n["h"])("div",i,[Object(n["h"])("div",a,[Object(n["h"])("div",o,[Object(n["h"])("a",{href:"#",class:["list-group-item list-group-item-action list-group-item-primary",{active:""===v.filterCategory}],"aria-current":"true",onClick:e[2]||(e[2]=Object(n["N"])((function(t){return v.filterCategory=""}),["prevent"]))}," 所有商品 ",2),Object(n["h"])("a",{href:"#",class:["list-group-item list-group-item-action list-group-item-primary",{active:"V"===v.filterCategory}],onClick:e[3]||(e[3]=Object(n["N"])((function(t){return v.filterCategory="V"}),["prevent"]))},"V",2),Object(n["h"])("a",{href:"#",class:["list-group-item list-group-item-action list-group-item-primary",{active:"靴子"===v.filterCategory}],onClick:e[4]||(e[4]=Object(n["N"])((function(t){return v.filterCategory="靴子"}),["prevent"]))},"靴子",2),Object(n["h"])("a",{href:"#",class:["list-group-item list-group-item-action list-group-item-primary",{active:"套裝"===v.filterCategory}],onClick:e[5]||(e[5]=Object(n["N"])((function(t){return v.filterCategory="套裝"}),["prevent"]))},"套裝",2)])]),Object(n["h"])("div",l,[Object(n["h"])("div",s,[(Object(n["t"])(!0),Object(n["e"])(n["a"],null,Object(n["y"])(b.filterCategories,(function(t){return Object(n["t"])(),Object(n["e"])("div",{class:"col-md-4 mb-3",key:t.id},[Object(n["h"])("div",u,[Object(n["h"])("img",{src:t.imageUrl,class:"card-img-top img-fluid",alt:"商品相片"},null,8,["src"]),Object(n["h"])("div",d,[Object(n["h"])("h5",f,Object(n["D"])(t.title),1),Object(n["h"])("p",p,Object(n["D"])(t.content),1),Object(n["h"])("div",h,[Object(n["h"])("a",{href:"#",class:"btn btn-primary",onClick:Object(n["N"])((function(e){return b.goToPage(t)}),["prevent"])},"查看更多",8,["onClick"]),Object(n["h"])("a",{href:"#",class:"btn btn-outline-danger ms-auto",onClick:Object(n["N"])((function(e){return b.addCart(t.id)}),["prevent"])},"加入購物車",8,["onClick"])])])])])})),128))])])])],64)}r("4de4"),r("ac1f"),r("466d"),r("99af");var v={data:function(){return{products:[],carts:[],isLoading:!1,scY:0,scTimer:0,filterCategory:"",categories:["休閒","套裝","靴子","V"]}},computed:{filterCategories:function(){var t=this;return this.filterCategory?this.products.filter((function(e){return e.category.match(t.filterCategory)})):this.products}},methods:{getProducts:function(){var t=this;this.isLoading=!0;var e="".concat("https://vue3-course-api.hexschool.io","/api/").concat("larry","/products");this.$http.get(e).then((function(e){e.data.success&&(t.products=e.data.products,t.isLoading=!1)}))},goToPage:function(t){this.$router.push("/product/".concat(t.id))},addCart:function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.isLoading=!0;var n="".concat("https://vue3-course-api.hexschool.io","/api/").concat("larry","/cart"),c={product_id:t,qty:r};this.$http.post(n,{data:c}).then((function(r){r.data.success?(alert("".concat(t,"成功加入購物車")),e.isLoading=!1):alert("購物車加入失敗")}))},goTop:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},handleScroll:function(){var t=this;this.scTimer||(this.scTimer=setTimeout((function(){t.scY=window.scrollY,clearTimeout(t.scTimer),t.scTimer=0}),100))}},created:function(){this.getProducts()},mounted:function(){window.addEventListener("scroll",this.handleScroll)}};r("cb53");v.render=g;e["default"]=v},cb53:function(t,e,r){"use strict";r("dd87")},d784:function(t,e,r){"use strict";r("ac1f");var n=r("6eeb"),c=r("9263"),i=r("d039"),a=r("b622"),o=r("9112"),l=a("species"),s=RegExp.prototype,u=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),d=function(){return"$0"==="a".replace(/./,"$0")}(),f=a("replace"),p=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),h=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,f){var g=a(t),v=!i((function(){var e={};return e[g]=function(){return 7},7!=""[t](e)})),b=v&&!i((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[l]=function(){return r},r.flags="",r[g]=/./[g]),r.exec=function(){return e=!0,null},r[g](""),!e}));if(!v||!b||"replace"===t&&(!u||!d||p)||"split"===t&&!h){var x=/./[g],m=r(g,""[t],(function(t,e,r,n,i){var a=e.exec;return a===c||a===s.exec?v&&!i?{done:!0,value:x.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:d,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),O=m[0],j=m[1];n(String.prototype,t,O),n(s,g,2==e?function(t,e){return j.call(t,this,e)}:function(t){return j.call(t,this)})}f&&o(s[g],"sham",!0)}},dd87:function(t,e,r){}}]);
//# sourceMappingURL=chunk-53961c60.f453523d.js.map