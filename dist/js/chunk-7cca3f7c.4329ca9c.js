(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7cca3f7c"],{"0d89":function(t,e,o){"use strict";o.r(e);var s=o("7a23");const i={class:"table mt-4 container-fluid"},n=Object(s["h"])("thead",null,[Object(s["h"])("tr",null,[Object(s["h"])("th",null,"優惠碼"),Object(s["h"])("th",null,"折扣百分比"),Object(s["h"])("th",null,"到期日"),Object(s["h"])("th",null,"是否啟用"),Object(s["h"])("th",{class:"text-center"},"編輯")])],-1),a={key:0,class:"text-success"},l={key:1,class:"text-muted"},d={class:"d-flex justify-content-center"},c={class:"btn-group"},h=["onClick"],r=["onClick"];function u(t,e,o,u,p,b){const m=Object(s["I"])("Loading"),f=Object(s["I"])("CouponModal"),_=Object(s["I"])("DelModal");return Object(s["z"])(),Object(s["g"])(s["a"],null,[Object(s["k"])(m,{active:p.isLoading},null,8,["active"]),Object(s["h"])("button",{class:"btn btn-primary px-5 rounded-0 text-white mt-2",onClick:e[0]||(e[0]=t=>b.openCouponModal(!0))}," 建立新的優惠券 "),Object(s["h"])("table",i,[n,(Object(s["z"])(!0),Object(s["g"])(s["a"],null,Object(s["G"])(p.coupons,(e,o)=>(Object(s["z"])(),Object(s["g"])("tbody",{key:o},[Object(s["h"])("tr",null,[Object(s["h"])("td",null,Object(s["L"])(e.code),1),Object(s["h"])("td",null,Object(s["L"])(e.percent)+"%",1),Object(s["h"])("td",null,Object(s["L"])(t.$filters.date(e.due_date)),1),Object(s["h"])("td",null,[1==e.is_enabled?(Object(s["z"])(),Object(s["g"])("span",a,"啟用")):(Object(s["z"])(),Object(s["g"])("span",l,"未啟用"))]),Object(s["h"])("td",d,[Object(s["h"])("div",c,[Object(s["h"])("button",{onClick:t=>b.openCouponModal(!1,e),class:"btn btn-outline-primary btn-sm"},"編輯",8,h),Object(s["h"])("button",{onClick:t=>b.openDelCouponModal(e),class:"btn btn-outline-danger btn-sm"},"刪除",8,r)])])])]))),128))]),Object(s["k"])(f,{coupon:p.tempCoupon,ref:"couponModal",onUpdateCoupon:b.updateCoupon},null,8,["coupon","onUpdateCoupon"]),Object(s["k"])(_,{item:p.tempCoupon,ref:"delModal",onDelItem:b.delCoupon},null,8,["item","onDelItem"])],64)}const p={class:"modal fade",id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},b={class:"modal-dialog",role:"document"},m={class:"modal-content"},f=Object(s["h"])("div",{class:"modal-header"},[Object(s["h"])("h5",{class:"modal-title",id:"exampleModalLabel"},"Modal title"),Object(s["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),_={class:"modal-body"},g={class:"mb-3"},j=Object(s["h"])("label",{for:"title"},"標題",-1),O={class:"mb-3"},v=Object(s["h"])("label",{for:"coupon_code"},"優惠碼",-1),y={class:"mb-3"},w=Object(s["h"])("label",{for:"due_date"},"到期日",-1),C={class:"mb-3"},k=Object(s["h"])("label",{for:"price"},"折扣百分比",-1),M={class:"mb-3"},L={class:"form-check"},x=Object(s["h"])("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),T={class:"modal-footer"},$=Object(s["h"])("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1);function D(t,e,o,i,n,a){return Object(s["z"])(),Object(s["g"])("div",p,[Object(s["h"])("div",b,[Object(s["h"])("div",m,[f,Object(s["h"])("div",_,[Object(s["h"])("div",g,[j,Object(s["V"])(Object(s["h"])("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[0]||(e[0]=t=>n.tempCoupon.title=t),placeholder:"請輸入標題"},null,512),[[s["P"],n.tempCoupon.title]])]),Object(s["h"])("div",O,[v,Object(s["V"])(Object(s["h"])("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":e[1]||(e[1]=t=>n.tempCoupon.code=t),placeholder:"請輸入優惠碼"},null,512),[[s["P"],n.tempCoupon.code]])]),Object(s["h"])("div",y,[w,Object(s["V"])(Object(s["h"])("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":e[2]||(e[2]=t=>n.due_date=t)},null,512),[[s["P"],n.due_date]])]),Object(s["h"])("div",C,[k,Object(s["V"])(Object(s["h"])("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":e[3]||(e[3]=t=>n.tempCoupon.percent=t),placeholder:"請輸入折扣百分比"},null,512),[[s["P"],n.tempCoupon.percent,void 0,{number:!0}]])]),Object(s["h"])("div",M,[Object(s["h"])("div",L,[Object(s["V"])(Object(s["h"])("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":e[4]||(e[4]=t=>n.tempCoupon.is_enabled=t),id:"is_enabled"},null,512),[[s["O"],n.tempCoupon.is_enabled]]),x])])]),Object(s["h"])("div",T,[$,Object(s["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[5]||(e[5]=e=>t.$emit("update-coupon",n.tempCoupon))},"更新優惠券 ")])])])],512)}var A=o("e0ae"),S={name:"couponModal",props:{coupon:{}},data(){return{tempCoupon:{},due_date:""}},emits:["update-coupon"],watch:{coupon(){this.tempCoupon=this.coupon;const t=new Date(1e3*this.tempCoupon.due_date).toISOString().split("T");[this.due_date]=t},due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)}},mixins:[A["a"]]},z=o("6b0d"),E=o.n(z);const V=E()(S,[["render",D]]);var P=V,B=o("6ff1"),I={data(){return{coupons:[],tempCoupon:{title:"",is_enabled:0,percent:100,code:""},isLoading:!1,isNew:!1}},components:{CouponModal:P,DelModal:B["a"]},inject:["emitter"],methods:{openCouponModal(t,e){this.isNew=t,this.isNew?this.tempCoupon={due_date:(new Date).getTime()/1e3}:this.tempCoupon={...e},this.$refs.couponModal.showModal()},openDelCouponModal(t){this.tempCoupon={...t};const e=this.$refs.delModal;e.showModal()},getCoupons(){const t="https://vue3-course-api.hexschool.io/api/tracytung-vue-api/admin/coupons";this.isLoading=!0,this.$http.get(t,this.tempProduct).then(t=>{this.isLoading=!1,this.coupons=t.data.coupons}).catch(t=>{this.$swal({icon:"error",title:""+t.data.message})})},updateCoupon(t){if(this.isNew){const e="https://vue3-course-api.hexschool.io/api/tracytung-vue-api/admin/coupon";this.$http.post(e,{data:t}).then(t=>{this.$httpMessageState(t,"新增優惠券"),this.getCoupons(),this.$refs.couponModal.hideModal()}).catch(t=>{this.$swal({icon:"error",title:""+t.data.message})})}else{const t="https://vue3-course-api.hexschool.io/api/tracytung-vue-api/admin/coupon/"+this.tempCoupon.id;this.$http.put(t,{data:this.tempCoupon}).then(t=>{this.$httpMessageState(t,"編輯優惠券"),this.getCoupons(),this.$refs.couponModal.hideModal()}).catch(t=>{this.$swal({icon:"error",title:""+t.data.message})})}},delCoupon(){const t="https://vue3-course-api.hexschool.io/api/tracytung-vue-api/admin/coupon/"+this.tempCoupon.id;this.isLoading=!0,this.$http.delete(t).then(t=>{this.$httpMessageState(t,"刪除優惠券");const e=this.$refs.delModal;e.hideModal(),this.getCoupons()}).catch(t=>{this.$swal({icon:"error",title:""+t.data.message})})}},created(){this.getCoupons()}};const U=E()(I,[["render",u]]);e["default"]=U},"6ff1":function(t,e,o){"use strict";var s=o("7a23");const i={class:"modal fade",id:"delModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},n={class:"modal-dialog",role:"document"},a={class:"modal-content border-0"},l={class:"modal-header bg-danger text-white"},d={class:"modal-title"},c=Object(s["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),h={class:"modal-body"},r=Object(s["j"])(" 是否刪除 "),u={class:"text-danger"},p=Object(s["j"])(" (刪除後將無法恢復)。 "),b={class:"modal-footer"},m=Object(s["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function f(t,e,o,f,_,g){return Object(s["z"])(),Object(s["g"])("div",i,[Object(s["h"])("div",n,[Object(s["h"])("div",a,[Object(s["h"])("div",l,[Object(s["h"])("h5",d,[Object(s["h"])("span",null,"刪除 "+Object(s["L"])(o.item.title),1)]),c]),Object(s["h"])("div",h,[r,Object(s["h"])("strong",u,Object(s["L"])(o.item.title),1),p]),Object(s["h"])("div",b,[m,Object(s["h"])("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=e=>t.$emit("del-item"))},"確認刪除 ")])])])],512)}var _=o("e0ae"),g={props:{item:{}},data(){return{modal:""}},mixins:[_["a"]]},j=o("6b0d"),O=o.n(j);const v=O()(g,[["render",f]]);e["a"]=v},"7c2b":function(t,e,o){
/*!
  * Bootstrap modal.js v5.2.0 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,s){t.exports=s(o("aa53"),o("6a95"),o("848f"),o("ba05"),o("302d"),o("1494"),o("5470"),o("0f28"))})(0,(function(t,e,o,s,i,n,a,l){"use strict";const d=t=>t&&"object"===typeof t&&"default"in t?t:{default:t},c=d(e),h=d(o),r=d(s),u=d(i),p=d(n),b=d(a),m="modal",f="bs.modal",_="."+f,g=".data-api",j="Escape",O="hide"+_,v="hidePrevented"+_,y="hidden"+_,w="show"+_,C="shown"+_,k="resize"+_,M="mousedown.dismiss"+_,L="keydown.dismiss"+_,x=`click${_}${g}`,T="modal-open",$="fade",D="show",A="modal-static",S=".modal.show",z=".modal-dialog",E=".modal-body",V='[data-bs-toggle="modal"]',P={backdrop:!0,focus:!0,keyboard:!0},B={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class I extends u.default{constructor(t,e){super(t,e),this._dialog=h.default.findOne(z,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new r.default,this._addEventListeners()}static get Default(){return P}static get DefaultType(){return B}static get NAME(){return m}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||this._isTransitioning)return;const e=c.default.trigger(this._element,w,{relatedTarget:t});e.defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(T),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){if(!this._isShown||this._isTransitioning)return;const t=c.default.trigger(this._element,O);t.defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(D),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){for(const t of[window,this._dialog])c.default.off(t,_);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new p.default({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new b.default({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const o=h.default.findOne(E,this._dialog);o&&(o.scrollTop=0),t.reflow(this._element),this._element.classList.add(D);const s=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,c.default.trigger(this._element,C,{relatedTarget:e})};this._queueCallback(s,this._dialog,this._isAnimated())}_addEventListeners(){c.default.on(this._element,L,t=>{if(t.key===j)return this._config.keyboard?(t.preventDefault(),void this.hide()):void this._triggerBackdropTransition()}),c.default.on(window,k,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),c.default.on(this._element,M,t=>{t.target===t.currentTarget&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(T),this._resetAdjustments(),this._scrollBar.reset(),c.default.trigger(this._element,y)})}_isAnimated(){return this._element.classList.contains($)}_triggerBackdropTransition(){const t=c.default.trigger(this._element,v);if(t.defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,o=this._element.style.overflowY;"hidden"===o||this._element.classList.contains(A)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(A),this._queueCallback(()=>{this._element.classList.remove(A),this._queueCallback(()=>{this._element.style.overflowY=o},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,o=this._scrollBar.getWidth(),s=o>0;if(s&&!e){const e=t.isRTL()?"paddingLeft":"paddingRight";this._element.style[e]=o+"px"}if(!s&&e){const e=t.isRTL()?"paddingRight":"paddingLeft";this._element.style[e]=o+"px"}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const o=I.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof o[t])throw new TypeError(`No method named "${t}"`);o[t](e)}}))}}return c.default.on(document,x,V,(function(e){const o=t.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),c.default.one(o,w,e=>{e.defaultPrevented||c.default.one(o,y,()=>{t.isVisible(this)&&this.focus()})});const s=h.default.findOne(S);s&&I.getInstance(s).hide();const i=I.getOrCreateInstance(o);i.toggle(this)})),l.enableDismissTrigger(I),t.defineJQueryPlugin(I),I}))},e0ae:function(t,e,o){"use strict";var s=o("7c2b"),i=o.n(s);e["a"]={methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()}},mounted(){this.modal=new i.a(this.$refs.modal)}}}}]);
//# sourceMappingURL=chunk-7cca3f7c.4329ca9c.js.map