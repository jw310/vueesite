webpackJsonp([1],{CHNq:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=a("VU/8")({name:"App"},r,!1,function(t){a("y551")},null,null).exports,o=a("mtWM"),n=a.n(o),l=a("Rf8U"),d=a.n(l),c=(a("K3J8"),a("ZZvs")),u=a.n(c),p=(a("SYh3"),a("/ocq")),m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"col-md-2 d-none d-md-block bg-light sidebar"},[a("div",{staticClass:"sidebar-sticky"},[t._m(0),t._v(" "),a("ul",{staticClass:"nav flex-column mb-2"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/admin/products"}},[a("i",{staticClass:"fas fa-box-open"}),t._v(" "),t._v("\n              產品列表\n            ")])],1)]),t._v(" "),t._m(1),t._v(" "),a("ul",{staticClass:"nav flex-column mb-2"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/customer_order"}},[a("i",{staticClass:"fas fa-shopping-cart"}),t._v("\n               模擬訂單\n            ")])],1)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h6",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"},[e("span",[this._v("管理員")]),this._v(" "),e("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#"}},[e("span",{attrs:{"data-feather":"plus-circle"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h6",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"},[e("span",[this._v("模擬功能")]),this._v(" "),e("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#"}},[e("span",{attrs:{"data-feather":"plus-circle"}})])])}]},v=a("VU/8")(null,m,!1,null,null,null).exports,_={name:"Navbar",methods:{signout(){const t=this;this.$http.post("https://vue-course-api.hexschool.io/logout").then(e=>{console.log(e.data),e.data.success&&t.$router.push("/login")})}}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow"},[a("a",{staticClass:"navbar-brand col-sm-3 col-md-2 mr-0",attrs:{href:"#"}},[t._v("Company name")]),t._v(" "),a("input",{staticClass:"form-control form-control-dark w-100",attrs:{type:"text",placeholder:"Search","aria-label":"Search"}}),t._v(" "),a("ul",{staticClass:"navbar-nav px-3"},[a("li",{staticClass:"nav-item text-nowrap"},[a("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.signout(e)}}},[t._v("Sign out")])])])])])},staticRenderFns:[]},g=a("VU/8")(_,h,!1,null,null,null).exports,f={name:"Navbar",data:()=>({messages:[]}),methods:{updateMessage(t,e){const a=Math.floor(new Date/1e3);this.messages.push({message:t,status:e,timestamp:a}),this.removeMessageWithTiming(a)},removeMessage(t){this.messages.splice(t,1)},removeMessageWithTiming(t){const e=this;setTimeout(()=>{e.messages.forEach((a,s)=>{a.timestamp===t&&e.messages.splice(s,1)})},5e3)}},created(){const t=this;t.$bus.$on("message:push",(e,a="warning")=>{t.updateMessage(e,a)})}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message-alert"},t._l(t.messages,function(e,s){return a("div",{key:s,staticClass:"alert alert-dismissible",class:"alert-"+e.status},[t._v("\n    "+t._s(e.message)+"\n    "),a("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){return t.removeMessage(s)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}),0)},staticRenderFns:[]};var C={components:{Sidebar:v,Navbar:g,Alert:a("VU/8")(f,b,!1,function(t){a("tDxn")},null,null).exports}},x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Navbar"),this._v(" "),e("Alert"),this._v(" "),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row"},[e("Sidebar"),this._v(" "),e("main",{staticClass:"col-md-9 ml-sm-auto col-lg-10 px-4",attrs:{role:"main"}},[e("router-view")],1)],1)])],1)},staticRenderFns:[]},y=a("VU/8")(C,x,!1,null,null,null).exports,P={name:"HelloWorld",data:()=>({user:{username:"",password:""}}),methods:{signin(){const t=this;this.$http.post("https://vue-course-api.hexschool.io/admin/signin",t.user).then(e=>{e.data.success&&(t.$router.push("/"),t.$router.push("/admin/products"))})}}},w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("form",{staticClass:"form-signin",on:{submit:function(e){return e.preventDefault(),t.signin(e)}}},[a("h1",{staticClass:"h3 mb-3 font-weight-normal"},[t._v("Please sign in")]),t._v(" "),a("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[t._v("Email address")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"Email address",required:"",autofocus:""},domProps:{value:t.user.username},on:{input:function(e){e.target.composing||t.$set(t.user,"username",e.target.value)}}}),t._v(" "),a("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[t._v("Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password",required:""},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),t._v(" "),t._m(0),t._v(" "),a("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"submit"}},[t._v("Sign in")]),t._v(" "),a("p",{staticClass:"mt-5 mb-3 text-muted"},[t._v("© 2019")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"checkbox mb-3"},[e("label",[e("input",{attrs:{type:"checkbox",value:"remember-me"}}),this._v(" Remember me\n         ")])])}]};var $=a("VU/8")(P,w,!1,function(t){a("CHNq")},"data-v-809514b8",null).exports,k=a("7t+N"),N=a.n(k),L={data:()=>({products:[],pagination:{},tempProduct:{},isNew:!1,deleteId:"",isLoading:!1,status:{fileUploading:!1}}),methods:{getProducts(t=1){const e=this,a=`https://vue-course-api.hexschool.io/api/jw310/admin/products?page=${t}`;e.isLoading=!0,this.$http.get(a).then(t=>{e.isLoading=!1,e.products=t.data.products,e.pagination=t.data.pagination})},openModal(t,e){t?(this.tempProduct={},this.isNew=!0):(this.tempProduct=Object.assign({},e),this.isNew=!1),N()("#productModal").modal("show")},updateProduct(){let t="https://vue-course-api.hexschool.io/api/jw310/admin/product",e="post";const a=this;a.isNew||(t=`https://vue-course-api.hexschool.io/api/jw310/admin/product/${a.tempProduct.id}`,e="put"),this.$http[e](t,{data:a.tempProduct}).then(t=>{t.data.success?(N()("#productModal").modal("hide"),a.getProducts()):(N()("#productModal").modal("hide"),a.getProducts(),console.log("新增失敗"))})},delModal(t){N()("#delProductModal").modal("show"),this.deleteId=t.id},deleteProduct(){const t=this,e=`https://vue-course-api.hexschool.io/api/jw310/admin/product/${t.deleteId}`;this.$http.delete(e).then(e=>{e.data.success?(N()("#delProductModal").modal("hide"),console.log("刪除成功"),t.getProducts()):(N()("#delProductModal").modal("hide"),t.getProducts(),console.log("刪除失敗"))})},uploadFile(){const t=this.$refs.files.files[0],e=this,a=new FormData;a.append("file-to-upload",t);e.status.fileUploading=!0,this.$http.post("https://vue-course-api.hexschool.io/api/jw310/admin/upload",a,{headers:{"content-Type":"multipart/form-data"}}).then(t=>{e.status.fileUploading=!1,t.data.success?e.$set(e.tempProduct,"imageUrl",t.data.imageUrl):this.$bus.$emit("message:push",t.data.message,"danger")})}},created(){this.getProducts()}},M={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),t._v(" "),a("div",{staticClass:"text-right mt-4"},[a("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.openModal(!0)}}},[t._v("建立新產品")])]),t._v(" "),a("table",{staticClass:"table mt-4"},[t._m(0),t._v(" "),a("tbody",t._l(t.products,function(e,s){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.category))]),t._v(" "),a("td",[t._v(t._s(e.title))]),t._v(" "),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.origin_price)))]),t._v(" "),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.price)))]),t._v(" "),a("td",[e.is_enabled?a("span",{staticClass:"text-success"},[t._v("啟用")]):a("span",[t._v("未啟用")])]),t._v(" "),a("td",[a("div",{staticStyle:{display:"inline-block",width:"100px"}},[a("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(a){return t.openModal(!1,e)}}},[t._v("編輯")]),t._v(" "),a("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(a){return t.delModal(e)}}},[t._v("刪除")])])])])}),0)]),t._v(" "),a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disable:!t.pagination.has_pre}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.getProducts(t.pagination.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")]),t._v(" "),a("span",{staticClass:"sr-only"},[t._v("Previous")])])]),t._v(" "),t._l(t.pagination.total_pages,function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.pagination.current_page===e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.getProducts(e)}}},[t._v(t._s(e))])])}),t._v(" "),a("li",{staticClass:"page-item"},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.getProducts(t.pagination.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")]),t._v(" "),a("span",{staticClass:"sr-only"},[t._v("Next")])])])],2)]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(1),t._v(" "),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"image"}},[t._v("輸入圖片網址")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.imageUrl,expression:"tempProduct.imageUrl"}],staticClass:"form-control",attrs:{type:"text",id:"image",placeholder:"請輸入圖片連結"},domProps:{value:t.tempProduct.imageUrl},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"imageUrl",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"customFile"}},[t._v("\n                  或 上傳圖片\n                  "),t.status.fileUploading?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e()]),t._v(" "),a("input",{ref:"files",staticClass:"form-control",attrs:{type:"file",id:"customFile"},on:{change:t.uploadFile}})]),t._v(" "),a("img",{staticClass:"img-fluid",attrs:{img:"https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80",src:t.tempProduct.imageUrl,alt:""}})]),t._v(" "),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("標題")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.title,expression:"tempProduct.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:t.tempProduct.title},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"title",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"category"}},[t._v("分類")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.category,expression:"tempProduct.category"}],staticClass:"form-control",attrs:{type:"text",id:"category",placeholder:"請輸入分類"},domProps:{value:t.tempProduct.category},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"category",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("單位")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.unit,expression:"tempProduct.unit"}],staticClass:"form-control",attrs:{type:"unit",id:"unit",placeholder:"請輸入單位"},domProps:{value:t.tempProduct.unit},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"unit",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"origin_price"}},[t._v("原價")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.origin_price,expression:"tempProduct.origin_price"}],staticClass:"form-control",attrs:{type:"number",id:"origin_price",placeholder:"請輸入原價"},domProps:{value:t.tempProduct.origin_price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"origin_price",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("售價")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.price,expression:"tempProduct.price"}],staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"請輸入售價"},domProps:{value:t.tempProduct.price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"price",e.target.value)}}})])]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("產品描述")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.description,expression:"tempProduct.description"}],staticClass:"form-control",attrs:{type:"text",id:"description",placeholder:"請輸入產品描述"},domProps:{value:t.tempProduct.description},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"description",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"content"}},[t._v("說明內容")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.content,expression:"tempProduct.content"}],staticClass:"form-control",attrs:{type:"text",id:"content",placeholder:"請輸入產品說明內容"},domProps:{value:t.tempProduct.content},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"content",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.is_enabled,expression:"tempProduct.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":1,"false-value":0,id:"is_enabled"},domProps:{checked:Array.isArray(t.tempProduct.is_enabled)?t._i(t.tempProduct.is_enabled,null)>-1:t._q(t.tempProduct.is_enabled,1)},on:{change:function(e){var a=t.tempProduct.is_enabled,s=e.target,r=s.checked?1:0;if(Array.isArray(a)){var i=t._i(a,null);s.checked?i<0&&t.$set(t.tempProduct,"is_enabled",a.concat([null])):i>-1&&t.$set(t.tempProduct,"is_enabled",a.slice(0,i).concat(a.slice(i+1)))}else t.$set(t.tempProduct,"is_enabled",r)}}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("是否啟用")])])])])])]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateProduct}},[t._v("確認")])])])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"delProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(2),t._v(" "),a("div",{staticClass:"modal-body"},[t._v("\n          是否刪除\n          "),a("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempProduct.title))]),t._v(" 商品(刪除後將無法恢復)。\n        ")]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),t._v(" "),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.deleteProduct}},[t._v("確認刪除")])])])])])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{width:"120"}},[t._v("分類")]),t._v(" "),a("th",[t._v("產品名稱")]),t._v(" "),a("th",{attrs:{width:"120"}},[t._v("原價")]),t._v(" "),a("th",{attrs:{width:"120"}},[t._v("售價")]),t._v(" "),a("th",{attrs:{width:"100"}},[t._v("是否啟用")]),t._v(" "),a("th",{attrs:{width:"80"}},[t._v("編輯")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header bg-dark text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[this._v("新增產品")])]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header bg-danger text-white"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e("span",[this._v("刪除產品")])]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])}]},E=a("VU/8")(L,M,!1,null,null,null).exports,q={data:()=>({products:[],product:{},carts:{},total:0,final_total:0,status:{loadingItem:""},form:{user:{name:"",email:"",tel:"",address:""},message:""},isLoading:!1,coupon_code:""}),methods:{getProducts(){const t=this;t.loading=!0,this.$http.get("https://vue-course-api.hexschool.io/api/jw310/products").then(e=>{t.products=e.data.products,t.loading=!1})},getProduct(t){const e=this,a=`https://vue-course-api.hexschool.io/api/jw310/product/${t}`;e.status.loadingItem=t,this.$http.get(a).then(t=>{e.product=t.data.product,N()("#productModal").modal("show"),e.status.loadingItem=""})},addtoCart(t,e=1){const a=this;a.status.loadingItem=t;const s={product_id:t,qty:e};this.$http.post("https://vue-course-api.hexschool.io/api/jw310/cart",{data:s}).then(t=>{a.status.loadingItem="",a.getCart(),N()("#productModal").modal("hide")})},getCart(){const t=this;t.isLoading=!0,this.$http.get("https://vue-course-api.hexschool.io/api/jw310/cart").then(e=>{t.carts=e.data.data.carts,t.total=e.data.data.total,t.final_total=e.data.data.final_total,t.isLoading=!1})},removeCartItem(t){const e=this,a=`https://vue-course-api.hexschool.io/api/jw310/cart/${t}`;e.isLoading=!0,this.$http.delete(a).then(t=>{this.getCart(),e.isLoading=!1})},addCouponCode(){const t=this,e={code:t.coupon_code};t.isLoading=!0,this.$http.delete("https://vue-course-api.hexschool.io/api/jw310/coupon",{data:e}).then(e=>{this.getCart(),t.isLoading=!1})},createOrder(){const t=this,e=t.form;this.$validator.validate().then(a=>{a?this.$http.post("https://vue-course-api.hexschool.io/api/jw310/order",{data:e}).then(e=>{console.log("訂單已建立",e),e.data.success&&t.$router.push(`/customer_checkout/${e.data.orderId}`),t.isLoading=!1}):console.log("欄位不完整")})}},created(){this.getProducts(),this.getCart()}},j={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),t._v(" "),a("div",{staticClass:"row mt-4"},t._l(t.products,function(e){return a("div",{key:e.id,staticClass:"col-md-4 mb-4"},[a("div",{staticClass:"card border-0 shadow-sm"},[a("div",{staticStyle:{height:"150px","background-size":"cover","background-position":"center"},style:{backgroundImage:"url("+e.imageUrl+")"}}),t._v(" "),a("div",{staticClass:"card-body"},[a("span",{staticClass:"badge badge-secondary float-right ml-2"},[t._v(t._s(e.category))]),t._v(" "),a("h5",{staticClass:"card-title"},[a("a",{staticClass:"text-dark",attrs:{href:"#"}},[t._v(t._s(e.title))])]),t._v(" "),a("p",{staticClass:"card-text"},[t._v(t._s(e.content))]),t._v(" "),a("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[e.price?t._e():a("div",{staticClass:"h5"},[t._v(t._s(e.origin_price))]),t._v(" "),e.price?a("del",{staticClass:"h6"},[t._v(t._s(e.origin_price))]):t._e(),t._v(" "),e.price?a("div",{staticClass:"h5"},[t._v(t._s(e.price))]):t._e()])]),t._v(" "),a("div",{staticClass:"card-footer d-flex"},[a("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{type:"button"},on:{click:function(a){return t.getProduct(e.id)}}},[t.status.LoadingItem===e.id?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v("\n                        查看更多\n                    ")]),t._v(" "),a("button",{staticClass:"btn btn-outline-danger btn-sm ml-auto",attrs:{type:"button"},on:{click:function(a){return t.addtoCart(e.id)}}},[t.status.LoadingItem===e.id?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v("\n                        加到購物車\n                    ")])])])])}),0),t._v(" "),a("table",{staticClass:"table"},[t._m(0),t._v(" "),a("tbody",t._l(t.carts,function(e,s){return a("tr",{key:e.id},[a("td",{attrs:{width:"20px"}},[a("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(a){return t.removeCartItem(e.id)}}},[a("i",{staticClass:"fas fa-trash-alt"})])]),t._v(" "),a("td",{attrs:{width:"100px"}},[t._v(t._s(e.product.title)+"\n             "),e.coupon?a("div",{staticClass:"text-success"},[t._v("\n                 已使用優惠券\n             ")]):t._e()]),t._v(" "),a("td",{attrs:{width:"50px"}},[t._v(t._s(e.qty)+"/"+t._s(e.product.unit))]),t._v(" "),a("td",{attrs:{width:"50px",align:"right"}},[t._v(t._s(t._f("currency")(e.total)))])])}),0),t._v(" "),a("tfoot",[a("tr",[a("td",{attrs:{colspan:"3",align:"right"}},[t._v("原價")]),t._v(" "),a("td",{attrs:{align:"right"}},[t._v(t._s(this.total))])]),t._v(" "),this.final_total!==this.total?a("tr",[a("td",{staticClass:"text-success",attrs:{colspan:"3",align:"right"}},[t._v("折扣價")]),t._v(" "),a("td",{staticClass:"text-success",attrs:{align:"right"}},[t._v(t._s(this.final_total))])]):t._e()])]),t._v(" "),a("div",{staticClass:"input-group mb-3 input-group-sm"},[a("input",{staticClass:"text-right",attrs:{type:"text",placeholder:"請輸入優惠碼"}}),t._v(" "),a("div",[a("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"button"},on:{click:t.addCouponCode}},[t._v("送出")])])]),t._v(" "),a("div",{staticClass:"my-5 row justify-content-center"},[a("form",{staticClass:"col-md-6",on:{submit:function(e){return e.preventDefault(),t.createOrder(e)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"useremail"}},[t._v("Email")]),t._v(" "),a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"},{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"}],staticClass:"form-control",attrs:{type:"email",name:"email",id:"useremail",placeholder:"請輸入 Email",required:""},domProps:{value:t.form.user.email},on:{input:function(e){e.target.composing||t.$set(t.form.user,"email",e.target.value)}}}),t._v(" "),t.errors.has("email")?a("span",{staticClass:"text-danger"},[t._v("\n          "+t._s(t.errors.first("email"))+"\n      ")]):t._e()]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"username"}},[t._v("收件人姓名")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":t.errors.has("name")},attrs:{type:"text",name:"name",id:"username",placeholder:"輸入姓名"},domProps:{value:t.form.user.name},on:{input:function(e){e.target.composing||t.$set(t.form.user,"name",e.target.value)}}}),t._v(" "),t.errors.has("name")?a("span",{staticClass:"text-danger"},[t._v("姓名必須輸入")]):t._e()]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"usertel"}},[t._v("收件人電話")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"tel",id:"usertel",name:"phoneNubmer",placeholder:"請輸入電話"},domProps:{value:t.form.user.tel},on:{input:function(e){e.target.composing||t.$set(t.form.user,"tel",e.target.value)}}}),t._v(" "),t.errors.has("phoneNubmer")?a("span",{staticClass:"text-danger"},[t._v("請輸入電話")]):t._e()]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"useraddress"}},[t._v("收件人地址")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"text",name:"address",id:"useraddress",placeholder:"請輸入地址"},domProps:{value:t.form.user.address},on:{input:function(e){e.target.composing||t.$set(t.form.user,"address",e.target.value)}}}),t._v(" "),t.errors.has("address")?a("span",{staticClass:"text-danger"},[t._v("地址欄位不得留空")]):t._e()]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"comment"}},[t._v("留言")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"",id:"comment",cols:"30",rows:"10"},domProps:{value:t.form.message},on:{input:function(e){e.target.composing||t.$set(t.form,"message",e.target.value)}}})]),t._v(" "),t._m(1)])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v(t._s(t.product.title))]),t._v(" "),t._m(2)]),t._v(" "),a("div",{staticClass:"modal-body"},[a("img",{staticClass:"img-fluid",attrs:{src:t.product.image,alt:""}}),t._v(" "),a("blockquote",{staticClass:"blockquote mt-3"},[a("p",{staticClass:"mb-0"},[t._v(t._s(t.product.content))]),t._v(" "),a("footer",{staticClass:"blockquote-footer text-right"},[t._v(t._s(t.product.description))])]),t._v(" "),a("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[t.product.price?t._e():a("div",{staticClass:"h4"},[t._v(t._s(t.product.origin_price)+" 元")]),t._v(" "),t.product.price?a("del",{staticClass:"h6"},[t._v("原價 "+t._s(t.product.origin_price)+" 元")]):t._e(),t._v(" "),t.product.price?a("div",{staticClass:"h4"},[t._v("現在只要"+t._s(t.product.price)+" 元")]):t._e()]),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.product.num,expression:"product.num"}],staticClass:"form-control mt-3",attrs:{name:""},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.product,"num",e.target.multiple?a:a[0])}}},t._l(10,function(e){return a("option",{key:e,domProps:{value:e}},[t._v("\n                            選購 "+t._s(e)+" "+t._s(t.product.unit)+"\n                        ")])}),0)]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("div",{staticClass:"text-muted text-nowrap mr-3"},[t._v("\n                        小計 "),a("strong",[t._v(t._s(t.product.num*t.product.price))]),t._v(" 元\n                    ")]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.addtoCart(t.product.id,t.product.num)}}},[t.product.id===t.status.LoadingItem?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e(),t._v("\n                    加到購物車\n                    ")])])])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th"),this._v(" "),e("th",[this._v("產品名稱")]),this._v(" "),e("th",[this._v("數量")]),this._v(" "),e("th",[this._v("單價")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-right"},[e("button",{staticClass:"btn btn-danger"},[this._v("送出訂單")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])}]};var I=a("VU/8")(q,j,!1,function(t){a("mAIn")},"data-v-4d51a880",null).exports,U={data:()=>({order:{user:{}},orderId:""}),methods:{getOrder(){const t=this,e=`https://vue-course-api.hexschool.io/api/jw310/order/${t.orderId}`;t.isLoading=!0,this.$http.get(e).then(e=>{t.order=e.data.order,t.isLoading=!1})},payOrder(){const t=this,e=`https://vue-course-api.hexschool.io/api/jw310/pay/${t.orderId}`;t.isLoading=!0,this.$http.post(e).then(e=>{console.log(e),e.data.success&&t.getOrder(),t.isLoading=!1})}},created(){this.orderId=this.$route.params.orderId,this.getOrder()}},F={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"my-5 row justify-content-center"},[a("form",{staticClass:"col-md-6",on:{submit:function(e){return e.preventDefault(),t.payOrder(e)}}},[a("table",{staticClass:"table"},[t._m(0),t._v(" "),a("tbody",t._l(t.order.products,function(e){return a("tr",{key:e.id},[a("td",{staticClass:"align-middle"},[t._v(t._s(e.product.title))]),t._v(" "),a("td",{staticClass:"align-middle"},[t._v(t._s(e.qty)+"/"+t._s(e.product.unit))]),t._v(" "),a("td",{staticClass:"align-middle text-right"},[t._v(t._s(e.final_total))])])}),0),t._v(" "),a("tfoot",[a("tr",[a("td",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v("總計")]),t._v(" "),a("td",{staticClass:"text-right"},[t._v(t._s(t.order.total))])])])]),t._v(" "),a("table",{staticClass:"table"},[a("tbody",[a("tr",[a("th",{attrs:{width:"100"}},[t._v("Email")]),t._v(" "),a("td",[t._v(t._s(t.order.user.email))])]),t._v(" "),a("tr",[a("th",[t._v("姓名")]),t._v(" "),a("td",[t._v(t._s(t.order.user.name))])]),t._v(" "),a("tr",[a("th",[t._v("收件人電話")]),t._v(" "),a("td",[t._v(t._s(t.order.user.tel))])]),t._v(" "),a("tr",[a("th",[t._v("收件人地址")]),t._v(" "),a("td",[t._v(t._s(t.order.user.address))])]),t._v(" "),a("tr",[a("th",[t._v("付款狀態")]),t._v(" "),a("td",[t.order.is_paid?a("span",{staticClass:"text-success"},[t._v("付款完成")]):a("span",[t._v("尚未付款")])])])])]),t._v(" "),!1===t.order.is_paid?a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-danger"},[t._v("確認付款去")])]):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("th",[this._v("品名")]),this._v(" "),e("th",[this._v("數量")]),this._v(" "),e("th",[this._v("單價")])])}]},A=a("VU/8")(U,F,!1,null,null,null).exports;s.a.use(p.a);var D=new p.a({routes:[{path:"*",redirect:"Login"},{path:"/login",name:"Login",component:$},{path:"/admin",name:"dashboard",component:y,children:[{path:"Products",name:"Products",component:E,meta:{requiresAuth:!0}}]},{path:"/",name:"dashboard",component:y,children:[{path:"customer_order",name:"CustomerOrder",component:I},{path:"customer_checkout/:orderId",name:"CustomerCheckout",component:A}]}]});s.a.prototype.$bus=new s.a;var O=a("sUu7"),R=a("ttsa"),S=a.n(R),V=a("TXmL");s.a.use(V.a);const T=new V.a({locale:"zhTW"});s.a.use(O.a,{events:"input|blur",i18n:T,dictionary:{zhTW:S.a}}),s.a.use(d.a,n.a),n.a.defaults.withCredentials=!0,s.a.config.productionTip=!1,s.a.component("Loading",u.a),s.a.filter("currency",function(t){return`$${Number(t).toFixed(0).replace(/./g,(t,e,a)=>e&&"."!==t&&(a.length-e)%3==0?`, ${t}`.replace(/\s/g,""):t)}`}),new s.a({el:"#app",router:D,components:{App:i},template:"<App/>",i18n:T}),D.beforeEach((t,e,a)=>{if(console.log("to",t,"from",e,"next",a),t.meta.requiresAuth){const t="https://vue-course-api.hexschool.io/api/user/check";n.a.post(t).then(t=>{t.data.success?a():a({path:"/login"})})}else a()})},SYh3:function(t,e){},mAIn:function(t,e){},tDxn:function(t,e){},y551:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ff38cc91c5dbb3d908a4.js.map