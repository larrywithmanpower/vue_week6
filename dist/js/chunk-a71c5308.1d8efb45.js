(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a71c5308"],{"057f":function(t,e,n){var r=n("fc6a"),c=n("241c").f,a={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],i=function(t){try{return c(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==a.call(t)?i(t):c(r(t))}},1799:function(t,e,n){"use strict";var r=n("7a23"),c={"aria-label":"Page navigation"},a={class:"pagination pagination-primary"};function o(t,e,n,o,i,l){return Object(r["t"])(),Object(r["e"])("nav",c,[Object(r["h"])("ul",a,[Object(r["h"])("li",{class:["page-item",{disabled:!n.page.has_pre}]},[Object(r["h"])("a",{class:"page-link link-success",href:"#",onClick:e[1]||(e[1]=Object(r["N"])((function(e){return t.$emit("get-page",n.page.current_page-1)}),["prevent"]))},"Previous")],2),(Object(r["t"])(!0),Object(r["e"])(r["a"],null,Object(r["y"])(n.page.total_pages,(function(e){return Object(r["t"])(),Object(r["e"])("li",{class:["page-item",{active:e===n.page.current_page}],key:e},[Object(r["h"])("a",{class:"page-link link-success",href:"#",onClick:Object(r["N"])((function(n){return t.$emit("get-page",e)}),["prevent"])},Object(r["D"])(e),9,["onClick"])],2)})),128)),Object(r["h"])("li",{class:["page-item",{disabled:!n.page.has_next}]},[Object(r["h"])("a",{class:"page-link link-success",href:"#",onClick:e[2]||(e[2]=Object(r["N"])((function(e){return t.$emit("get-page",n.page.current_page+1)}),["prevent"]))}," Next ")],2)])])}var i={props:["page"]};n("1eb3");i.render=o;e["a"]=i},"1eb3":function(t,e,n){"use strict";n("331d")},"331d":function(t,e,n){},"4de4":function(t,e,n){"use strict";var r=n("23e7"),c=n("b727").filter,a=n("1dde"),o=a("filter");r({target:"Array",proto:!0,forced:!o},{filter:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("b64b"),n("a4d3"),n("4de4"),n("e439"),n("159b"),n("dbb4");function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},5651:function(t,e,n){"use strict";n.r(e);var r=n("7a23"),c={class:"table-responsive"},a={class:"table"},o=Object(r["h"])("thead",null,[Object(r["h"])("tr",null,[Object(r["h"])("th",{width:"10%"},"購買時間"),Object(r["h"])("th",{width:"30%"},"Email"),Object(r["h"])("th",{width:"25%"},"購買內容"),Object(r["h"])("th",{width:"10%"},"應付金額"),Object(r["h"])("th",{width:"10%"},"是否付款"),Object(r["h"])("th")])],-1),i={class:"list-unstyled"},l={class:"form-check form-switch"},s={class:"btn-group"},d={class:"d-flex justify-content-center"};function b(t,e,n,b,u,h){var O=Object(r["A"])("Loading"),f=Object(r["A"])("pagination"),j=Object(r["A"])("order-modal"),p=Object(r["A"])("del-modal");return Object(r["t"])(),Object(r["e"])(r["a"],null,[Object(r["h"])(O,{active:u.isLoading},null,8,["active"]),Object(r["h"])("div",c,[Object(r["h"])("table",a,[o,Object(r["h"])("tbody",null,[(Object(r["t"])(!0),Object(r["e"])(r["a"],null,Object(r["y"])(u.orders,(function(t){return Object(r["t"])(),Object(r["e"])("tr",{key:t.id},[Object(r["h"])("td",null,Object(r["D"])(new Date(1e3*t.create_at).toLocaleDateString()),1),Object(r["h"])("td",null,Object(r["D"])(t.user.email),1),Object(r["h"])("td",null,[Object(r["h"])("ul",i,[(Object(r["t"])(!0),Object(r["e"])(r["a"],null,Object(r["y"])(t.products,(function(t,e){return Object(r["t"])(),Object(r["e"])("li",{key:e},Object(r["D"])(t.product.title)+" 數量："+Object(r["D"])(t.qty)+" "+Object(r["D"])(t.product.unit),1)})),128))])]),Object(r["h"])("td",null,Object(r["D"])(t.total),1),Object(r["h"])("td",null,[Object(r["h"])("div",l,[Object(r["M"])(Object(r["h"])("input",{class:"form-check-input",type:"checkbox",id:t.id,onChange:function(e){return h.updatePaid(t)},"onUpdate:modelValue":function(e){return t.is_paid=e},checked:t.is_paid},null,40,["id","onChange","onUpdate:modelValue","checked"]),[[r["G"],t.is_paid]]),Object(r["h"])("label",{class:"form-check-label",for:t.id},[Object(r["h"])("span",{class:[{"text-success":t.is_paid},{"text-danger":!t.is_paid}]},Object(r["D"])(t.is_paid?"已付款":"未付款"),3)],8,["for"])])]),Object(r["h"])("td",null,[Object(r["h"])("div",s,[Object(r["h"])("button",{type:"button",class:"btn btn-sm btn-outline-primary",onClick:function(e){return h.openModal("edit",t)}},"檢視",8,["onClick"]),Object(r["h"])("button",{type:"button",class:"btn btn-sm btn-outline-danger",onClick:function(e){return h.openModal("delete",t)}},"刪除",8,["onClick"])])])])})),128))])]),Object(r["h"])("div",d,[Object(r["h"])(f,{page:u.pagination,onGetPage:h.getOrders},null,8,["page","onGetPage"])])]),Object(r["h"])(j,{ref:"orderModal",id:"orderModal",order:u.tempOrder},null,8,["order"]),Object(r["h"])(p,{id:"delModal",ref:"delModal",item:u.tempOrder,onDelete:h.deleteOrder},null,8,["item","onDelete"])],64)}var u=n("5530"),h=(n("99af"),n("b0c0"),{class:"modal",tabindex:"-1",id:"orderModal",ref:"orderModal"}),O={class:"modal-dialog modal-lg"},f={class:"modal-content"},j=Object(r["h"])("div",{class:"modal-header bg-dark text-white"},[Object(r["h"])("h5",{class:"modal-title bg-datk text-white"},"訂單細節"),Object(r["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),p={class:"modal-body"},g={class:"row"},m={class:"col-md-4"},y=Object(r["h"])("h3",null,"用戶資料",-1),v={class:"table"},w={key:0},k=Object(r["h"])("th",null,"姓名",-1),M=Object(r["h"])("th",null,"Email",-1),D=Object(r["h"])("th",null,"電話",-1),P=Object(r["h"])("th",null,"地址",-1),S={class:"col-md-8"},x=Object(r["h"])("h3",null,"訂單細節",-1),_={class:"table"},C=Object(r["h"])("th",null,"訂單編號",-1),$=Object(r["h"])("th",null,"下單時間",-1),E=Object(r["h"])("th",null,"付款狀態",-1),L=Object(r["h"])("th",null,"總金額",-1),N=Object(r["h"])("h3",null,"選購商品",-1),A={class:"table"},J=Object(r["h"])("div",{class:"modal-footer"},[Object(r["h"])("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"關閉")],-1);function F(t,e,n,c,a,o){return Object(r["t"])(),Object(r["e"])("div",h,[Object(r["h"])("div",O,[Object(r["h"])("div",f,[j,Object(r["h"])("div",p,[Object(r["h"])("div",g,[Object(r["h"])("div",m,[y,Object(r["h"])("table",v,[a.tempOrder.user?(Object(r["t"])(),Object(r["e"])("tbody",w,[Object(r["h"])("tr",null,[k,Object(r["h"])("td",null,Object(r["D"])(a.tempOrder.user.name),1)]),Object(r["h"])("tr",null,[M,Object(r["h"])("td",null,Object(r["D"])(a.tempOrder.user.email),1)]),Object(r["h"])("tr",null,[D,Object(r["h"])("td",null,Object(r["D"])(a.tempOrder.user.tel),1)]),Object(r["h"])("tr",null,[P,Object(r["h"])("td",null,Object(r["D"])(a.tempOrder.user.address),1)])])):Object(r["f"])("",!0)])]),Object(r["h"])("div",S,[x,Object(r["h"])("table",_,[Object(r["h"])("tbody",null,[Object(r["h"])("tr",null,[C,Object(r["h"])("td",null,Object(r["D"])(a.tempOrder.id),1)]),Object(r["h"])("tr",null,[$,Object(r["h"])("td",null,Object(r["D"])(new Date(1e3*a.tempOrder.create_at).toLocaleDateString()),1)]),Object(r["h"])("tr",null,[E,Object(r["h"])("td",null,[Object(r["h"])("span",{class:[{"text-success":a.tempOrder.is_paid},{"text-danger":!a.tempOrder.is_paid}]},Object(r["D"])(a.tempOrder.is_paid?"已付款":"未付款"),3)])]),Object(r["h"])("tr",null,[L,Object(r["h"])("td",null,Object(r["D"])(a.tempOrder.total),1)])])]),N,Object(r["h"])("table",A,[Object(r["h"])("tbody",null,[(Object(r["t"])(!0),Object(r["e"])(r["a"],null,Object(r["y"])(a.tempOrder.products,(function(t){return Object(r["t"])(),Object(r["e"])("tr",{key:t.id},[Object(r["h"])("th",null,Object(r["D"])(t.product.title),1),Object(r["h"])("td",null,Object(r["D"])(t.qty)+" / "+Object(r["D"])(t.product.unit),1)])})),128))])])])])]),J])])],512)}var G=n("7b17"),q={props:["order"],data:function(){return{orderModal:{},tempOrder:{}}},mounted:function(){this.orderModal=new G["a"](this.$refs.orderModal)},watch:{order:function(){this.tempOrder=this.order}},methods:{showModal:function(){this.orderModal.show()},closeModal:function(){this.orderModal.hide()}}};q.render=F;var T=q,U=n("6ff1"),V=n("1799"),I={data:function(){return{orders:[],buyDate:"",tempOrder:{},isEdit:!1,pagination:{},isLoading:!1}},components:{orderModal:T,delModal:U["a"],pagination:V["a"]},created:function(){this.getOrders()},methods:{getOrders:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var n="".concat("https://vue3-course-api.hexschool.io","/api/").concat("larry","/admin/orders?page=").concat(e);this.$http.get(n).then((function(e){e.data.success?(t.orders=e.data.orders,t.pagination=e.data.pagination,t.isLoading=!1):alert(e.data.message)})).catch((function(t){console.log(t)}))},openModal:function(t,e){switch(t){case"edit":this.tempOrder=Object(u["a"])({},e),this.isEdit=!0,this.$refs.orderModal.showModal();break;case"delete":this.tempOrder=Object(u["a"])({},e),this.$refs.delModal.showModal();break;default:break}},updatePaid:function(t){var e=this,n={is_paid:t.is_paid},r="".concat("https://vue3-course-api.hexschool.io","/api/").concat("larry","/admin/order/").concat(t.id);this.$http.put(r,{data:n}).then((function(t){alert(t.data.message),console.log(t.data),e.getOrders()})).catch((function(t){console.log(t)}))},deleteOrder:function(t){var e=this,n="".concat("https://vue3-course-api.hexschool.io","/api/").concat("larry","/admin/order/").concat(t.id);this.$http.delete(n).then((function(t){t.data.success?(alert(t.data.message),e.getOrders(),e.$refs.delModal.closeModal()):alert(t.data.message)}))}}};I.render=b;e["default"]=I},"6ff1":function(t,e,n){"use strict";var r=n("7a23"),c={id:"delModal",ref:"delModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delModalLabel","aria-hidden":"true"},a={class:"modal-dialog"},o={class:"modal-content border-0"},i=Object(r["h"])("div",{class:"modal-header bg-danger text-white"},[Object(r["h"])("h5",{id:"delModalLabel",class:"modal-title"},[Object(r["h"])("span",null,"刪除產品")]),Object(r["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),l={class:"modal-body"},s=Object(r["g"])(" 是否刪除 "),d={class:"text-danger"},b=Object(r["g"])(" 商品(刪除後將無法恢復)。 "),u={class:"modal-footer"},h=Object(r["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function O(t,e,n,O,f,j){return Object(r["t"])(),Object(r["e"])("div",c,[Object(r["h"])("div",a,[Object(r["h"])("div",o,[i,Object(r["h"])("div",l,[s,Object(r["h"])("strong",d,Object(r["D"])(n.item.id),1),b]),Object(r["h"])("div",u,[h,Object(r["h"])("button",{type:"button",class:"btn btn-danger",onClick:e[1]||(e[1]=function(e){return t.$emit("delete",n.item)})}," 確認刪除 ")])])])],512)}var f=n("7b17"),j={props:["item"],mounted:function(){this.delModal=new f["a"](this.$refs.delModal)},methods:{showModal:function(){this.delModal.show()},closeModal:function(){this.delModal.hide()}}};j.render=O;e["a"]=j},"746f":function(t,e,n){var r=n("428f"),c=n("5135"),a=n("e538"),o=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});c(e,t)||o(e,t,{value:a.f(t)})}},a4d3:function(t,e,n){"use strict";var r=n("23e7"),c=n("da84"),a=n("d066"),o=n("c430"),i=n("83ab"),l=n("4930"),s=n("fdbf"),d=n("d039"),b=n("5135"),u=n("e8b5"),h=n("861d"),O=n("825a"),f=n("7b0b"),j=n("fc6a"),p=n("c04e"),g=n("5c6c"),m=n("7c73"),y=n("df75"),v=n("241c"),w=n("057f"),k=n("7418"),M=n("06cf"),D=n("9bf2"),P=n("d1e7"),S=n("9112"),x=n("6eeb"),_=n("5692"),C=n("f772"),$=n("d012"),E=n("90e3"),L=n("b622"),N=n("e538"),A=n("746f"),J=n("d44e"),F=n("69f3"),G=n("b727").forEach,q=C("hidden"),T="Symbol",U="prototype",V=L("toPrimitive"),I=F.set,Q=F.getterFor(T),W=Object[U],z=c.Symbol,B=a("JSON","stringify"),H=M.f,K=D.f,R=w.f,X=P.f,Y=_("symbols"),Z=_("op-symbols"),tt=_("string-to-symbol-registry"),et=_("symbol-to-string-registry"),nt=_("wks"),rt=c.QObject,ct=!rt||!rt[U]||!rt[U].findChild,at=i&&d((function(){return 7!=m(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=H(W,e);r&&delete W[e],K(t,e,n),r&&t!==W&&K(W,e,r)}:K,ot=function(t,e){var n=Y[t]=m(z[U]);return I(n,{type:T,tag:t,description:e}),i||(n.description=e),n},it=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof z},lt=function(t,e,n){t===W&&lt(Z,e,n),O(t);var r=p(e,!0);return O(n),b(Y,r)?(n.enumerable?(b(t,q)&&t[q][r]&&(t[q][r]=!1),n=m(n,{enumerable:g(0,!1)})):(b(t,q)||K(t,q,g(1,{})),t[q][r]=!0),at(t,r,n)):K(t,r,n)},st=function(t,e){O(t);var n=j(e),r=y(n).concat(Ot(n));return G(r,(function(e){i&&!bt.call(n,e)||lt(t,e,n[e])})),t},dt=function(t,e){return void 0===e?m(t):st(m(t),e)},bt=function(t){var e=p(t,!0),n=X.call(this,e);return!(this===W&&b(Y,e)&&!b(Z,e))&&(!(n||!b(this,e)||!b(Y,e)||b(this,q)&&this[q][e])||n)},ut=function(t,e){var n=j(t),r=p(e,!0);if(n!==W||!b(Y,r)||b(Z,r)){var c=H(n,r);return!c||!b(Y,r)||b(n,q)&&n[q][r]||(c.enumerable=!0),c}},ht=function(t){var e=R(j(t)),n=[];return G(e,(function(t){b(Y,t)||b($,t)||n.push(t)})),n},Ot=function(t){var e=t===W,n=R(e?Z:j(t)),r=[];return G(n,(function(t){!b(Y,t)||e&&!b(W,t)||r.push(Y[t])})),r};if(l||(z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=E(t),n=function(t){this===W&&n.call(Z,t),b(this,q)&&b(this[q],e)&&(this[q][e]=!1),at(this,e,g(1,t))};return i&&ct&&at(W,e,{configurable:!0,set:n}),ot(e,t)},x(z[U],"toString",(function(){return Q(this).tag})),x(z,"withoutSetter",(function(t){return ot(E(t),t)})),P.f=bt,D.f=lt,M.f=ut,v.f=w.f=ht,k.f=Ot,N.f=function(t){return ot(L(t),t)},i&&(K(z[U],"description",{configurable:!0,get:function(){return Q(this).description}}),o||x(W,"propertyIsEnumerable",bt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:z}),G(y(nt),(function(t){A(t)})),r({target:T,stat:!0,forced:!l},{for:function(t){var e=String(t);if(b(tt,e))return tt[e];var n=z(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(b(et,t))return et[t]},useSetter:function(){ct=!0},useSimple:function(){ct=!1}}),r({target:"Object",stat:!0,forced:!l,sham:!i},{create:dt,defineProperty:lt,defineProperties:st,getOwnPropertyDescriptor:ut}),r({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:ht,getOwnPropertySymbols:Ot}),r({target:"Object",stat:!0,forced:d((function(){k.f(1)}))},{getOwnPropertySymbols:function(t){return k.f(f(t))}}),B){var ft=!l||d((function(){var t=z();return"[null]"!=B([t])||"{}"!=B({a:t})||"{}"!=B(Object(t))}));r({target:"JSON",stat:!0,forced:ft},{stringify:function(t,e,n){var r,c=[t],a=1;while(arguments.length>a)c.push(arguments[a++]);if(r=e,(h(e)||void 0!==t)&&!it(t))return u(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!it(e))return e}),c[1]=e,B.apply(null,c)}})}z[U][V]||S(z[U],V,z[U].valueOf),J(z,T),$[q]=!0},b0c0:function(t,e,n){var r=n("83ab"),c=n("9bf2").f,a=Function.prototype,o=a.toString,i=/^\s*function ([^ (]*)/,l="name";r&&!(l in a)&&c(a,l,{configurable:!0,get:function(){try{return o.call(this).match(i)[1]}catch(t){return""}}})},dbb4:function(t,e,n){var r=n("23e7"),c=n("83ab"),a=n("56ef"),o=n("fc6a"),i=n("06cf"),l=n("8418");r({target:"Object",stat:!0,sham:!c},{getOwnPropertyDescriptors:function(t){var e,n,r=o(t),c=i.f,s=a(r),d={},b=0;while(s.length>b)n=c(r,e=s[b++]),void 0!==n&&l(d,e,n);return d}})},e439:function(t,e,n){var r=n("23e7"),c=n("d039"),a=n("fc6a"),o=n("06cf").f,i=n("83ab"),l=c((function(){o(1)})),s=!i||l;r({target:"Object",stat:!0,forced:s,sham:!i},{getOwnPropertyDescriptor:function(t,e){return o(a(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r}}]);
//# sourceMappingURL=chunk-a71c5308.1d8efb45.js.map