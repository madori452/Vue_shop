(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3bd23f44"],{"43b9":function(t,e,c){"use strict";c("a366")},"589e":function(t,e,c){"use strict";c.r(e);var a=c("7a23"),i=c("f394"),s=c.n(i),n=c("ed45"),l=c.n(n),r=c("b25f"),o=c.n(r);const d=Object(a["i"])('<div class="container-fluid d-flex align-items-center justify-content-center px-0" data-v-468ef916><p class="en-font title fs-3-lg fs-4-md mb-0" data-v-468ef916>ABOUT US</p><p class="content en-font" data-v-468ef916>以瑞典當地自然環境風土化為風格啟發，揀選天然有機原料組成純淨配方，堅持只給最好的。</p><img src="'+s.a+'" class="d-lg-block d-none w-100" alt="banner" data-v-468ef916><img src="'+l.a+'" class="d-md-block d-none d-lg-none w-100" alt="Carousel01" data-v-468ef916><img src="'+o.a+'" class="d-sm-block d-md-none w-100" alt="Carousel01" data-v-468ef916></div>',1),b={class:"container mx-auto py-4 mt-4"},u={"aria-label":"breadcrumb "},p={class:"breadcrumb"},f={class:"breadcrumb-item"},h=Object(a["j"])("所有文章"),g={class:"breadcrumb-item active text-black-50 fw-bolder","aria-current":"page"},m={class:"row pb-5"},j={class:"col-lg-6"},O=["src"],v={class:"col-lg-6 all-content"},w={class:"tag en-font"},k={class:"fst-italic en-font"},x={class:"h5 mb-2 en-font article_title"},L={class:"article_content text-900"};function _(t,e,c,i,s,n){const l=Object(a["I"])("CustomLoading"),r=Object(a["I"])("router-link");return Object(a["z"])(),Object(a["g"])(a["a"],null,[Object(a["k"])(l,{active:s.isLoading},null,8,["active"]),d,Object(a["h"])("div",b,[Object(a["h"])("nav",u,[Object(a["h"])("ol",p,[Object(a["h"])("li",f,[Object(a["k"])(r,{to:"/user/articles",class:"text-black-50 text-decoration-none"},{default:Object(a["U"])(()=>[h]),_:1})]),Object(a["h"])("li",g,Object(a["L"])(s.article.title),1)])]),Object(a["h"])("div",m,[Object(a["h"])("div",j,[Object(a["h"])("img",{src:s.article.image,alt:"product_pic",class:"img-fluid"},null,8,O)]),Object(a["h"])("div",v,[Object(a["h"])("p",w,Object(a["L"])(s.article.tag),1),Object(a["h"])("p",k,"Author : "+Object(a["L"])(s.article.author),1),Object(a["h"])("p",x,Object(a["L"])(s.article.title),1),Object(a["h"])("p",L,Object(a["L"])(s.article.content),1)])])])],64)}var A={data(){return{article:"",id:"",isLoading:!1}},components:{},inject:["emitter"],methods:{getArticle(t){const e="https://vue3-course-api.hexschool.io/api/tracytung-vue-api/article/"+t;this.isLoading=!0,this.$http.get(e).then(t=>{t.data.success&&(this.isLoading=!1,this.article=t.data.article)}).catch(t=>{this.$swal({icon:"error",title:""+t.data.message})})}},created(){this.id=this.$route.params.articleId,this.getArticle(this.id)}},I=(c("43b9"),c("6b0d")),y=c.n(I);const C=y()(A,[["render",_],["__scopeId","data-v-468ef916"]]);e["default"]=C},a366:function(t,e,c){},b25f:function(t,e,c){t.exports=c.p+"img/03-mb.48b4acda.png"},ed45:function(t,e,c){t.exports=c.p+"img/03-pd.2fd6e148.png"},f394:function(t,e,c){t.exports=c.p+"img/About.12613d33.png"}}]);
//# sourceMappingURL=chunk-3bd23f44.9d88249c.js.map