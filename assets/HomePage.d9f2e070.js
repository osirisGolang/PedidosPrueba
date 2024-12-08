import{Q as me}from"./QPage.e95deb84.js";import{g as A,e as J,u as I,v as ge,n as re,h as c,T as le,m as z,j as Y,K as fe,S as N,s as he,Z as pe,M as V,_ as K,O as te,I as j,N as G,x as Se,a5 as xe,a6 as _e,q as ye,o as $,V as se,d as g,a as h,w as b,a7 as ue,a8 as ce,c as Be}from"./index.9f6f9a88.js";import{b as Ce}from"./QSpinner.255e9d09.js";import{h as O,c as Ee,a as be}from"./render.69c7fe0c.js";import{v as W,g as we,Q as Z}from"./QBtn.0a5a5c25.js";import{u as ne,c as Qe}from"./selection.8c6e515a.js";import{g as ae,s as oe}from"./touch.9135741d.js";import{u as Ie}from"./use-render-cache.3aae9b27.js";import{u as ke,a as De}from"./use-dark.72fd351c.js";import{u as Re,a as qe,b as Te}from"./use-fullscreen.420b83c6.js";import{Q as Le}from"./QCard.d88bf8fa.js";import{_ as ee}from"./plugin-vue_export-helper.21dcd24c.js";import"./dom.32dcaddc.js";const Fe={ratio:[String,Number]};function He(e,a){return A(()=>{const l=Number(e.ratio||(a!==void 0?a.value:void 0));return isNaN(l)!==!0&&l>0?{paddingBottom:`${100/l}%`}:null})}const Me=1.7778;var R=J({name:"QImg",props:{...Fe,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:Me},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:a,emit:l}){const f=I(e.initialRatio),r=He(e,f),t=Y(),{registerTimeout:o,removeTimeout:P}=ne(),{registerTimeout:y,removeTimeout:S}=ne(),d=A(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),B=A(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),u=[I(null),I(d.value)],v=I(0),p=I(!1),C=I(!1),E=A(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),q=A(()=>({width:e.width,height:e.height})),H=A(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),w=A(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function k(){if(S(),e.loadingShowDelay===0){p.value=!0;return}y(()=>{p.value=!0},e.loadingShowDelay)}function T(){S(),p.value=!1}function D({target:i}){W(t)===!1&&(P(),f.value=i.naturalHeight===0?.5:i.naturalWidth/i.naturalHeight,x(i,1))}function x(i,n){n===1e3||W(t)===!0||(i.complete===!0?L(i):o(()=>{x(i,n+1)},50))}function L(i){W(t)!==!0&&(v.value=v.value^1,u[v.value].value=null,T(),i.getAttribute("__qerror")!=="true"&&(C.value=!1),l("load",i.currentSrc||i.src))}function M(i){P(),T(),C.value=!0,u[v.value].value=B.value,u[v.value^1].value=d.value,l("error",i)}function m(i){const n=u[i].value,s={key:"img_"+i,class:H.value,style:w.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...n};return v.value===i?Object.assign(s,{class:s.class+"current",onLoad:D,onError:M}):s.class+="loaded",c("div",{class:"q-img__container absolute-full",key:"img"+i},c("img",s))}function Q(){return p.value===!1?c("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},O(a[C.value===!0?"error":"default"])):c("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},a.loading!==void 0?a.loading():e.noSpinner===!0?void 0:[c(Ce,{color:e.spinnerColor,size:e.spinnerSize})])}{let i=function(){z(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,n=>{P(),C.value=!1,n===null?(T(),u[v.value^1].value=d.value):k(),u[v.value].value=n},{immediate:!0})};ge.value===!0?re(i):i()}return()=>{const i=[];return r.value!==null&&i.push(c("div",{key:"filler",style:r.value})),u[0].value!==null&&i.push(m(0)),u[1].value!==null&&i.push(m(1)),i.push(c(le,{name:"q-transition--fade"},Q)),c("div",{key:"main",class:E.value,style:q.value,role:"img","aria-label":e.alt},i)}}});function Ne(e){const a=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((l,f)=>{const r=parseFloat(l);r&&(a[f]=r)}),a}var Ve=fe({name:"touch-swipe",beforeMount(e,{value:a,arg:l,modifiers:f}){if(f.mouse!==!0&&N.has.touch!==!0)return;const r=f.mouseCapture===!0?"Capture":"",t={handler:a,sensitivity:Ne(l),direction:ae(f),noop:he,mouseStart(o){oe(o,t)&&pe(o)&&(V(t,"temp",[[document,"mousemove","move",`notPassive${r}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(o,!0))},touchStart(o){if(oe(o,t)){const P=o.target;V(t,"temp",[[P,"touchmove","move","notPassiveCapture"],[P,"touchcancel","end","notPassiveCapture"],[P,"touchend","end","notPassiveCapture"]]),t.start(o)}},start(o,P){N.is.firefox===!0&&K(e,!0);const y=te(o);t.event={x:y.left,y:y.top,time:Date.now(),mouse:P===!0,dir:!1}},move(o){if(t.event===void 0)return;if(t.event.dir!==!1){j(o);return}const P=Date.now()-t.event.time;if(P===0)return;const y=te(o),S=y.left-t.event.x,d=Math.abs(S),B=y.top-t.event.y,u=Math.abs(B);if(t.event.mouse!==!0){if(d<t.sensitivity[1]&&u<t.sensitivity[1]){t.end(o);return}}else if(window.getSelection().toString()!==""){t.end(o);return}else if(d<t.sensitivity[2]&&u<t.sensitivity[2])return;const v=d/P,p=u/P;t.direction.vertical===!0&&d<u&&d<100&&p>t.sensitivity[0]&&(t.event.dir=B<0?"up":"down"),t.direction.horizontal===!0&&d>u&&u<100&&v>t.sensitivity[0]&&(t.event.dir=S<0?"left":"right"),t.direction.up===!0&&d<u&&B<0&&d<100&&p>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&d<u&&B>0&&d<100&&p>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&d>u&&S<0&&u<100&&v>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&d>u&&S>0&&u<100&&v>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(j(o),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Qe(),t.styleCleanup=C=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const E=()=>{document.body.classList.remove("no-pointer-events--children")};C===!0?setTimeout(E,50):E()}),t.handler({evt:o,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:P,distance:{x:d,y:u}})):t.end(o)},end(o){t.event!==void 0&&(G(t,"temp"),N.is.firefox===!0&&K(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),o!==void 0&&t.event.dir!==!1&&j(o),t.event=void 0)}};if(e.__qtouchswipe=t,f.mouse===!0){const o=f.mouseCapture===!0||f.mousecapture===!0?"Capture":"";V(t,"main",[[e,"mousedown","mouseStart",`passive${o}`]])}N.has.touch===!0&&V(t,"main",[[e,"touchstart","touchStart",`passive${f.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,a){const l=e.__qtouchswipe;l!==void 0&&(a.oldValue!==a.value&&(typeof a.value!="function"&&l.end(),l.handler=a.value),l.direction=ae(a.modifiers))},beforeUnmount(e){const a=e.__qtouchswipe;a!==void 0&&(G(a,"main"),G(a,"temp"),N.is.firefox===!0&&K(e,!1),a.styleCleanup!==void 0&&a.styleCleanup(),delete e.__qtouchswipe)}});const Ue={name:{required:!0},disable:Boolean},ie={setup(e,{slots:a}){return()=>c("div",{class:"q-panel scroll",role:"tabpanel"},O(a.default))}},ze={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Oe=["update:modelValue","beforeTransition","transition"];function Xe(){const{props:e,emit:a,proxy:l}=Y(),{getCache:f}=Ie();let r,t;const o=I(null),P=I(null);function y(n){const s=e.vertical===!0?"up":"left";x((l.$q.lang.rtl===!0?-1:1)*(n.direction===s?1:-1))}const S=A(()=>[[Ve,y,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),d=A(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),B=A(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),u=A(()=>`--q-transition-duration: ${e.transitionDuration}ms`),v=A(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),p=A(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),C=A(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);z(()=>e.modelValue,(n,s)=>{const _=w(n)===!0?k(n):-1;t!==!0&&D(_===-1?0:_<k(s)?-1:1),o.value!==_&&(o.value=_,a("beforeTransition",n,s),Se(()=>{a("transition",n,s)}))});function E(){x(1)}function q(){x(-1)}function H(n){a("update:modelValue",n)}function w(n){return n!=null&&n!==""}function k(n){return r.findIndex(s=>s.props.name===n&&s.props.disable!==""&&s.props.disable!==!0)}function T(){return r.filter(n=>n.props.disable!==""&&n.props.disable!==!0)}function D(n){const s=n!==0&&e.animated===!0&&o.value!==-1?"q-transition--"+(n===-1?d.value:B.value):null;P.value!==s&&(P.value=s)}function x(n,s=o.value){let _=s+n;for(;_!==-1&&_<r.length;){const F=r[_];if(F!==void 0&&F.props.disable!==""&&F.props.disable!==!0){D(n),t=!0,a("update:modelValue",F.props.name),setTimeout(()=>{t=!1});return}_+=n}e.infinite===!0&&r.length!==0&&s!==-1&&s!==r.length&&x(n,n===-1?r.length:-1)}function L(){const n=k(e.modelValue);return o.value!==n&&(o.value=n),!0}function M(){const n=w(e.modelValue)===!0&&L()&&r[o.value];return e.keepAlive===!0?[c(xe,p.value,[c(C.value===!0?f(v.value,()=>({...ie,name:v.value})):ie,{key:v.value,style:u.value},()=>n)])]:[c("div",{class:"q-panel scroll",style:u.value,key:v.value,role:"tabpanel"},[n])]}function m(){if(r.length!==0)return e.animated===!0?[c(le,{name:P.value},M)]:M()}function Q(n){return r=we(O(n.default,[])).filter(s=>s.props!==null&&s.props.slot===void 0&&w(s.props.name)===!0),r.length}function i(){return r}return Object.assign(l,{next:E,previous:q,goTo:H}),{panelIndex:o,panelDirectives:S,updatePanelsList:Q,updatePanelIndex:L,getPanelContent:m,getEnabledPanels:T,getPanels:i,isValidPanelName:w,keepAliveProps:p,needsUniqueKeepAliveWrapper:C,goToPanelByOffset:x,goToPanel:H,nextPanel:E,previousPanel:q}}var U=J({name:"QCarouselSlide",props:{...Ue,imgSrc:String},setup(e,{slots:a}){const l=A(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>c("div",{class:"q-carousel__slide",style:l.value},O(a.default))}});const Ke=["top","right","bottom","left"],je=["regular","flat","outline","push","unelevated"];var Ge=J({name:"QCarousel",props:{...ke,...ze,...Re,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>je.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Ke.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...qe,...Oe],setup(e,{slots:a}){const{proxy:{$q:l}}=Y(),f=De(e,l);let r=null,t;const{updatePanelsList:o,getPanelContent:P,panelDirectives:y,goToPanel:S,previousPanel:d,nextPanel:B,getEnabledPanels:u,panelIndex:v}=Xe(),{inFullscreen:p}=Te(),C=A(()=>p.value!==!0&&e.height!==void 0?{height:e.height}:{}),E=A(()=>e.vertical===!0?"vertical":"horizontal"),q=A(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),H=A(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(p.value===!0?" fullscreen":"")+(f.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${E.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${q.value}`:"")),w=A(()=>{const m=[e.prevIcon||l.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||l.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&l.lang.rtl===!0?m.reverse():m}),k=A(()=>e.navigationIcon||l.iconSet.carousel.navigationIcon),T=A(()=>e.navigationActiveIcon||k.value),D=A(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));z(()=>e.modelValue,()=>{e.autoplay&&x()}),z(()=>e.autoplay,m=>{m?x():r!==null&&(clearTimeout(r),r=null)});function x(){const m=_e(e.autoplay)===!0?Math.abs(e.autoplay):5e3;r!==null&&clearTimeout(r),r=setTimeout(()=>{r=null,m>=0?B():d()},m)}re(()=>{e.autoplay&&x()}),ye(()=>{r!==null&&clearTimeout(r)});function L(m,Q){return c("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${m} q-carousel__navigation--${q.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[c("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},u().map(Q))])}function M(){const m=[];if(e.navigation===!0){const Q=a["navigation-icon"]!==void 0?a["navigation-icon"]:n=>c(Z,{key:"nav"+n.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${n.active===!0?"":"in"}active`,...n.btnProps,onClick:n.onClick}),i=t-1;m.push(L("buttons",(n,s)=>{const _=n.props.name,F=v.value===s;return Q({index:s,maxIndex:i,name:_,active:F,btnProps:{icon:F===!0?T.value:k.value,size:"sm",...D.value},onClick:()=>{S(_)}})}))}else if(e.thumbnails===!0){const Q=e.controlColor!==void 0?` text-${e.controlColor}`:"";m.push(L("thumbnails",i=>{const n=i.props;return c("img",{key:"tmb#"+n.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${n.name===e.modelValue?"":"in"}active`+Q,src:n.imgSrc||n["img-src"],onClick:()=>{S(n.name)}})}))}return e.arrows===!0&&v.value>=0&&((e.infinite===!0||v.value>0)&&m.push(c("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${E.value} absolute flex flex-center`},[c(Z,{icon:w.value[0],...D.value,onClick:d})])),(e.infinite===!0||v.value<t-1)&&m.push(c("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${E.value} absolute flex flex-center`},[c(Z,{icon:w.value[1],...D.value,onClick:B})]))),be(a.control,m)}return()=>(t=o(a),c("div",{class:H.value,style:C.value},[Ee("div",{class:"q-carousel__slides-container"},P(),"sl-cont",e.swipeable,()=>y.value)].concat(M())))}}),Ae="data:image/jpeg;base64,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",de="/assets/sensor4.63678d95.jpg",ve="/assets/sensor5.f2b6d300.png",Pe="/assets/sensor6.e08847ab.png";const We={setup(){return{slide:I("style"),lorem:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo."}}},X=e=>(ue("data-v-c8747e08"),e=e(),ce(),e),Ze={class:"q-pa-md"},Je={class:"q-pa-md row q-gutter-md"},Ye={class:"q-gutter-md"},$e=X(()=>g("div",{class:"q-mt-md text-center"}," SENSOR TPS 3 PINES FIESTA ECOSPORT ",-1)),et=X(()=>g("div",{class:"q-mt-md text-center"}," SENSOR ARBOL DE LEVA FIESTA MAX 3 PINES 67-9S6G12K073AA ",-1)),tt=X(()=>g("div",{class:"q-mt-md text-center"}," Sensor Detonaci\xF3n Gran Vitara Chevrolet ",-1)),nt=X(()=>g("div",{class:"q-mt-md text-center"}," Sensor Oxigeno Fiat Palio Siena 1.8 ",-1));function at(e,a,l,f,r,t){return $(),se("div",Ze,[g("div",Je,[h(Le,{class:"my-card"},{default:b(()=>[g("div",Ye,[h(Ge,{modelValue:f.slide,"onUpdate:modelValue":a[0]||(a[0]=o=>f.slide=o),"transition-prev":"scale","transition-next":"scale",swipeable:"",animated:"","control-color":"white",navigation:"",padding:"",arrows:"",height:"400px",class:"bg-primary text-white shadow-1 rounded-borders"},{default:b(()=>[h(U,{name:"style",class:"column no-wrap flex-center"},{default:b(()=>[h(R,{src:Ae,style:{height:"140px","max-width":"150px"}}),$e]),_:1}),h(U,{name:"tv",class:"column no-wrap flex-center"},{default:b(()=>[h(R,{src:de,style:{height:"140px","max-width":"150px"}}),et]),_:1}),h(U,{name:"layers",class:"column no-wrap flex-center"},{default:b(()=>[h(R,{src:ve,style:{height:"140px","max-width":"150px"}}),tt]),_:1}),h(U,{name:"map",class:"column no-wrap flex-center"},{default:b(()=>[h(R,{src:Pe,style:{height:"140px","max-width":"150px"}}),nt]),_:1})]),_:1},8,["modelValue"])])]),_:1})])])}var ot=ee(We,[["render",at],["__scopeId","data-v-c8747e08"]]);const it={},rt={class:"q-pa-md"},lt={class:"q-col-gutter-md row items-start"},st={class:"col-6"},ut=g("div",{class:"absolute-bottom text-subtitle1 text-center"}," SENSOR TPS 3 PINES FIESTA ECOSPORT ",-1),ct={class:"col-6"},At=g("div",{class:"absolute-top text-center"}," SENSOR ARBOL DE LEVA FIESTA MAX 3 PINES 67-9S6G12K073AA ",-1),dt={class:"col-6"},vt=g("div",{class:"absolute-bottom-right text-subtitle2"}," Sensor Detonaci\xF3n Gran Vitara Chevrolet ",-1),Pt={class:"col-6"},mt=g("div",{class:"absolute-full text-subtitle2 flex flex-center"}," Sensor Oxigeno Fiat Palio Siena 1.8 ",-1);function gt(e,a){return $(),se("div",rt,[g("div",lt,[g("div",st,[h(R,{src:Ae},{default:b(()=>[ut]),_:1})]),g("div",ct,[h(R,{src:de},{default:b(()=>[At]),_:1})]),g("div",dt,[h(R,{src:ve},{default:b(()=>[vt]),_:1})]),g("div",Pt,[h(R,{src:Pe},{default:b(()=>[mt]),_:1})])])])}var ft=ee(it,[["render",gt]]);const ht=e=>(ue("data-v-8200646c"),e=e(),ce(),e),pt={class:"container"},St=ht(()=>g("div",{class:"cabeza"},[g("span",null,"J.L. THOMSON VENEZUELA C.A")],-1)),xt={class:"carru"},_t={class:"carru"},yt=Object.assign({name:"HomePage"},{__name:"HomePage",setup(e){return(a,l)=>($(),Be(me,null,{default:b(()=>[g("div",pt,[St,g("div",xt,[h(ot)]),g("div",_t,[h(ft)])])]),_:1}))}});var Ft=ee(yt,[["__scopeId","data-v-8200646c"]]);export{Ft as default};
