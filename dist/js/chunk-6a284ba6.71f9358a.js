(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a284ba6"],{1135:function(t,e,c){"use strict";c.r(e);var a=c("7a23");const l={class:"table mt-4"},o=Object(a["h"])("thead",null,[Object(a["h"])("tr",null,[Object(a["h"])("th",{width:"120"},"分類"),Object(a["h"])("th",null,"產品名稱"),Object(a["h"])("th",{width:"120"},"原價"),Object(a["h"])("th",{width:"120"},"售價"),Object(a["h"])("th",{width:"100"},"是否啟用"),Object(a["h"])("th",{width:"200"},"編輯")])],-1),s={class:"text-right"},i={class:"text-right"},d={key:0,class:"text-success"},n={key:1,class:"text-muted"},r={class:"btn-group"},b=["onClick"],u=["onClick"];function p(t,e,c,p,h,m){const j=Object(a["I"])("Loading"),O=Object(a["I"])("Pagination"),g=Object(a["I"])("ProductModal"),P=Object(a["I"])("DelModal");return Object(a["z"])(),Object(a["g"])(a["a"],null,[Object(a["k"])(j,{active:h.isLoading},null,8,["active"]),Object(a["h"])("button",{onClick:e[0]||(e[0]=t=>m.openModal(!0)),class:"btn btn-primary px-5 rounded-0 text-white mt-2",type:"button"},"新增一個產品"),Object(a["h"])("table",l,[o,(Object(a["z"])(!0),Object(a["g"])(a["a"],null,Object(a["G"])(h.products,e=>(Object(a["z"])(),Object(a["g"])("tbody",{key:e.id},[Object(a["h"])("tr",null,[Object(a["h"])("td",null,Object(a["L"])(e.category),1),Object(a["h"])("td",null,Object(a["L"])(e.title),1),Object(a["h"])("td",s,Object(a["L"])(t.$filters.currency(e.origin_price)),1),Object(a["h"])("td",i,Object(a["L"])(t.$filters.currency(e.price)),1),Object(a["h"])("td",null,[e.is_enabled?(Object(a["z"])(),Object(a["g"])("span",d,"啟用")):(Object(a["z"])(),Object(a["g"])("span",n,"未啟用"))]),Object(a["h"])("td",null,[Object(a["h"])("div",r,[Object(a["h"])("button",{type:"button",onClick:t=>m.openModal(!1,e),class:"btn btn-outline-primary btn-sm"},"編輯",8,b),Object(a["h"])("button",{type:"button",onClick:t=>m.opendelModal(e),class:"btn btn-outline-danger btn-sm"},"刪除",8,u)])])])]))),128))]),Object(a["k"])(O,{pages:h.pagination,onEmitPages:m.getProducts},null,8,["pages","onEmitPages"]),Object(a["k"])(g,{ref:"productModal",product:h.tempProduct,onUpdateProduct:m.updateProduct},null,8,["product","onUpdateProduct"]),Object(a["k"])(P,{ref:"delModal",item:h.tempProduct,onDelItem:m.delProduct},null,8,["item","onDelItem"])],64)}const h={class:"modal fade",ref:"modal",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},m={class:"modal-dialog modal-xl",role:"document"},j={class:"modal-content border-0"},O=Object(a["h"])("div",{class:"modal-header bg-dark text-white"},[Object(a["h"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(a["h"])("span",null,"新增產品")]),Object(a["h"])("button",{type:"button",class:"btn-close"})],-1),g={class:"modal-body"},P={class:"row"},f={class:"col-sm-4"},v={class:"mb-3"},y=Object(a["h"])("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),k={class:"mb-3"},x=Object(a["h"])("label",{for:"customFile",class:"form-label"},[Object(a["j"])("或 上傳圖片 "),Object(a["h"])("i",{class:"fas fa-spinner fa-spin"})],-1),w=["src"],M={key:0,class:"mt-5"},V=["onUpdate:modelValue"],U=["onClick"],$={key:0},C={class:"col-sm-8"},L={class:"mb-3"},_=Object(a["h"])("label",{for:"title",class:"form-label"},"標題",-1),z={class:"row gx-2"},I={class:"mb-3 col-md-6"},F=Object(a["h"])("label",{for:"category",class:"form-label"},"分類",-1),D={class:"mb-3 col-md-6"},N=Object(a["h"])("label",{for:"price",class:"form-label"},"單位",-1),G={class:"row gx-2"},W={class:"mb-3 col-md-6"},E=Object(a["h"])("label",{for:"origin_price",class:"form-label"},"原價",-1),J={class:"mb-3 col-md-6"},q=Object(a["h"])("label",{for:"price",class:"form-label"},"售價",-1),A=Object(a["h"])("hr",null,null,-1),B={class:"mb-3"},H=Object(a["h"])("label",{for:"description",class:"form-label"},"產品描述",-1),K={class:"mb-3"},Q=Object(a["h"])("label",{for:"content",class:"form-label"},"說明內容",-1),R={class:"mb-3"},S={class:"form-check"},T=Object(a["h"])("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),X={class:"modal-footer"},Y=Object(a["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Z(t,e,c,l,o,s){return Object(a["z"])(),Object(a["g"])("div",h,[Object(a["h"])("div",m,[Object(a["h"])("div",j,[O,Object(a["h"])("div",g,[Object(a["h"])("div",P,[Object(a["h"])("div",f,[Object(a["h"])("div",v,[y,Object(a["V"])(Object(a["h"])("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":e[0]||(e[0]=t=>o.tempProduct.imageUrl=t),placeholder:"請輸入圖片連結"},null,512),[[a["P"],o.tempProduct.imageUrl]])]),Object(a["h"])("div",k,[x,Object(a["h"])("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:e[1]||(e[1]=(...t)=>s.uploadFile&&s.uploadFile(...t))},null,544)]),Object(a["h"])("img",{class:"img-fluid",src:o.tempProduct.imageUrl,alt:"上傳圖片"},null,8,w),o.tempProduct.images?(Object(a["z"])(),Object(a["g"])("div",M,[(Object(a["z"])(!0),Object(a["g"])(a["a"],null,Object(a["G"])(o.tempProduct.images,(t,e)=>(Object(a["z"])(),Object(a["g"])("div",{class:"mb-3 input-group",key:e},[Object(a["V"])(Object(a["h"])("input",{type:"url",class:"form-control form-control","onUpdate:modelValue":t=>o.tempProduct.images[e]=t,placeholder:"請輸入連結"},null,8,V),[[a["P"],o.tempProduct.images[e]]]),Object(a["h"])("button",{type:"button",class:"btn btn-outline-danger",onClick:t=>o.tempProduct.images.splice(e,1)}," 移除 ",8,U)]))),128)),o.tempProduct.images[o.tempProduct.images.length-1]||!o.tempProduct.images.length?(Object(a["z"])(),Object(a["g"])("div",$,[Object(a["h"])("button",{type:"button",class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[2]||(e[2]=t=>o.tempProduct.images.push(""))}," 新增圖片 ")])):Object(a["f"])("",!0)])):Object(a["f"])("",!0)]),Object(a["h"])("div",C,[Object(a["h"])("div",L,[_,Object(a["V"])(Object(a["h"])("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[3]||(e[3]=t=>o.tempProduct.title=t),placeholder:"請輸入標題"},null,512),[[a["P"],o.tempProduct.title]])]),Object(a["h"])("div",z,[Object(a["h"])("div",I,[F,Object(a["V"])(Object(a["h"])("input",{type:"text",class:"form-control",id:"category","onUpdate:modelValue":e[4]||(e[4]=t=>o.tempProduct.category=t),placeholder:"請輸入分類"},null,512),[[a["P"],o.tempProduct.category]])]),Object(a["h"])("div",D,[N,Object(a["V"])(Object(a["h"])("input",{type:"text",class:"form-control",id:"unit","onUpdate:modelValue":e[5]||(e[5]=t=>o.tempProduct.unit=t),placeholder:"請輸入單位"},null,512),[[a["P"],o.tempProduct.unit]])])]),Object(a["h"])("div",G,[Object(a["h"])("div",W,[E,Object(a["V"])(Object(a["h"])("input",{type:"number",class:"form-control",id:"origin_price","onUpdate:modelValue":e[6]||(e[6]=t=>o.tempProduct.origin_price=t),placeholder:"請輸入原價"},null,512),[[a["P"],o.tempProduct.origin_price,void 0,{number:!0}]])]),Object(a["h"])("div",J,[q,Object(a["V"])(Object(a["h"])("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":e[7]||(e[7]=t=>o.tempProduct.price=t),placeholder:"請輸入售價"},null,512),[[a["P"],o.tempProduct.price,void 0,{number:!0}]])])]),A,Object(a["h"])("div",B,[H,Object(a["V"])(Object(a["h"])("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":e[8]||(e[8]=t=>o.tempProduct.description=t),placeholder:"請輸入產品描述"},null,512),[[a["P"],o.tempProduct.description]])]),Object(a["h"])("div",K,[Q,Object(a["V"])(Object(a["h"])("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":e[9]||(e[9]=t=>o.tempProduct.content=t),placeholder:"請輸入產品說明內容"},null,512),[[a["P"],o.tempProduct.content]])]),Object(a["h"])("div",R,[Object(a["h"])("div",S,[Object(a["V"])(Object(a["h"])("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":e[10]||(e[10]=t=>o.tempProduct.is_enabled=t),"true-value":1,"false-value":0,id:"is_enabled"},null,512),[[a["O"],o.tempProduct.is_enabled]]),T])])])])]),Object(a["h"])("div",X,[Y,Object(a["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[11]||(e[11]=e=>t.$emit("update-product",o.tempProduct))}," 確認 ")])])])],512)}var tt=c("e0ae"),et={mixins:[tt["a"]],props:{product:{type:Object,default(){return{}}}},watch:{product(){this.tempProduct=this.product}},data(){return{modal:{},tempProduct:{}}},methods:{uploadFile(){const t=this.$refs.fileInput.files[0];console.dir(t);const e=new FormData;e.append("file-to-upload",t);const c="https://vue3-course-api.hexschool.io/api/tracytung-vue-api/admin/upload";this.$http.post(c,e).then(t=>{t.data.success&&(this.tempProduct.imageUsrl=t.data.imageUrl)}).catch(t=>{this.$swal({icon:"error",title:t.data.message})})}}},ct=c("6b0d"),at=c.n(ct);const lt=at()(et,[["render",Z]]);var ot=lt,st=c("6ff1"),it=c("1799"),dt={data(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1}},components:{ProductModal:ot,DelModal:st["a"],Pagination:it["a"]},inject:["emitter"],methods:{getProducts(t=1){const e="https://vue3-course-api.hexschool.io/api/tracytung-vue-api/admin/products/?page="+t;this.isLoading=!0,this.$http.get(e).then(t=>{this.isLoading=!1,t.data.success&&(this.products=t.data.products,this.pagination=t.data.pagination)}).catch(t=>{this.$swal({icon:"error",title:t.data.message}),this.isLoading=!1})},delProduct(){const t="https://vue3-course-api.hexschool.io/api/tracytung-vue-api/admin/product/"+this.tempProduct.id;this.$http.delete(t).then(t=>{const e=this.$refs.delModal;e.hideModal(),this.getProducts()}).catch(t=>{this.$swal({icon:"error",title:t.data.message}),this.isLoading=!1})},opendelModal(t){this.tempProduct={...t};const e=this.$refs.delModal;e.showModal()},openModal(t,e){this.tempProduct=t?{}:{...e},this.isNew=t;const c=this.$refs.productModal;c.showModal()},updateProduct(t){this.tempProduct=t;let e="https://vue3-course-api.hexschool.io/api/tracytung-vue-api/admin/product",c="post";this.isNew||(e="https://vue3-course-api.hexschool.io/api/tracytung-vue-api/admin/product/"+t.id,c="put");const a=this.$refs.productModal;this.$http[c](e,{data:this.tempProduct}).then(t=>{a.hideModal(),t.data.success?(this.getProducts(),this.emitter.emit("push-message",{style:"success",title:"更新成功"})):this.emitter.emit("push-message",{style:"danger",title:"更新失敗",content:t.data.message.join("、")})}).catch(t=>{this.$swal({icon:"error",title:t.data.message}),this.isLoading=!1})}},created(){this.getProducts()}};const nt=at()(dt,[["render",p]]);e["default"]=nt},1799:function(t,e,c){"use strict";var a=c("7a23");const l={"aria-label":"Page navigation example"},o={class:"pagination justify-content-center"},s=Object(a["h"])("a",{class:"page-link",href:"#","aria-label":"Previous"},[Object(a["h"])("span",{"aria-hidden":"true"},"«")],-1),i=[s],d=["onClick"],n=Object(a["h"])("a",{class:"page-link",href:"#","aria-label":"Next"},[Object(a["h"])("span",{"aria-hidden":"true"},"»")],-1),r=[n];function b(t,e,c,s,n,b){return Object(a["z"])(),Object(a["g"])("nav",l,[Object(a["h"])("ul",o,[Object(a["h"])("li",{class:"page-item me-2",onClick:e[0]||(e[0]=Object(a["W"])(t=>b.updatePage(c.pages.current_page-1),["prevent"]))},i),(Object(a["z"])(!0),Object(a["g"])(a["a"],null,Object(a["G"])(c.pages.total_pages,t=>(Object(a["z"])(),Object(a["g"])("li",{class:Object(a["s"])(["page-item me-2",{active:t===c.pages.current_page}]),key:t},[Object(a["h"])("a",{class:"page-link",href:"#",onClick:Object(a["W"])(e=>b.updatePage(t),["prevent"])},Object(a["L"])(t),9,d)],2))),128)),Object(a["h"])("li",{class:"page-item",onClick:e[1]||(e[1]=Object(a["W"])(t=>b.updatePage(c.pages.current_page+1),["prevent"]))},r)])])}var u={props:["pages","productClass"],emits:["emit-pages"],methods:{updatePage(t){this.$emit("emit-pages",t)}}},p=c("6b0d"),h=c.n(p);const m=h()(u,[["render",b]]);e["a"]=m}}]);
//# sourceMappingURL=chunk-6a284ba6.71f9358a.js.map