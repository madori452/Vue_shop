(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ef906ee4"],{"10df":function(t,e,a){"use strict";a.r(e);var l=a("7a23");const c=t=>(Object(l["C"])("data-v-2073c0ca"),t=t(),Object(l["A"])(),t),i={class:"table mt-4"},s=c(()=>Object(l["h"])("thead",null,[Object(l["h"])("tr",null,[Object(l["h"])("th",null,"文章標題"),Object(l["h"])("th",null,"文章作者"),Object(l["h"])("th",null,"創建日期"),Object(l["h"])("th",null,"文章分類"),Object(l["h"])("th",null,"是否公開"),Object(l["h"])("th",null,"編輯")])],-1)),o={key:0},n={key:1},r=["onClick"],d=["onClick"];function b(t,e,a,c,b,h){const p=Object(l["I"])("Loading"),u=Object(l["I"])("Pagination"),m=Object(l["I"])("ArticleModal"),j=Object(l["I"])("DelModal");return Object(l["z"])(),Object(l["g"])(l["a"],null,[Object(l["k"])(p,{active:b.isLoading},null,8,["active"]),Object(l["h"])("button",{onClick:e[0]||(e[0]=t=>h.openModal(!0)),class:"btn btn-primary px-5 rounded-0 text-white mt-3",type:"button"},"新增文章"),Object(l["h"])("table",i,[s,(Object(l["z"])(!0),Object(l["g"])(l["a"],null,Object(l["G"])(b.articles,t=>(Object(l["z"])(),Object(l["g"])("tbody",{key:t.title},[Object(l["h"])("tr",null,[Object(l["h"])("td",null,Object(l["L"])(t.title),1),Object(l["h"])("td",null,Object(l["L"])(t.author),1),Object(l["h"])("td",null,Object(l["L"])(t.create_at),1),Object(l["h"])("td",null,Object(l["L"])(t.tag),1),Object(l["h"])("td",null,[!0===t.isPublic?(Object(l["z"])(),Object(l["g"])("li",o,"是")):(Object(l["z"])(),Object(l["g"])("li",n,"否"))]),Object(l["h"])("td",null,[Object(l["h"])("button",{onClick:e=>h.openModal(!1,t),type:"button",class:"btn btn-outline-primary btn-sm"},"檢視",8,r),Object(l["h"])("button",{onClick:e=>h.opendelModal(t),type:"button",class:"btn btn-outline-danger btn-sm"},"刪除",8,d)])])]))),128))]),Object(l["k"])(u,{pages:b.pagination,onEmitPages:h.getArticles},null,8,["pages","onEmitPages"]),Object(l["k"])(m,{ref:"articleModal",article:b.tempArticle,onUpdate:h.updateArticle},null,8,["article","onUpdate"]),Object(l["k"])(j,{ref:"delModal",item:b.tempArticle,onDelItem:h.delArticle},null,8,["item","onDelItem"])],64)}var h=a("6ff1"),p=a("1799");const u={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},m={class:"modal-dialog modal-xl",role:"document"},j={class:"modal-content border-0"},O=Object(l["h"])("div",{class:"modal-header bg-dark text-white"},[Object(l["h"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(l["h"])("span",null,"文章細節")]),Object(l["h"])("button",{type:"button",class:"btn-close"})],-1),g={class:"modal-body"},f={class:"row"},v={class:"col-sm-4"},A={class:"mb-3"},y=Object(l["h"])("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),P=["src"],x={class:"col-sm-8"},k={class:"mb-3"},w=Object(l["h"])("label",{for:"title",class:"form-label"},"文章標題",-1),_={class:"row gx-2"},M={class:"mb-3 col-md-12"},L=Object(l["h"])("label",{for:"category",class:"form-label"},"文章描述",-1),V={class:"row gx-2"},U={class:"mb-3 col-md-12"},$=Object(l["h"])("label",{for:"category",class:"form-label"},"文章內容",-1),C={class:"row gx-2"},I={class:"mb-3 col-md-6"},z=Object(l["h"])("label",{for:"origin_price",class:"form-label"},"分類",-1),E={class:"mb-3 col-md-6"},N=Object(l["h"])("label",{for:"origin_price",class:"form-label"},"作者",-1),D={class:"row gx-2"},F={class:"mb-3 col-md-6"},R=Object(l["h"])("label",{for:"origin_price",class:"form-label"},"日期",-1),W={class:"mb-3"},G={class:"form-check"},J=Object(l["h"])("label",{class:"form-check-label",for:"isPublic"},"公開",-1),B={class:"modal-footer"},H=Object(l["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function S(t,e,a,c,i,s){return Object(l["z"])(),Object(l["g"])("div",u,[Object(l["h"])("div",m,[Object(l["h"])("div",j,[O,Object(l["h"])("div",g,[Object(l["h"])("div",f,[Object(l["h"])("div",v,[Object(l["h"])("div",A,[y,Object(l["V"])(Object(l["h"])("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":e[0]||(e[0]=t=>i.tempArticle.image=t),placeholder:"請輸入圖片連結"},null,512),[[l["P"],i.tempArticle.image]]),Object(l["h"])("input",{type:"file",ref:"fileInput",class:"form-control",id:"image",onChange:e[1]||(e[1]=(...t)=>s.uploadFile&&s.uploadFile(...t))},null,544)]),Object(l["h"])("img",{class:"img-fluid",src:i.tempArticle.image},null,8,P)]),Object(l["h"])("div",x,[Object(l["h"])("div",k,[w,Object(l["V"])(Object(l["h"])("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[2]||(e[2]=t=>i.tempArticle.title=t),placeholder:"請輸入標題"},null,512),[[l["P"],i.tempArticle.title]])]),Object(l["h"])("div",_,[Object(l["h"])("div",M,[L,Object(l["V"])(Object(l["h"])("textarea",{type:"text",class:"form-control",id:"category",style:{height:"80px"},"onUpdate:modelValue":e[3]||(e[3]=t=>i.tempArticle.description=t),placeholder:"請輸入文章描述"},"\n                ",512),[[l["P"],i.tempArticle.description]])])]),Object(l["h"])("div",V,[Object(l["h"])("div",U,[$,Object(l["V"])(Object(l["h"])("textarea",{type:"text",class:"form-control",id:"category",style:{height:"80px"},"onUpdate:modelValue":e[4]||(e[4]=t=>i.tempArticle.content=t),placeholder:"請輸入文章描述"},"\n                ",512),[[l["P"],i.tempArticle.content]])])]),Object(l["h"])("div",C,[Object(l["h"])("div",I,[z,Object(l["V"])(Object(l["h"])("input",{type:"text",class:"form-control","onUpdate:modelValue":e[5]||(e[5]=t=>i.tempArticle.tag=t),placeholder:"請輸入分類"},null,512),[[l["P"],i.tempArticle.tag,void 0,{number:!0}]])]),Object(l["h"])("div",E,[N,Object(l["V"])(Object(l["h"])("input",{type:"text",class:"form-control","onUpdate:modelValue":e[6]||(e[6]=t=>i.tempArticle.author=t),placeholder:"請輸入作者"},null,512),[[l["P"],i.tempArticle.author,void 0,{number:!0}]])])]),Object(l["h"])("div",D,[Object(l["h"])("div",F,[R,Object(l["V"])(Object(l["h"])("input",{type:"date",class:"form-control","onUpdate:modelValue":e[7]||(e[7]=e=>t.create_At=e)},null,512),[[l["P"],t.create_At]])])]),Object(l["h"])("div",W,[Object(l["h"])("div",G,[Object(l["V"])(Object(l["h"])("input",{type:"checkbox",id:"isPublic",class:"form-check-input","onUpdate:modelValue":e[8]||(e[8]=t=>i.tempArticle.isPublic=t)},null,512),[[l["O"],i.tempArticle.isPublic]]),J])])])])]),Object(l["h"])("div",B,[H,Object(l["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[9]||(e[9]=e=>t.$emit("update",i.tempArticle))}," 確認 ")])])])],512)}var T=a("e0ae"),q={props:{article:{type:Object,default(){return{}}}},data(){return{tempArticle:{}}},emits:["update"],mixins:[T["a"]],inject:["emitter"],watch:{article(){this.tempArticle=this.article}},methods:{uploadFile(){const t=this.$refs.fileInput.files[0],e=new FormData;e.append("file-to-upload",t),this.$http.post(Object({VUE_APP_CLI_UI_URL:"",NODE_ENV:"production",VUE_APP_API:"https://vue3-course-api.hexschool.io/",VUE_APP_PATH:"tracytung-vue-api",BASE_URL:"/Vue_shop/dist/"}).VUE_APP_URL+"api/tracytung-vue-api/admin/upload",e).then(t=>{t.data.success&&(this.innertempArticle.imageUrl=t.data.imageUrl)}).catch(t=>{this.$swal({icon:"error",title:""+t.data.message})})}}},K=a("6b0d"),Q=a.n(K);const X=Q()(q,[["render",S]]);var Y=X,Z={data(){return{articles:[],tempArticle:{},isLoading:!1,isNew:!1,pagination:{}}},components:{DelModal:h["a"],Pagination:p["a"],ArticleModal:Y},inject:["emitter"],methods:{getArticles(t=1){const e="https://vue3-course-api.hexschool.io/api/tracytung-vue-api/admin/articles/?page="+t;this.isLoading=!0,this.$http.get(e,this.articles).then(t=>{this.isLoading=!1,this.articles=t.data.articles,this.pagination=t.data.pagination}).catch(t=>{this.$swal({icon:"error",title:""+t.data.message}),this.isLoading=!1})},delArticle(){const t="https://vue3-course-api.hexschool.io/api/tracytung-vue-api/admin/article/"+this.tempArticle.id;this.$http.delete(t).then(t=>{const e=this.$refs.delModal;e.hideModal(),this.getArticles()}).catch(t=>{this.$swal({icon:"error",title:""+t.data.message}),this.isLoading=!1})},opendelModal(t){this.tempArticle={...t};const e=this.$refs.delModal;e.showModal()},getArticle(t){const e="https://vue3-course-api.hexschool.io/api/tracytung-vue-api/admin/article/"+t.id;this.isLoading=!0,this.$http.get(e).then(e=>{e.data.success&&(this.openModal(!1,t),this.isLoading=!1)}).catch(t=>{this.$swal({icon:"error",title:""+t.data.message}),this.isLoading=!1})},openModal(t,e){t?this.tempArticle={}:(this.isNew=!1,this.tempArticle={...e}),this.isNew=t;const a=this.$refs.articleModal;a.showModal()},updateArticle(t){this.tempArticle=t;let e="https://vue3-course-api.hexschool.io/api/tracytung-vue-api/admin/article",a="post";this.isNew||(e="https://vue3-course-api.hexschool.io/api/tracytung-vue-api/admin/article/"+t.id,a="put");const l=this.$refs.articleModal;this.$http[a](e,{data:this.tempArticle}).then(t=>{l.hideModal(),t.data.success?(this.getArticles(),this.emitter.emit("push-message",{style:"success",title:"更新成功"})):this.emitter.emit("push-message",{style:"danger",title:"更新失敗",content:t.data.message.join("、")})}).catch(t=>{this.$swal({icon:"error",title:""+t.data.message}),this.isLoading=!1})}},created(){this.getArticles()}};a("ebb0");const tt=Q()(Z,[["render",b],["__scopeId","data-v-2073c0ca"]]);e["default"]=tt},1799:function(t,e,a){"use strict";var l=a("7a23");const c={"aria-label":"Page navigation example"},i={class:"pagination justify-content-center"},s=Object(l["h"])("a",{class:"page-link",href:"#","aria-label":"Previous"},[Object(l["h"])("span",{"aria-hidden":"true"},"«")],-1),o=[s],n=["onClick"],r=Object(l["h"])("a",{class:"page-link",href:"#","aria-label":"Next"},[Object(l["h"])("span",{"aria-hidden":"true"},"»")],-1),d=[r];function b(t,e,a,s,r,b){return Object(l["z"])(),Object(l["g"])("nav",c,[Object(l["h"])("ul",i,[Object(l["h"])("li",{class:"page-item me-2",onClick:e[0]||(e[0]=Object(l["W"])(t=>b.updatePage(a.pages.current_page-1),["prevent"]))},o),(Object(l["z"])(!0),Object(l["g"])(l["a"],null,Object(l["G"])(a.pages.total_pages,t=>(Object(l["z"])(),Object(l["g"])("li",{class:Object(l["s"])(["page-item me-2",{active:t===a.pages.current_page}]),key:t},[Object(l["h"])("a",{class:"page-link",href:"#",onClick:Object(l["W"])(e=>b.updatePage(t),["prevent"])},Object(l["L"])(t),9,n)],2))),128)),Object(l["h"])("li",{class:"page-item",onClick:e[1]||(e[1]=Object(l["W"])(t=>b.updatePage(a.pages.current_page+1),["prevent"]))},d)])])}var h={props:["pages","productClass"],emits:["emit-pages"],methods:{updatePage(t){this.$emit("emit-pages",t)}}},p=a("6b0d"),u=a.n(p);const m=u()(h,[["render",b]]);e["a"]=m},5663:function(t,e,a){},ebb0:function(t,e,a){"use strict";a("5663")}}]);
//# sourceMappingURL=chunk-ef906ee4.1fcfd8b2.js.map