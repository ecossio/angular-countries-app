import{G as c,H as l,O as f,P as u,Q as h,S as g,V as d,Y as x,Z as C,h as o,j as m,k as r,s as a,t as s,u as p}from"./chunk-WAXPIARL.js";var v=[{path:"countries",loadChildren:()=>import("./chunk-EV5SIVA5.js").then(e=>e.CountriesModule)},{path:"**",redirectTo:"countries"}],b=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=r({type:t}),t.\u0275inj=o({imports:[d.forRoot(v),d]});let e=t;return e})();var M=(()=>{let t=class t{constructor(){this.title="country-app"}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=m({type:t,selectors:[["app-root"]],decls:5,vars:0,consts:[[1,"sidebar-wrapper"],["id","sidebar"],[1,"main","p-3"]],template:function(i,O){i&1&&(a(0,"div",0)(1,"aside",1),p(2,"shared-sidebar"),s(),a(3,"main",2),p(4,"router-outlet"),s()())},dependencies:[g,x],styles:[".sidebar-wrapper[_ngcontent-%COMP%]{display:flex}.main[_ngcontent-%COMP%]{position:absolute;min-height:100vh;width:100%;overflow:hidden;transition:all .35s ease-in-out;background-color:#fafbfe;padding-left:180px!important}#sidebar[_ngcontent-%COMP%]{position:fixed;width:170px;min-width:70px;z-index:1000;transition:all .25s ease-in-out;display:flex;flex-direction:column}#sidebar.expand[_ngcontent-%COMP%]{width:260px;min-width:260px}@media (min-width: 576px){#sidebar[_ngcontent-%COMP%]{width:170px}}@media (min-width: 768px){#sidebar[_ngcontent-%COMP%]{width:250px}.main[_ngcontent-%COMP%]{padding-left:260px!important}}"]});let e=t;return e})();var y=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=r({type:t,bootstrap:[M]}),t.\u0275inj=o({providers:[f(),{provide:c,useClass:l}],imports:[b,h,C]});let e=t;return e})();u().bootstrapModule(y,{ngZoneEventCoalescing:!0}).catch(e=>console.error(e));