(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69e25654"],{1777:function(t,e,a){t.exports=a.p+"img/About.2fc64ed2.png"},"1cf8":function(t,e,a){t.exports=a.p+"img/03-pd.f033dde2.png"},2241:function(t,e,a){t.exports=a.p+"img/03-mb.22a998df.png"},3720:function(t,e,a){"use strict";a("3b9d")},"3b9d":function(t,e,a){},"589e":function(t,e,a){"use strict";a.r(e);var c=a("7a23"),i=a("1777"),s=a.n(i),n=a("1cf8"),l=a.n(n),r=a("2241"),o=a.n(r);const d=Object(c["i"])('<div class="container-fluid d-flex align-items-center justify-content-center px-0" data-v-0a878462><div class="content-area" data-v-0a878462><p class="en-font title text-center fs-3-lg fs-4-md mb-0" data-v-0a878462>關於我們</p><p class="content en-font text-center" data-v-0a878462>以瑞典當地自然環境為風格啟發，揀選天然有機原料，堅持只給最好的。</p></div><img src="'+s.a+'" class="d-lg-block d-none w-100" alt="banner" data-v-0a878462><img src="'+l.a+'" class="d-md-block d-none d-lg-none w-100" alt="Carousel01" data-v-0a878462><img src="'+o.a+'" class="d-sm-block d-md-none w-100" alt="Carousel01" data-v-0a878462></div>',1),b={class:"container mx-auto py-4 mt-4"},u={"aria-label":"breadcrumb "},p={class:"breadcrumb"},h={class:"breadcrumb-item"},g=Object(c["j"])(" 所有文章 "),j={class:"breadcrumb-item active text-black-50 fw-bolder","aria-current":"page"},m={class:"row pb-5"},f={class:"col-lg-6"},O=["src"],v={class:"col-lg-6 all-content"},x={class:"tag en-font"},w={class:"fst-italic en-font"},k={class:"h5 mb-2 en-font article_title"},L={class:"article_content text-900"};function _(t,e,a,i,s,n){const l=Object(c["I"])("CustomLoading"),r=Object(c["I"])("router-link");return Object(c["z"])(),Object(c["g"])(c["a"],null,[Object(c["k"])(l,{active:s.isLoading},null,8,["active"]),d,Object(c["h"])("div",b,[Object(c["h"])("nav",u,[Object(c["h"])("ol",p,[Object(c["h"])("li",h,[Object(c["k"])(r,{to:"/user/articles",class:"text-black-50 text-decoration-none"},{default:Object(c["U"])(()=>[g]),_:1})]),Object(c["h"])("li",j,Object(c["L"])(s.article.title),1)])]),Object(c["h"])("div",m,[Object(c["h"])("div",f,[Object(c["h"])("img",{src:s.article.image,alt:"product_pic",class:"img-fluid"},null,8,O)]),Object(c["h"])("div",v,[Object(c["h"])("p",x,Object(c["L"])(s.article.tag),1),Object(c["h"])("p",w,"Author : "+Object(c["L"])(s.article.author),1),Object(c["h"])("p",k,Object(c["L"])(s.article.title),1),Object(c["h"])("p",L,Object(c["L"])(s.article.content),1)])])])],64)}var A={data(){return{article:"",id:"",isLoading:!1}},inject:["emitter"],methods:{getArticle(t){const e="https://vue3-course-api.hexschool.io/api/tracytung-vue-api/article/"+t;this.isLoading=!0,this.$http.get(e).then(t=>{t.data.success&&(this.isLoading=!1,this.article=t.data.article)}).catch(t=>{this.$swal({icon:"error",title:""+t.data.message}),this.isLoading=!1})}},created(){this.id=this.$route.params.articleId,this.getArticle(this.id)}},I=(a("3720"),a("6b0d")),y=a.n(I);const C=y()(A,[["render",_],["__scopeId","data-v-0a878462"]]);e["default"]=C}}]);
//# sourceMappingURL=chunk-69e25654.206268b3.js.map